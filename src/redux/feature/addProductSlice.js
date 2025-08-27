import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "../fetchProducts";

const initialState = {
    products: [],
    cartProducts: [],
    loading: false,
    error: null,
}

const addProductSlice = createSlice({
    name: "addProduct",
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            state.products.push(action.payload);
        },
        addToCart: (state, action) => {
            const itemIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0) {
                const product = state.products[itemIndex];
                state.cartProducts.push(product);
            }
        },
        removeCartProduct: (state, action) => {
            const updatedCart = state.cartProducts.filter(
                item => item.id !== action.payload.id
            )
            state.cartProducts = updatedCart;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const { addNewProduct, addToCart, removeCartProduct } = addProductSlice.actions;
export default addProductSlice.reducer;