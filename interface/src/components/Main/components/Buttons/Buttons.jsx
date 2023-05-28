import React, { useState } from 'react'
import AddPatient from '../../../ModalWindows/AddPatient/AddPatient';
import AddNote from '../../../ModalWindows/AddNote/AddNote';
import AddDocument from "../../../ModalWindows/AddDocument/AddDocument"
import "./Buttons.css"

const Buttons = ({ documents, setDocuments, notes, setNotes, patients, setPatients }) => {

    const [showModal, setShowModal] = useState(false);
    const [showModalDocument, setShowModalDocument] = useState(false)
    const [showModalNote, setShowModalNote] = useState(false)

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleButtonClickNote = () => {
        setShowModalNote(true);
    }

    const handleModalCloseNote = () => {
        setShowModalNote(false);
    }

    const handleButtonClickDocument = () => {
        setShowModalDocument(true);
    }

    const handleModalCloseDocument = () => {
        setShowModalDocument(false);
    }

    return (
        <div className="Buttons">
            <div className="button" onClick={handleButtonClick}>
                <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5 20V13.5H28V10.5H34.5V4.00001H37.5V10.5H44V13.5H37.5V20H34.5ZM16 15.95C13.8 15.95 12 15.25 10.6 13.85C9.2 12.45 8.5 10.65 8.5 8.45001C8.5 6.25001 9.2 4.45001 10.6 3.05001C12 1.65001 13.8 0.950012 16 0.950012C18.2 0.950012 20 1.65001 21.4 3.05001C22.8 4.45001 23.5 6.25001 23.5 8.45001C23.5 10.65 22.8 12.45 21.4 13.85C20 15.25 18.2 15.95 16 15.95ZM0 32V27.3C0 26.1333 0.291667 25.075 0.875 24.125C1.45833 23.175 2.3 22.4667 3.4 22C5.9 20.9 8.1223 20.125 10.0669 19.675C12.0115 19.225 13.9865 19 15.9919 19C17.9973 19 19.9667 19.225 21.9 19.675C23.8333 20.125 26.05 20.9 28.55 22C29.65 22.5 30.5 23.2167 31.1 24.15C31.7 25.0833 32 26.1333 32 27.3V32H0ZM3 29H29V27.3C29 26.7667 28.85 26.2583 28.55 25.775C28.25 25.2917 27.85 24.9333 27.35 24.7C24.9833 23.6 22.9833 22.875 21.35 22.525C19.7167 22.175 17.9333 22 16 22C14.0667 22 12.275 22.175 10.625 22.525C8.975 22.875 6.96667 23.6 4.6 24.7C4.1 24.9333 3.70833 25.2917 3.425 25.775C3.14167 26.2583 3 26.7667 3 27.3V29ZM16 12.95C17.3 12.95 18.375 12.525 19.225 11.675C20.075 10.825 20.5 9.75001 20.5 8.45001C20.5 7.15001 20.075 6.07501 19.225 5.22501C18.375 4.37501 17.3 3.95001 16 3.95001C14.7 3.95001 13.625 4.37501 12.775 5.22501C11.925 6.07501 11.5 7.15001 11.5 8.45001C11.5 9.75001 11.925 10.825 12.775 11.675C13.625 12.525 14.7 12.95 16 12.95Z" fill="#2F9FD8" />
                </svg>
                <p>Добавить <br />пациента</p>
            </div>
            <div className="button" onClick={handleButtonClickDocument}>
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 19.5V16.5H24V19.5H8ZM8 11.5V8.5H24V11.5H8ZM3 24.5H19C19.881 24.5 20.7013 24.7 21.4608 25.1C22.2203 25.5 22.8667 26.0333 23.4 26.7L29 34V3H3V24.5ZM3 37H27.5L21.05 28.55C20.7978 28.2206 20.4931 27.9633 20.1358 27.778C19.7786 27.5927 19.4 27.5 19 27.5H3V37ZM29 40H3C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H29C29.8 0 30.5 0.3 31.1 0.9C31.7 1.5 32 2.2 32 3V37C32 37.8 31.7 38.5 31.1 39.1C30.5 39.7 29.8 40 29 40Z" fill="#2F9FD8" />
                </svg>
                <p>Создать <br />документ</p>
            </div>
            <div className="button">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.45 10.95C9.85 10.95 10.2 10.8 10.5 10.5C10.8 10.2 10.95 9.85 10.95 9.45C10.95 9.05 10.8 8.7 10.5 8.4C10.2 8.1 9.85 7.95 9.45 7.95C9.05 7.95 8.7 8.1 8.4 8.4C8.1 8.7 7.95 9.05 7.95 9.45C7.95 9.85 8.1 10.2 8.4 10.5C8.7 10.8 9.05 10.95 9.45 10.95ZM9.45 19.5C9.85 19.5 10.2 19.35 10.5 19.05C10.8 18.75 10.95 18.4 10.95 18C10.95 17.6 10.8 17.25 10.5 16.95C10.2 16.65 9.85 16.5 9.45 16.5C9.05 16.5 8.7 16.65 8.4 16.95C8.1 17.25 7.95 17.6 7.95 18C7.95 18.4 8.1 18.75 8.4 19.05C8.7 19.35 9.05 19.5 9.45 19.5ZM9.45 28.05C9.85 28.05 10.2 27.9 10.5 27.6C10.8 27.3 10.95 26.95 10.95 26.55C10.95 26.15 10.8 25.8 10.5 25.5C10.2 25.2 9.85 25.05 9.45 25.05C9.05 25.05 8.7 25.2 8.4 25.5C8.1 25.8 7.95 26.15 7.95 26.55C7.95 26.95 8.1 27.3 8.4 27.6C8.7 27.9 9.05 28.05 9.45 28.05ZM3 36C2.2 36 1.5 35.7 0.9 35.1C0.3 34.5 0 33.8 0 33V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H26.1L36 9.9V33C36 33.8 35.7 34.5 35.1 35.1C34.5 35.7 33.8 36 33 36H3ZM3 33H33V11.5714H24.45V3H3V33Z" fill="#2F9FD8" />
                </svg>
                <p>Открыть<br /> бюджет</p>
            </div>
            <div className="button" onClick={handleButtonClickNote}>
                <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.3 31.55H11.3L24.05 18.8L21.1 15.75L8.3 28.55V31.55ZM24.95 17.9L26.9 15.95C27.1333 15.7167 27.2583 15.4583 27.275 15.175C27.2917 14.8917 27.1667 14.6167 26.9 14.35L25.45 12.95C25.1833 12.6833 24.9167 12.5583 24.65 12.575C24.3833 12.5917 24.1333 12.7167 23.9 12.95L22 14.85L24.95 17.9ZM3 40C2.175 40 1.46875 39.7062 0.88125 39.1188C0.29375 38.5312 0 37.825 0 37V7C0 6.175 0.29375 5.46875 0.88125 4.88125C1.46875 4.29375 2.175 4 3 4H13.25C13.4167 2.83333 13.95 1.875 14.85 1.125C15.75 0.375 16.8 0 18 0C19.2 0 20.25 0.375 21.15 1.125C22.05 1.875 22.5833 2.83333 22.75 4H33C33.825 4 34.5312 4.29375 35.1188 4.88125C35.7062 5.46875 36 6.175 36 7V37C36 37.825 35.7062 38.5312 35.1188 39.1188C34.5312 39.7062 33.825 40 33 40H3ZM3 37H33V7H3V37ZM18 6.15C18.4667 6.15 18.875 5.975 19.225 5.625C19.575 5.275 19.75 4.86667 19.75 4.4C19.75 3.93333 19.575 3.525 19.225 3.175C18.875 2.825 18.4667 2.65 18 2.65C17.5333 2.65 17.125 2.825 16.775 3.175C16.425 3.525 16.25 3.93333 16.25 4.4C16.25 4.86667 16.425 5.275 16.775 5.625C17.125 5.975 17.5333 6.15 18 6.15Z" fill="#2F9FD8" />
                </svg>
                <p>Добавить<br /> запись</p>
            </div>
            {showModal && <AddPatient patients={patients} setPatients={setPatients} close={handleModalClose} />}
            {showModalDocument && <AddDocument documents={documents} setDocuments={setDocuments} close={handleModalCloseDocument} />}
            {showModalNote && <AddNote notes={notes} setNotes={setNotes} close={handleModalCloseNote} />}
        </div >
    )
}

export default Buttons