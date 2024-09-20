import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, { rejectWithValue }) => {
    const { currentPage, category, sortProperty } = params;
    const { data } = await axios.get(`https://6695964f4bd61d8314cbb28b.mockapi.io/items/?page=${currentPage}&limit=4&${category}&sortBy=${sortProperty.sortProperty}`)
    if (data.lenth === 0) {
        return rejectWithValue('Ошибка получения пицц!')
    }
    return data;
})

const initialState = {
    items: [],
    status: '', // loading | success | error
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success';
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            console.log(action)
            state.status = 'error';
            state.items = [];
        });
    }
})

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;