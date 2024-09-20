import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sortProperty: {
        name: 'популярности',
        sortProperty: 'rating'
    },
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setSort(state, action) {
            state.sortProperty = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
            state.sortProperty = action.payload.sortProperty
        }
    }
})

export const { setCategoryId, setSearchValue, setSort, setCurrentPage, setFilters } = filterSlice.actions;
export default filterSlice.reducer;