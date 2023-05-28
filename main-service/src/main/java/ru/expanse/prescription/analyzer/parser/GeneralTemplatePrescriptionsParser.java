package ru.expanse.prescription.analyzer.parser;

import org.apache.pdfbox.io.RandomAccessBufferedFileInputStream;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Component;
import ru.expanse.prescription.analyzer.dictionary.PrescriptionDictionary;

import java.io.IOException;
import java.nio.file.Path;
import java.util.*;

@Component
public class GeneralTemplatePrescriptionsParser {
    private static final Set<String> targetBlocks = Set.of("Лабораторные", "Инструментальные");
    private static final Set<String> excludedBlocks = Set.of("Прием", "Хирургические,", "Наблюдение");

    public List<List<String>> parsePrescriptions(Path path) throws IOException {
        PDFParser parser = new PDFParser(
                new RandomAccessBufferedFileInputStream(path.toString()));
        parser.parse();
        PDDocument document = new PDDocument(parser.getDocument());
        PDFTextStripper stripper = new PDFTextStripper();
        stripper.setSortByPosition(true);

        String text = stripper.getText(document);
        document.close();
        String[] lines = text.split(System.lineSeparator());
        List<String> codes = new ArrayList<>();
        List<String> prescriptions = new ArrayList<>();
        boolean codesAdded = false;

        for (int i = 0; i < lines.length; i++) {
            StringTokenizer tokenizer = new StringTokenizer(lines[i]);
            if (!tokenizer.hasMoreTokens()) {
                continue;
            }
            String s = tokenizer.nextToken();

            if (!codesAdded) {
                while (tokenizer.hasMoreTokens() && !s.equals("Нозологические") && !s.equals("МКБ")) {
                    s = tokenizer.nextToken();
                }
                if (!tokenizer.hasMoreTokens()) {
                    continue;
                }

                tokenizer = new StringTokenizer(lines[--i]);
                while (!tokenizer.hasMoreTokens()) {
                    tokenizer = new StringTokenizer(lines[++i]);
                }
                s = tokenizer.nextToken();

                while (!s.equals("Медицинские")) {
                    if (s.matches("[A-Z|А-Я][0-9]+(.[0-9|А-Я]*)*")) {
                        codes.add(s);
                    }
                    if (tokenizer.hasMoreTokens()) {
                        s = tokenizer.nextToken();

                    } else {
                        tokenizer = new StringTokenizer(lines[++i]);
                    }
                }
                codesAdded = true;
            }

            while (++i < lines.length && !targetBlocks.contains(s)) {
                tokenizer = new StringTokenizer(lines[i]);
                if (!tokenizer.hasMoreTokens()) {
                    continue;
                }
                s = tokenizer.nextToken();
            }
            if (i == lines.length) {
                break;
            }

            while (!s.matches("[A-Z|А-Я][0-9]{2}.[0-9]{2}.[0-9]{3}")) {
                while (!tokenizer.hasMoreTokens()) {
                    if (++i == lines.length) {
                        return List.of(codes, prescriptions);
                    }

                    tokenizer = new StringTokenizer(lines[i]);
                }
                s = tokenizer.nextToken();
            }
            s = tokenizer.nextToken();
            boolean collecting = true;

            while (collecting) {
                while (tokenizer.hasMoreTokens()) {
                    if (!s.matches("(\\d|(\\d,\\d+))|[A-Z|А-Я][0-9]+.[0-9]{2}.[0-9]{3}")) {
                        char rightLetter = s.charAt(s.length() - 1);
                        int start;
                        int end;
                        if (s.charAt(0) == '(') {
                            start = 1;

                        } else {
                            start = 0;
                        }

                        if (rightLetter == ')' || rightLetter == ',') {
                            end = s.length() - 1;

                        } else {
                            end = s.length();
                        }
                        if (!PrescriptionDictionary.prepositions.contains(s)) {
                            prescriptions.add(s.substring(start, end));
                        }
                    }

                    s = tokenizer.nextToken();
                }
                if (++i == lines.length) {
                    break;
                }
                tokenizer = new StringTokenizer(lines[i]);

                if (!tokenizer.hasMoreTokens() || excludedBlocks.contains(tokenizer.nextToken())) {
                    collecting = false;

                } else if (++i < lines.length && !lines[i].isBlank()) {
                    tokenizer = new StringTokenizer(lines[i]);
                    s = tokenizer.nextToken();
                }
            }
        }

        return List.of(codes, prescriptions);
    }
}
