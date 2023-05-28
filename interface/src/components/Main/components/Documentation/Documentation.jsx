import React, { useState } from 'react'
import Search from "../../../Headers/Search/Search.jsx"
import AddDocument from "../../../ModalWindows/AddDocument/AddDocument.jsx"
import "./Documentation.css"
import Header from '../../../Headers/Header/Header.jsx'

const Documentation = ({ documents, setDocuments }) => {

    const [showModal, setShowModal] = useState(false);
    const [editBlock, setEdit] = useState(false)

    //Функция проверки, вызвано ли модальное окно
    const handleButtonClick = () => {
        setShowModal(true);
    };

    // Функция закрытия модального окна
    const handleModalClose = () => {
        setShowModal(false);
    };

    // Функция проверки, нажата ли кнопка редактирования
    const handleEdit = () => {
        setEdit(!editBlock)
    }

    // Функция удаления объекта из массива данных
    const deleteBlock = (id) => {
        const updatedDocuments = documents.filter((documents, index) => index !== id);
        setDocuments(updatedDocuments);
    };

    return (
        <div className='documentation'>
            <Header text="Документы" add={handleButtonClick} edit={handleEdit} editBlock={editBlock} />
            <Search />
            {documents.map((document, id) => {
                return <table className='document' key={id}>
                    <td className='doc-btn'><p>{document.name}</p></td> <td><button>Скачать</button></td>
                    {/* Кнопка редактирования блока */}
                    {editBlock && <div className="close-document" onClick={() => deleteBlock(id)}> <p>X</p> </div>}
                </table>
            })}
            {showModal && <AddDocument documents={documents} setDocuments={setDocuments} close={handleModalClose} />}
        </div>
    )
}

export default Documentation