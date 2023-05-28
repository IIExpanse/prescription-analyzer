import React, { useState } from 'react'
import Buttons from './components/Buttons/Buttons'
import Events from './components/Events/Events'
import Patients from './components/Patients/Patients'
import Notes from './components/Notes/Notes'
import Workers from './components/Workers/Workers'
import Documentation from './components/Documentation/Documentation'
import "./Main.css"
import Protocol from './components/Protocol/Protocol'

const Main = () => {
    const [documents, setDocuments] = useState([
        { name: "Отчёт" },
        { name: "Чек" },
        { name: "Закупка" },
        { name: "Анализ затрат" }
    ])
    const [patients, setPatients] = useState([
        { name: "Простокова Е. А.", mail: "example@gmail.com", phone: "+79151349083" },
        { name: "Магомедов Г. А.", mail: "example@gmail.com", phone: "+79151349083" },
        { name: "Иванов М. З.", mail: "example@gmail.com", phone: "+79151349083" },
        { name: "Захарова Н. А.", mail: "example@gmail.com", phone: "+79151349083" },
    ])
    const [notes, setNotes] = useState([
        { date: "2023-01-22", time: "11:00", name: "Ольга Е.И.", direction: "Терапия", doctor: "Лепонов А.Д.", phone: "+79228392917", status: "В процессе" },
        { date: "2023-01-23", time: "15:00", name: "Мария Д.М.", direction: "Хирургия", doctor: "Денисов П.Ф.", phone: "+79182552910", status: "Подтверждено" },
        { date: "2023-01-25", time: "12:00", name: "Гасан М.Р.", direction: "Кардиология", doctor: "Аминов М.А.", phone: "+79128392913", status: "Подтверждено" },
        { date: "2023-01-26", time: "11:00", name: "Андрей Е.К.", direction: "Терапия", doctor: "Терябина Е.В.", phone: "+79921982928", status: "Отклонено" },
        { date: "2023-01-28", time: "17:00", name: "Екатерина Е.П.", direction: "Терапия", doctor: "Вассеников В.В.", phone: "+79112123210", status: "Завершено" },
        { date: "2023-02-01", time: "15:00", name: "Вячеслав Л.З", direction: "Кардиология", doctor: "Рагимов Р.М.", phone: "+79892183192", status: "В процессе" },
        { date: "2023-02-03", time: "12:00", name: "Тимур Н.О.", direction: "Неврология", doctor: "Михайлов Ф.К.", phone: "+79287302931", status: "Подтверждено" },
        { date: "2023-02-05", time: "11:00", name: "Елена А.И.", direction: "Дерматология", doctor: "Евгененко Т.Б.", phone: "+79729301292", status: "Отклонено" },
        { date: "2023-02-12", time: "13:00", name: "Алина Е.У.", direction: "Стоматология", doctor: "Мастеренко П.Ф.", phone: "+79821029318", status: "Неизвестно" },
    ])

    return (
        <div className="main">
            <div className='main one'>
                <Buttons patients={patients} setPatients={setPatients} notes={notes} setNotes={setNotes} documents={documents} setDocuments={setDocuments} />
                <Events />
                <Patients patients={patients} setPatients={setPatients} />
            </div>
            <div className='main one two'>
                <Notes notes={notes} setNotes={setNotes} />
                <div className='work'>
                    <Workers />
                    <Documentation documents={documents} setDocuments={setDocuments} />
                </div>
            </div>
        </div>
    )
}

export default Main