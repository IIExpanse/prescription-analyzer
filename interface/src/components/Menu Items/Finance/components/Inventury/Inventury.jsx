import React, { useState } from 'react'
import "./Inventury.css"
import Header from '../../../../Headers/Header/Header'
import Search from '../../../../Headers/Search/Search'
import AddInventury from '../../../../ModalWindows/AddInventury/AddInventury'

const Inventury = () => {

    const [products, setProducts] = useState([
        { name: "Лезвия", count: "300" },
        { name: "Импланты", count: "1000" },
        { name: "Протезы", count: "10к" },
        { name: "Скальпели", count: "124" },
        { name: "Шприцы", count: "578" },
        { name: "Вата", count: "20к" },
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
        <div className='inventury'>
            <Header text="Складской учет" add={handleButtonClick} edit={handleEdit} editBlock={editBlock} />
            <Search />
            <div className='exp-task'>
                {products.map((product, id) => {
                    return <table className='exp-prod' key={id}>
                        <td>{product.name}</td>
                        <td className='exp-count'>
                            <div className='inv-count'>
                                <p>{product.count} шт.</p>
                            </div>
                        </td>
                        {/* Кнопка редактирования блока */}
                        {editBlock && <div className="close-exp" onClick={() => deleteBlock(id)}> <p>X</p> </div>}
                    </table>
                })}
            </div>
            {/* Модальное окно */}
            {showModal && <AddInventury products={products} setProducts={setProducts} close={handleModalClose} />}
        </div>
    )
}

export default Inventury