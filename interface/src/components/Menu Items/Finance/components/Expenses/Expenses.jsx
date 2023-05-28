import React, { useState } from 'react'
import "./Expenses.css"
import AddExpenses from '../../../../ModalWindows/AddExpenses/AddExpenses'
import Header from '../../../../Headers/Header/Header'

const Expenses = () => {

    const [products, setProducts] = useState([
        { name: "Закупка лезвий", price: "5000" },
        { name: "Закупка имплантов", price: "1000" },
        { name: "Новое оборудование", price: "6000" },
        { name: "Страховки", price: "15000" },
        { name: "Закупка протезов", price: "25000" },
        { name: "Закупка ваты", price: "5000" },
    ])
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
        const updatedDocuments = products.filter((product, index) => index !== id);
        setProducts(updatedDocuments);
    };

    return (
        <div className='expenses'>
            <Header text="Расходы" add={handleButtonClick} edit={handleEdit} editBlock={editBlock} />
            <div className='exp-task'>
                {products.map((product, id) => {
                    return <table className='exp-prod' key={id}>
                        <td>{product.name}</td>
                        <td className='exp-count'>
                            <div className='exp-price'>
                                <p>{product.price}₽</p>
                            </div>
                        </td>
                        {editBlock && <div className="close-exp" onClick={() => deleteBlock(id)}> <p>X</p> </div>}
                    </table>
                })}
            </div>
            {/* Модальное окно */}
            {showModal && <AddExpenses products={products} setProducts={setProducts} close={handleModalClose} />}
        </div>
    )
}

export default Expenses