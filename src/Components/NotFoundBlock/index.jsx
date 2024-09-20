import React from 'react'

//Импорт стилей
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {

    return (
        <div className={styles.root}>
            <h1>
                <span>☹️</span>
                <br />
                Ничего не найдено
            </h1>
            <p className={styles.description}>К сожалению такой страницы не существует в нашем интернет-магазине.</p>
        </div>

    )
}

export default NotFoundBlock;

