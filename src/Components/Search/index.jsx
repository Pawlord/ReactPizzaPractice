import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

//Работа с redux
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef();

    const onClearClick = () => {
        dispatch(setSearchValue(''))
        setValue('')
        inputRef.current.focus()
    }

    const updateSearchValue = React.useCallback(
        debounce(str => {
            dispatch(setSearchValue(str))
        }, 500), []
    )

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className={styles.root}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
            <input
                ref={inputRef}
                value={value}
                className={styles.input}
                placeholder='Поиск пиццы...'
                onChange={(event) => onChangeInput(event)} />

            {value && (<svg onClick={onClearClick} className={styles.clearIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>)}
        </div>
    )
}

export default Search;
