import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from "../../../Headers/Search/Search.jsx"
import "./Workers.css"
import Header from '../../../Headers/Header/Header.jsx'

const Workers = () => {

    const [workers, setWorkers] = useState([
        { name: "Кондратьева С.Е.", descr: "Невролог", mail: "example@gmail.com", phone: "+79128271283" },
        { name: "Иванов Е.А.", descr: "Кардиолог", mail: "example@gmail.com", phone: "+79128271283" },
        { name: "Дмитриенко П.У.", descr: "Терапевт", mail: "example@gmail.com", phone: "+79128271283" },
        { name: "Кравченко А.А", descr: "Стоматолог", mail: "example@gmail.com", phone: "+79128271283" }
    ])
    const [editBlock, setEdit] = useState(false)

    // Функция проверки, нажата ли кнопка редактирования
    const handleEdit = () => {
        setEdit(!editBlock)
    }

    // Функция удаления объекта из массива данных
    const deleteBlock = (id) => {
        const updatedWorkers = workers.filter((worker, index) => index !== id);
        setWorkers(updatedWorkers);
    };

    return (
        <div className='workers'>
            <Header text="Сотрудники" edit={handleEdit} editBlock={editBlock} />
            <Search />
            <table className='workerlist'>
                {workers.map((worker, id) => {
                    return <tr className='worker' key={id}>
                        <td>{worker.name}</td>
                        <td>{worker.descr}</td>
                        <td>{worker.mail}</td>
                        <td>{worker.phone}</td>
                        {/* Кнопка редактирования блока */}
                        {editBlock && <div className="close-worker" onClick={() => deleteBlock(id)}> <p>X</p> </div>}
                    </tr>
                })}
            </table>
        </div >
    )
}

export default Workers