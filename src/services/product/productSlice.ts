import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Product from '../../Types/product';
import { fetchProduct1, fetchProduct2 } from './productAPI';

export interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await Promise.all([fetchProduct1(), fetchProduct2()]) ;
    return [...response[0].data, ...response[1].data];
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default counterSlice.reducer;
