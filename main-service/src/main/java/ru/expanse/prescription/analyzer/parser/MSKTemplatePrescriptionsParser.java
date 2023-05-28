package ru.expanse.prescription.analyzer.parser;

import org.apache.pdfbox.io.RandomAccessBufferedFileInputStream;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.apache.pdfbox.text.TextPosition;
import org.springframework.stereotype.Component;
import ru.expanse.prescription.analyzer.dictionary.PrescriptionDictionary;

import java.io.File;
import java.io.IOException;
import java.util.*;

@Component
public class MSKTemplatePrescriptionsParser {
    private static final Set<String> endWords = Set.of("да", "Да", "по", "показаниям", "при", "отсутствии", "противопоказаний", "качестве");

    public List<List<String>> parsePrescriptions(File file) throws IOException {
        PDFParser parser = new PDFParser(
                new RandomAccessBufferedFileInputStream(file.toString()));
        parser.parse();
        PDDocument document = new PDDocument(parser.getDocument());
        Queue<List<String>> codesQueue = parseCodes(document);
        List<List<String>> result = new ArrayList<>();

        PDFTextStripper stripper = new PrescriptionsStripper();
        stripper.setSortByPosition(true);
        String text = stripper.getText(document);
        String[] lines = text.split(System.lineSeparator());
        document.close();

        List<String> prescriptions = new ArrayList<>();
        boolean collecting = false;
        boolean multiTable = false;
        float left = 0;
        float right = 0;

        for (int i = 0; i < lines.length; i++) {
            if (lines[i].matches(".*((?!В12)([A-Z|А-Я][0-9]{2})).*")) {
                continue;
            }

            StringTokenizer tokenizer = new StringTokenizer(lines[i]);

            while (tokenizer.hasMoreTokens()) {
                String s;

                if (!collecting) {
                    if (lines[i].charAt(lines[i].indexOf('}') + 1) != '№') {
                        break;
                    }
                    s = tokenizer.nextToken();
                    collecting = true;

                    while (s.charAt(s.indexOf('}') + 1) != 'Н') {
                        s = tokenizer.nextToken();
                    }
                    left = Float.parseFloat(s.substring(1, s.indexOf('}') - 1));

                    while (s.charAt(s.indexOf('}') + 1) != 'К') {
                        s = tokenizer.nextToken();
                    }
                    right = Float.parseFloat(s.substring(1, s.indexOf('}') - 1));

                    multiTable = false;
                }

                while (tokenizer.hasMoreTokens()) {
                    s = tokenizer.nextToken();

                    if (s.charAt(s.indexOf('}') + 1) == '№') {
                        int mod = i + 1;
                        int idx = lines[mod].indexOf('}') + 1;
                        String start = lines[mod].substring(idx, idx + 1);

                        while (!start.matches("\\d")) {
                            mod++;
                            idx = lines[mod].indexOf('}') + 1;
                            start = lines[mod].substring(idx, idx + 1);
                        }

                        if (start.charAt(0) != '1' || lines[mod].substring(idx + 1, idx + 2).matches("\\d")) {
                            multiTable = true;
                        }

                        if (!multiTable) {
                            result.add(codesQueue.poll());
                            result.add(prescriptions);
                            prescriptions = new ArrayList<>();
                        }
                        collecting = false;
                        i--;
                        break;
                    }

                    float position = Float.parseFloat(s.substring(1, s.indexOf('}') - 1));

                    if (left <= position && position < right) {
                        String word = s.substring(s.indexOf('}') + 1);

                        if (!endWords.contains(word) && !PrescriptionDictionary.prepositions.contains(word)) {
                            if (word.charAt(word.length() - 1) == ',') {
                                word = word.substring(0, word.length() - 1);
                            }
                            prescriptions.add(word);
                        }
                    }
                }
            }
        }
        return result;
    }

    private Queue<List<String>> parseCodes(PDDocument document) throws IOException {
        PDFTextStripper stripper = new PDFTextStripper();
        stripper.setSortByPosition(true);
        String text = stripper.getText(document);

        String[] lines = text.split(System.lineSeparator());
        Queue<List<String>> codesQueue = new ArrayDeque<>();
        List<String> codes = new ArrayList<>();
        boolean collectionFinished = false;

        for (String value : lines) {
            StringTokenizer tokenizer = new StringTokenizer(value);
            String start = value.substring(0, Math.min(value.length(), 2));

            while (tokenizer.hasMoreTokens()) {
                String s = tokenizer.nextToken();
                int l = s.length();

                if (l >= 3 && l <= 6
                        && s.matches("^(?!В12)([A-Z|А-Я][0-9]{2})([.-][0-9]*)?,?")) {

                    if (collectionFinished) {
                        codesQueue.add(codes);
                        codes = new ArrayList<>();
                        collectionFinished = false;
                    }
                    if (s.charAt(s.length() - 1) == ',') {
                        s = s.substring(0, l - 1);
                    }
                    if (s.contains("-")) {
                        String[] res = s.substring(1).split("-");
                        String letter = s.substring(0, 1);
                        int digit1 = Integer.parseInt(res[0]);
                        int digit2 = Integer.parseInt(res[1]);

                        while (digit1 != digit2) {
                            codes.add(letter + digit1);
                            digit1++;
                        }
                        codes.add(letter + digit1);

                    } else {
                        codes.add(s);
                    }

                } else if (l <= 11 && s.matches("([A-Z|А-Я][0-9]{2}[.][0-9]-[0-9]{2}[.][0-9]),?")) {
                    if (collectionFinished) {
                        codesQueue.add(codes);
                        codes = new ArrayList<>();
                        collectionFinished = false;
                    }
                    if (s.charAt(s.length() - 1) == ',') {
                        s = s.substring(0, l - 1);
                    }

                    String[] res = s.substring(1).split("-");
                    String letter = s.substring(0, 1);
                    String num = s.substring(1, s.indexOf("."));
                    int digit1 = Integer.parseInt(res[0].substring(res[0].indexOf(".") + 1));
                    int digit2 = Integer.parseInt(res[1].substring(res[1].indexOf(".") + 1));

                    while (digit1 != digit2) {
                        codes.add(letter + num + "." + digit1);
                        digit1++;
                    }
                    codes.add(letter + num + "." + digit1);

                } else if (start.charAt(0) == '№') {
                    collectionFinished = true;
                    break;
                }
            }
        }
        codesQueue.add(codes);

        return codesQueue;
    }

    private static class PrescriptionsStripper extends PDFTextStripper {

        public PrescriptionsStripper() throws IOException {
        }

        @Override
        protected void writeString(String text, List<TextPosition> textPositions) throws IOException {
            if (!text.isEmpty()) {
                boolean wordStart = true;

                for (TextPosition textPosition : textPositions) {
                    try {
                        StringBuilder sb = new StringBuilder();
                        String s = textPosition.getUnicode();

                        if (!s.equals(" ")) {
                            if (wordStart) {
                                sb.append("{").append(textPosition.getXDirAdj()).append("}");
                                wordStart = false;
                            }

                        } else {
                            wordStart = true;
                        }
                        sb.append(s);
                        writeString(sb.toString());

                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}