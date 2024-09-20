import React from 'react'
import axios from 'axios';

//Импорт роутов
import { Link, useParams } from 'react-router-dom';

const FullPizza = () => {
    const [pizza, setPizza] = React.useState<{
        imageUrl: string,
        title: string,
        price: number
    }>()
    const { id } = useParams();


    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://6695964f4bd61d8314cbb28b.mockapi.io/items/` + id)
                setPizza(data)

            } catch (error) {
                alert('Не удалось загрузить информацию о пицце.')
                console.log(error)
            }
        }

        fetchPizza()
    }, []);

    if (!pizza) {
        return <h2>Загрузка...</h2>
    }

    return (
        <div className='container'>
            <div className='fullPizza-wrapper' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 15 }}>
                <img src={pizza.imageUrl} alt="pizza-icon" style={{ width: 500, height: 500 }} />
                <h2 style={{ fontSize: 45 }}>{pizza.title}</h2>
                <p style={{ fontSize: 30 }}>{pizza.price} ₽</p>
                <Link className='fullPizza-back-button' style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25, background: 'black', color: 'white', fontSize: 25, borderRadius: 35 }} to={'/'}>Назад</Link>
            </div>
        </div>
    )
}

export default FullPizza