import React, { useState } from 'react'
import "./Notes.css"
import AddNote from '../../../ModalWindows/AddNote/AddNote';
import Header from '../../../Headers/Header/Header';

const Notes = ({ notes, setNotes }) => {

    const [showModal, setShowModal] = useState(false)
    const [editBlock, setEdit] = useState(false)

    const changeStatus = (note) => {
        switch (note) {
            case 'В процессе':
                return 'tab proc';
            case "Отклонено":
                return 'tab dis';
            case "Подтверждено":
                return 'tab acc';
            case "Неизвестно":
                return 'tab ans';
            case "Завершено":
                return 'tab end';
            default:
                return "tab err"
        }
    };

    const changeTime = (note) => {
        switch (note) {
            case 'В процессе':
                return 'time-proc';
            case "Отклонено":
                return 'time-dis';
            case "Подтверждено":
                return 'time-acc';
            case "Неизвестно":
                return 'time-ans';
            case "Завершено":
                return "time-end"
            default:
                return "time-err"
        }
    };

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
        const updatedNotes = notes.filter((note, index) => index !== id);
        setNotes(updatedNotes);
    };

    return (
        <div className="notes">
            <Header text="Записи" add={handleButtonClick} edit={handleEdit} editBlock={editBlock} />
            <table className="note-title">
                <div className='title-date'>
                    <p>Дата и время</p>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.5V9.25H5V10.5H0ZM0 6.125V4.875H10V6.125H0ZM0 1.75V0.5H15V1.75H0Z" fill="#2F9FD8" />
                    </svg>
                </div>
                <td className={editBlock === true ? "surname2" : 'surname'}>ФИО</td>
                <td className={editBlock === true ? "otdel2" : 'otdel'}>Отделение</td>
                <td className={editBlock === true ? "doctor2" : 'doctor'}>Врач</td>
                <td className={editBlock === true ? "phone2" : 'phone'}>Телефон</td>
                <div className={editBlock === true ? "status2" : 'status'}>
                    <p>Статус</p>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.5V9.25H5V10.5H0ZM0 6.125V4.875H10V6.125H0ZM0 1.75V0.5H15V1.75H0Z" fill="#2F9FD8" />
                    </svg>
                </div>
            </table>
            <table className='note'>
                {notes.map((note, id) => {
                    return <tr className="doc" key={id}>
                        <div>
                            <td className='date'>{note.date}</td>
                            <div className={changeTime(note.status)}><td className='note-time'>{note.time}</td></div>
                        </div>
                        <td>{note.name}</td>
                        <td className='direct'>{note.direction}</td>
                        <td className='doctor'>{note.doctor}</td>
                        <td>{note.phone}</td>
                        <div className={changeStatus(note.status)}><td>{note.status}</td></div>
                        {/* Кнопка редактирования блока */}
                        {editBlock && <td className="close-note-td"><div className="close-note" onClick={() => deleteBlock(id)}> <p>X</p> </div></td>}
                    </tr>
                })}
            </table>
            {showModal && <AddNote notes={notes} setNotes={setNotes} close={handleModalClose} />}
        </div >
    )
}

export default Notes