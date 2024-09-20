import React from 'react';

const Categories = ({ value, onChangeCategory }) => {

    const pizzaArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',];

    return (<div className="categories">
        <ul>
            {
                pizzaArr.map((item, index) => {
                    return <li key={index} onClick={() => onChangeCategory(index)} className={value === index ? 'active' : ''} >{item}</li>
                })
            }
        </ul>
    </div>)
}

export default Categories;