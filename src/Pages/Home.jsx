import React from 'react'
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

//Импорт компонентов
import Categories from '../Components/Categories';
import Sort, { sortItemArr } from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import PizzaBlockSkeleton from '../Components/PizzaBlockSkeleton';
import Pagination from '../Components/Pagination';

//Взаимодействите со store
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters, setSearchValue } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

const Home = () => {
    const { items, status } = useSelector(state => state.pizza)
    const { categoryId, sortProperty, currentPage, searchValue } = useSelector(state => state.filter)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    };

    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId,
                sortProperty: sortProperty.sortProperty,
                currentPage
            })

            navigate(`?${queryString}`)
        }
        isMounted.current = true;

    }, [categoryId, sortProperty, currentPage])

    //Если был первый рендер, проверяет параметры URL и сохраняет их в редакс.
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortItemArr.find(obj => obj.sortProperty === params.sortProperty)


            dispatch(setFilters({
                ...params,
                sortProperty: sort,
            }))

            isSearch.current = true;
        }
    }, [])

    React.useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        window.scrollTo(0, 0)
        if (!isSearch.current) {
            dispatch(fetchPizzas({ currentPage, category, sortProperty }))
        }

        isSearch.current = false;
    }, [categoryId, sortProperty, currentPage])

    const pizzas = items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => <PizzaBlock key={item.id} {...item} />)

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === 'error'
                    ? (<div style={{ textAlign: 'center', padding: '100px 50px' }}>
                        <h2>Произошла ошибка <icon>😕</icon></h2>
                        <p>Проверьте правильность ссылки или подключение к интернету.</p>
                    </div>)
                    : (<div className="content__items">
                        {
                            status === 'loading'
                                ? [...new Array(8)].map((_, index) => <PizzaBlockSkeleton key={index} />)
                                : pizzas
                        }
                    </div>)
            }

            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
    )
}

export default Home;
