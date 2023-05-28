import React, { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./Result.css"

const Result = ({ close }) => {
    const complianceData = [
        { name: 'Раздел 1', value: 600 },
        { name: 'Раздел 2 ', value: 400 },
        { name: 'Раздел 3', value: 230 },
        { name: 'Раздел 4', value: 570 },
        { name: 'Раздел 5 ', value: 200 },
    ];

    const [notes, setNotes] = useState([
        { date: "2023-01-22", id: "10", direction: "Терапевт", diagnoz: "Сломал ногу", appointment: "Постельный режим", status: "Соответствует" },
        { date: "2023-01-23", id: "50", direction: "Хирург", diagnoz: "Инсульт", appointment: "Таблетки", status: "Частично" },
        { date: "2023-01-25", id: "20", direction: "Кардиолог", diagnoz: "Артрит", appointment: "Таблетки", status: "Частично" },
        { date: "2023-01-26", id: "10", direction: "Терапевт", diagnoz: "Перелом", appointment: "Постельный режим", status: "Доп.назначения" },
        { date: "2023-01-28", id: "70", direction: "Терапевт", diagnoz: "Простуда", appointment: "Таблетки", status: "Соответствует" },
        { date: "2023-02-01", id: "50", direction: "Кардиолог", diagnoz: "Остеохондроз", appointment: "Упражнения", status: "Соответствует" },
        { date: "2023-02-03", id: "20", direction: "Невролог", diagnoz: "Шизофрения", appointment: "Прогулка по улице", status: "Частично" },
        { date: "2023-02-05", id: "10", direction: "Дерматолог", diagnoz: "Высыпания", appointment: "Диета", status: "Доп.назначения" },
        { date: "2023-02-12", id: "30", direction: "Стоматолог", diagnoz: "Кариес", appointment: "Меньше сладкого", status: "Доп.назначения" },
    ])

    const patientcountData = [
        {
            name: 'Кардиология',
            Количество: 6000,
        },
        {
            name: 'Неврология',
            Количество: 2000,
        },
        {
            name: 'Стоматология',
            Количество: 2000,
        },
    ];

    const changeStatus = (note) => {
        switch (note) {
            case 'Соответствует':
                return 'tab proc';
            case "Частично":
                return 'tab dis';
            default:
                return "tab error"
        }
    };
    // Цвета для круговой диаграммы
    const COLORS = ['#91FF9C', '#B2E5FF', '#FFCEB6', '#cf9687',  '#99a39b', '#228d10', '#C94200', '#000000'];
    return (
        <div className="modal">
            <div className="result-content">
                <div className='modal-header'>
                    <p>Результат</p>
                    <div>
                        <button>Скачать в PDF</button>
                        <button>Скачать в DOC</button>
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                            <path d="M1.78125 17.5312L0.46875 16.2188L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2188 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2188L16.2188 17.5312L9 10.3125L1.78125 17.5312Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <hr />
                <div className='main-result'>
                    <div className='main-result-divs'>
                        <div className='res compliance'>
                            <p className='res-head'>Соответствия</p>
                            <hr />
                            {/* Круговой график */}
                            <div className='graph-pie'>
                                <PieChart  width={220} height={200}>
                                    <Pie
                                        data={complianceData}
                                        cx={120}
                                        cy={100}
                                        innerRadius={60}
                                        outerRadius={90}
                                        dataKey="value"
                                        value="sdad"
                                    >
                                        {complianceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                                
                                {/* Статистика графика */}
                                <div className='graph-state'>
                                    {complianceData.map((entry, index) => {
                                        return <div><div className="data-state" key={index} style={{ background: COLORS[index % COLORS.length] }}> {entry.value}</div> <p>{entry.name}</p> </div>
                                    })}
                                </div>
                            </div>
                            {/* График */}
                            <ResponsiveContainer>
                         <AreaChart
                             data={complianceData}
                             margin={{
                                 top: 10,
                                 right: 60,
                                 left: 0,
                                 bottom: 0,
                            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"  stroke="#2F9FD8" fill="#2F9FD8"/>
            <YAxis  stroke="#2F9FD8" fill="#2F9FD8"/>
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#2F9FD8" fill="#2F9FD8" />
          </AreaChart>
        </ResponsiveContainer>
                        </div>
                    </div>
                    <div className='res patient-count'>
                        <p className='res-head'>Кол-во пациентов</p>
                        <hr />
                        {/* График */}
                        <ResponsiveContainer width="100%" height="50%" className="graph-pat">
                            <BarChart
                                width={500}
                                height={200}
                                data={patientcountData}
                            >
                                <XAxis stroke="#2F9FD8" />
                                <YAxis stroke="#2F9FD8" />
                                <Bar dataKey="Количество"  barSize={30} fill="#B2E5FF" />
                            </BarChart>
                        </ResponsiveContainer>
                        <p>Общее количество пациентов - {patientcountData.reduce((s, i) => s = s + i.Количество, 0)}</p>
                        {/* Статистика графика количества пациентов*/}
                        <div className='graph-state-two'>
                            {patientcountData.map((entry, index) => {
                                return <div className='pat-count'><div className="data-state" key={index}> {entry.Количество / 100}% </div> <p>{entry.name}</p> <p>({entry.Количество} пациентов)</p></div>
                            })}
                        </div>
                    </div>
                </div>
                {/* Таблица пациентов */}
                <div className='patient-info-table'>
                    <table className="note-title">
                        <div className='title-date'>
                            <p>Дата</p>
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10.5V9.25H5V10.5H0ZM0 6.125V4.875H10V6.125H0ZM0 1.75V0.5H15V1.75H0Z" fill="#2F9FD8" />
                            </svg>
                        </div>
                        <td className='surname3'>ID пац.</td>
                        <td className='otdel3'>Должность</td>
                        <td className='doctor3'>Диагноз</td>
                        <td className='phone3'>Назначения</td>
                        <div className='status3'>
                            <p>Соответсвие</p>
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10.5V9.25H5V10.5H0ZM0 6.125V4.875H10V6.125H0ZM0 1.75V0.5H15V1.75H0Z" fill="#2F9FD8" />
                            </svg>
                        </div>
                    </table>
                    <table className='note'>
                        {notes.map((note, id) => {
                            return <tr className="pat-tabl" key={id}>
                                <div className='pat-infoid'>
                                    <td className='pat-infotable'>{note.date}</td>
                                    <td className='pat-id'> {note.id}</td>
                                </div>
                                <td className='pat-direct'>{note.direction}</td>
                                <td className='pat-diagnoz'>{note.diagnoz}</td>
                                <td className='pat-appoint'>{note.appointment}</td>
                                <div className={changeStatus(note.status)}><td>{note.status}</td></div>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Result