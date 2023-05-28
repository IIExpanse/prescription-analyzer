import React, { useState } from 'react'
import Calculation from "./components/calculation/Calculation"
import Documentation from "../../Main/components/Documentation/Documentation"
import "./Finance.css"
import Expenses from './components/Expenses/Expenses'
import Inventury from './components/Inventury/Inventury'
import Graphic from './components/Graphic/Graphic'

const Finance = () => {

    const [documents, setDocuments] = useState([
        { name: "Отчёт" },
        { name: "Чек" },
        { name: "Закупка" },
        { name: "Анализ затрат" }
    ])

    return (
        <div className='finances'>
            <div className='finance one'>
                <Graphic />
                <div className='doc-calc'>
                    <Documentation documents={documents} setDocuments={setDocuments} />
                    <Calculation />
                </div>
            </div>
            <div className='finance one'>
                <Expenses />
                <Inventury />
            </div>
        </div>
    )
}

export default Finance