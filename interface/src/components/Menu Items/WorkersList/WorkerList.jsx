import React, { useState } from 'react'
import AddAppeal from '../../ModalWindows/AddAppeal/AddAppeal'
import "./WorkerList.css"

const WorkerList = () => {

    const [doctors, setDoctors] = useState([
        { name: "Леонов А.Д.", direction: "Терапия", phone: "+79222557017", mail: "example@gmail.com", },
        { name: "Денисов П.Ф.", direction: "Хирургия", phone: "+79182557010", mail: "example@gmail.com", },
        { name: "Аминов М.А.", direction: "Кардиология", phone: "+79122557013", mail: "example@gmail.com", },
        { name: "Терябина Е.В.", direction: "Терапия", phone: "+79922557028", mail: "example@gmail.com", },
        { name: "Рагимов Р.М.", direction: "Кардиология", phone: "+79892557092", mail: "example@gmail.com", },
        { name: "Михайлов Ф.К.", direction: "Неврология", phone: "+79282557031", mail: "example@gmail.com", },
        { name: "Евгененко Т.Б.", direction: "Дерматология", phone: "+79722557092", mail: "example@gmail.com", },
    ])
    const [directions, setDirections] = useState([
        { name: "Терапия" },
        { name: "Стоматология" },
        { name: "Хирургия" },
        { name: "Кадиология" },
        { name: "Неврология" },
        { name: "Дерматология" }
    ])
    const [showModal, setShowModal] = useState(false)


    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className='worker-list'>
            <div className="graphic-doc">
                <p>График врачей</p>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.75 12L2.75001 24L0.600006 21.85L10.5 12L0.650006 2.15L2.80001 0L14.75 12Z" fill="black" />
                </svg>
            </div>
            <p className='workerlist-head'>ВСЕ СОТРУДНИКИ ({doctors.length})</p>
            <div className='search2'>
                <div>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7778 20.5L11.4722 13.1944C10.9167 13.6759 10.2689 14.0509 9.52892 14.3194C8.78893 14.588 8.00152 14.7222 7.16667 14.7222C5.16367 14.7222 3.46847 14.0278 2.08108 12.6389C0.693695 11.25 0 9.57407 0 7.61111C0 5.64815 0.694444 3.97222 2.08333 2.58333C3.47222 1.19444 5.15278 0.5 7.125 0.5C9.09722 0.5 10.7731 1.19444 12.1528 2.58333C13.5324 3.97222 14.2222 5.64954 14.2222 7.61528C14.2222 8.4088 14.0926 9.17593 13.8333 9.91667C13.5741 10.6574 13.1852 11.3519 12.6667 12L20 19.2778L18.7778 20.5ZM7.13889 13.0556C8.64352 13.0556 9.92245 12.5231 10.9757 11.4583C12.0289 10.3935 12.5556 9.11111 12.5556 7.61111C12.5556 6.11111 12.0289 4.8287 10.9757 3.76389C9.92245 2.69907 8.64352 2.16667 7.13889 2.16667C5.61883 2.16667 4.32678 2.69907 3.26272 3.76389C2.19868 4.8287 1.66667 6.11111 1.66667 7.61111C1.66667 9.11111 2.19868 10.3935 3.26272 11.4583C4.32678 12.5231 5.61883 13.0556 7.13889 13.0556Z" fill="#2F9FD8" />
                    </svg>
                    <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="2.18557e-08" x2="0.999999" y2="25" stroke="#2F9FD8" />
                    </svg>
                    <input type="text" placeholder="Поиск" />
                </div>
            </div>
            <div className='doc-otdels'>
                <p className='workerlist-head'>ОТДЕЛЕНИЯ</p>
                <div>
                    {directions.map((direction, i) => {
                        return <div className='doc-otdel' key={i}>
                            <p>{direction.name}</p>
                            <div><p>3</p></div>
                        </div>
                    })}
                </div>
            </div>
            <div className='workers-table'>
                {doctors.map((doctor, i) => {
                    return <table className='doctors'>
                        <tr className="worker-doc" key={i}>
                            <td className='worker-name'>{doctor.name}</td>
                            <td>{doctor.direction}</td>
                            <td>{doctor.phone}</td>
                            <td>{doctor.mail}</td>
                            <div className='worker-divs'>
                                <div className='appeal' onClick={handleButtonClick}><p>Добавить обращение</p></div>
                                <div className='worker-graph'>
                                    <td>
                                        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.88501 11.735C4.63001 11.735 4.41626 11.6487 4.24376 11.4762C4.07126 11.3037 3.98501 11.09 3.98501 10.835C3.98501 10.58 4.07126 10.3662 4.24376 10.1937C4.41626 10.0212 4.63001 9.93499 4.88501 9.93499C5.14001 9.93499 5.35376 10.0212 5.52626 10.1937C5.69876 10.3662 5.78501 10.58 5.78501 10.835C5.78501 11.09 5.69876 11.3037 5.52626 11.4762C5.35376 11.6487 5.14001 11.735 4.88501 11.735ZM8.86751 11.735C8.61251 11.735 8.39876 11.6487 8.22626 11.4762C8.05376 11.3037 7.96751 11.09 7.96751 10.835C7.96751 10.58 8.05376 10.3662 8.22626 10.1937C8.39876 10.0212 8.61251 9.93499 8.86751 9.93499C9.12251 9.93499 9.33626 10.0212 9.50876 10.1937C9.68126 10.3662 9.76751 10.58 9.76751 10.835C9.76751 11.09 9.68126 11.3037 9.50876 11.4762C9.33626 11.6487 9.12251 11.735 8.86751 11.735ZM12.6925 11.735C12.4375 11.735 12.2238 11.6487 12.0513 11.4762C11.8788 11.3037 11.7925 11.09 11.7925 10.835C11.7925 10.58 11.8788 10.3662 12.0513 10.1937C12.2238 10.0212 12.4375 9.93499 12.6925 9.93499C12.9475 9.93499 13.1613 10.0212 13.3338 10.1937C13.5063 10.3662 13.5925 10.58 13.5925 10.835C13.5925 11.09 13.5063 11.3037 13.3338 11.4762C13.1613 11.6487 12.9475 11.735 12.6925 11.735ZM2.05001 18.8C1.69001 18.8 1.37501 18.665 1.10501 18.395C0.835012 18.125 0.700012 17.81 0.700012 17.45V3.49999C0.700012 3.13999 0.835012 2.82499 1.10501 2.55499C1.37501 2.28499 1.69001 2.14999 2.05001 2.14999H3.51251V0.799988H4.97501V2.14999H12.625V0.799988H14.0875V2.14999H15.55C15.91 2.14999 16.225 2.28499 16.495 2.55499C16.765 2.82499 16.9 3.13999 16.9 3.49999V17.45C16.9 17.81 16.765 18.125 16.495 18.395C16.225 18.665 15.91 18.8 15.55 18.8H2.05001ZM2.05001 17.45H15.55V7.77499H2.05001V17.45ZM2.05001 6.42499H15.55V3.49999H2.05001V6.42499Z" fill="#2F9FD8" />
                                        </svg>
                                    </td>
                                    <td>График</td>
                                </div>
                                <div className='give-task'>
                                    <svg width="14" height="13" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.8925 13.5H10.2425V9.765H14V8.415H10.2425V4.5H8.8925V8.415H5V9.765H8.8925V13.5ZM9.50599 18C8.26498 18 7.09873 17.7638 6.00724 17.2913C4.91575 16.8188 3.96125 16.1738 3.14375 15.3563C2.32625 14.5388 1.68125 13.5837 1.20875 12.4911C0.73625 11.3985 0.5 10.231 0.5 8.98875C0.5 7.74647 0.73625 6.57902 1.20875 5.48642C1.68125 4.39381 2.32625 3.4425 3.14375 2.6325C3.96125 1.8225 4.91631 1.18125 6.00892 0.70875C7.10152 0.23625 8.26897 0 9.51125 0C10.7535 0 11.921 0.23625 13.0136 0.70875C14.1062 1.18125 15.0575 1.8225 15.8675 2.6325C16.6775 3.4425 17.3188 4.395 17.7913 5.49C18.2638 6.585 18.5 7.75301 18.5 8.99402C18.5 10.235 18.2638 11.4013 17.7913 12.4928C17.3188 13.5843 16.6775 14.5374 15.8675 15.3521C15.0575 16.1669 14.105 16.8119 13.01 17.2871C11.915 17.7624 10.747 18 9.50599 18ZM9.51125 16.65C11.6338 16.65 13.4375 15.9038 14.9225 14.4113C16.4075 12.9188 17.15 11.1113 17.15 8.98875C17.15 6.86625 16.4089 5.0625 14.9267 3.5775C13.4445 2.0925 11.6356 1.35 9.5 1.35C7.385 1.35 5.58125 2.09109 4.08875 3.57327C2.59625 5.05547 1.85 6.86438 1.85 9C1.85 11.115 2.59625 12.9188 4.08875 14.4113C5.58125 15.9038 7.38875 16.65 9.51125 16.65Z" fill="#2F9FD8" />
                                    </svg>
                                    <p>Поставить задачу</p>
                                </div>
                                <div className='work-icons'>
                                    <div className='work-icon'>
                                        <svg width="10" height="8" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.37673 3.08001C1.07886 3.08001 0.824927 2.97395 0.614927 2.76182C0.404927 2.5497 0.299927 2.2947 0.299927 1.99682C0.299927 1.69895 0.405992 1.44501 0.618122 1.23501C0.830237 1.02501 1.08524 0.920013 1.38312 0.920013C1.68099 0.920013 1.93493 1.02608 2.14493 1.23821C2.35493 1.45032 2.45993 1.70532 2.45993 2.00321C2.45993 2.30108 2.35386 2.55501 2.14173 2.76501C1.92962 2.97501 1.67462 3.08001 1.37673 3.08001ZM7.49673 3.08001C7.19886 3.08001 6.94493 2.97395 6.73493 2.76182C6.52493 2.5497 6.41993 2.2947 6.41993 1.99682C6.41993 1.69895 6.52599 1.44501 6.73812 1.23501C6.95024 1.02501 7.20524 0.920013 7.50312 0.920013C7.80099 0.920013 8.05493 1.02608 8.26493 1.23821C8.47493 1.45032 8.57993 1.70532 8.57993 2.00321C8.57993 2.30108 8.47386 2.55501 8.26173 2.76501C8.04962 2.97501 7.79462 3.08001 7.49673 3.08001ZM13.6167 3.08001C13.3189 3.08001 13.0649 2.97395 12.8549 2.76182C12.6449 2.5497 12.5399 2.2947 12.5399 1.99682C12.5399 1.69895 12.646 1.44501 12.8581 1.23501C13.0702 1.02501 13.3252 0.920013 13.6231 0.920013C13.921 0.920013 14.1749 1.02608 14.3849 1.23821C14.5949 1.45032 14.6999 1.70532 14.6999 2.00321C14.6999 2.30108 14.5939 2.55501 14.3817 2.76501C14.1696 2.97501 13.9146 3.08001 13.6167 3.08001Z" fill="#2F9FD8" />
                                        </svg>
                                    </div>
                                    <div className='work-icon'>
                                        <svg width="12" height="13" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.75002 15.75H2.74002L12.7075 5.78251L11.7175 4.79251L1.75002 14.76V15.75ZM15.565 4.81501L12.685 1.93501L13.63 0.990013C13.885 0.735013 14.2 0.607513 14.575 0.607513C14.95 0.607513 15.265 0.735013 15.52 0.990013L16.51 1.98001C16.765 2.23501 16.8925 2.55001 16.8925 2.92501C16.8925 3.30001 16.765 3.61501 16.51 3.87001L15.565 4.81501ZM14.62 5.76001L3.28002 17.1H0.400024V14.22L11.74 2.88001L14.62 5.76001ZM12.2125 5.28751L11.7175 4.79251L12.7075 5.78251L12.2125 5.28751Z" fill="#2F9FD8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    </table>
                })}
            </div>
            {/* Модальное окно */}
            {showModal && <AddAppeal close={handleModalClose} />}
        </div >
    )

}

export default WorkerList