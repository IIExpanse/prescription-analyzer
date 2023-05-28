import React, { useState } from 'react'
import "./AddAppeal.css"

const AddAppeal = ({ close }) => {

    const [name, setName] = useState("")

    return (
        <div className="modal">
            <div className="modal-content">
                <div className='modal-header'>
                    <p>Добавить обращение</p>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                        <path d="M1.78125 17.5312L0.46875 16.2188L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2188 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2188L16.2188 17.5312L9 10.3125L1.78125 17.5312Z" fill="black" />
                    </svg>
                </div>
                <hr />
                <div className='modal-document'>
                    <input type="text" placeholder='Обращение' value={name} onChange={e => setName(e.target.value)} />
                    <button className='docum-btn'>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default AddAppeal