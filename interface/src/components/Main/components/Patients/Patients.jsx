import React, { useState } from 'react'
import Search from "../../../Headers/Search/Search.jsx"
import AddPatient from '../../../ModalWindows/AddPatient/AddPatient.jsx'
import "./Patients.css"
import Header from '../../../Headers/Header/Header.jsx'

const Patients = ({ patients, setPatients }) => {
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
        const updatedPatients = patients.filter((note, index) => index !== id);
        setPatients(updatedPatients);
    };

    return (
        <div className="patients-box">
            <Header text="Пациенты" add={handleButtonClick} edit={handleEdit} editBlock={editBlock} />
            <Search />
            <table className="patients">
                {patients.map((patient, id) => {
                    return <tr className='patient' key={id}>
                        <td>{patient.name}</td> <td >{patient.mail}</td> <td className='patient-phone'>{patient.phone}</td>
                        {/* Кнопка редактирования блока */}
                        {editBlock && <div className="close-patient" onClick={() => deleteBlock(id)}> <p>X</p> </div>}
                    </tr>
                })}
            </table>
            {showModal && <AddPatient patients={patients} setPatients={setPatients} close={handleModalClose} />}
        </div>
    )
}

export default Patients