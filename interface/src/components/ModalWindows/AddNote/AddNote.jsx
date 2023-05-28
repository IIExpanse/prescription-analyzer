import React, { useState } from 'react'

const AddNote = ({ notes, setNotes, close }) => {

    const [name, setName] = useState("")
    const [direction, setDirection] = useState("")
    const [doctor, setDoctor] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [status, setStatus] = useState("")

    // Кнопка, которая добавляет новый объект в массив данных
    function saveChanges() {
        const newItem = {
            name: name,
            direction: direction,
            doctor: doctor,
            time: time,
            phone: phone,
            date: date,
            status: status
        }
        setNotes([...notes, newItem])
        close()
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className='modal-header'>
                    <p>Добавить запись</p>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                        <path d="M1.78125 17.5312L0.46875 16.2188L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2188 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2188L16.2188 17.5312L9 10.3125L1.78125 17.5312Z" fill="black" />
                    </svg>
                </div>
                <hr />
                <div>
                    <div className='section'>
                        <input type="text" placeholder="ФИО" className='name note' value={name} onChange={e => setName(e.target.value)} />
                        <div className='phone notees'>
                            <input type="text" placeholder="Отделение" value={direction} onChange={e => setDirection(e.target.value)} />
                            <input type="text" placeholder="Врач" value={doctor} onChange={e => setDoctor(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='date-time'>
                    <input type="time" value={time} onChange={e => setTime(e.target.value)} />
                    <input type="date" id="birthday" min="1920-01-01" aria-label="Дата рождения" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <div className='addres'>
                    <input type="text" placeholder='Телефон' value={phone} onChange={e => setPhone(e.target.value)} />
                    <input class="pass" type="text" placeholder='Статус' value={status} onChange={e => setStatus(e.target.value)} />
                    <button onClick={saveChanges}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote