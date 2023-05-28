import React, { useState } from 'react'
import Result from "../Result/Result"
import "./AddProtocol.css"

const AddProtocol = ({ close }) => {
    // Кнопка, которая добавляет новый объект в массив данных
    // function saveChanges() {
    //     const newItem = {
    //         name: name,
    //     }
    //     setDocuments([...documents, newItem])
    //     close()
    // }
    const [showModal, setShowModal] = useState(false);
    //Функция проверки, вызвано ли модальное окно
    const handleButtonClick = () => {
        setShowModal(true);
    };

    // Функция закрытия модального окна
    const handleModalClose = () => {
        setShowModal(false);
    };
    return (
        <div className="modal">
            <div className="prot-content">
                <div className='modal-header'>
                    <p>Загрузка протоколов</p>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                        <path d="M1.78125 17.5312L0.46875 16.2188L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2188 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2188L16.2188 17.5312L9 10.3125L1.78125 17.5312Z" fill="black" />
                    </svg>
                </div>
                <hr />
                <div className='modal-document'>
                    <label className="doc-dwnld">
                        <input type="file" accept="application/pdf, application/vnd.ms-excel" />
                        <span>Перетащите файл в формате PDF или XLS
                            или нажмите для выбора</span>
                    </label>
                    <button className='analiz-prot' onClick={handleButtonClick}>Загрузить</button>
                </div>
            </div>
            {showModal && <Result close={handleModalClose} />}
        </div>
    )
}

export default AddProtocol