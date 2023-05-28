import React, { useState } from 'react'
import "./Events.css"
import Search from '../../../Headers/Search/Search'
import Protocol from '../Protocol/Protocol'

const Events = () => {
    const [workers, setWorkers] = useState([
        { name: "Название не найдено", descr: "Невролог" },
        { name: "Название не найдено", descr: "Кардиолог" },
        { name: "Название не найдено", descr: "Терапевт" },
        { name: "Название не найдено", descr: "Стоматолог" },
    ])

    return (
        <div className='events'>
            <Protocol />
            <Search />
            <table className='events-list'>
                {workers.map((work, id) => {
                    return <tr className='event' key={id}>
                        <td> <div><input type="checkbox" /> {work.name} </div></td>
                        <td>{work.descr}</td>
                    </tr>
                })}
            </table>
            <button className='analiz'>Анализировать</button>
        </div >
    )
}

export default Events