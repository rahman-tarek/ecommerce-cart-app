import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/addProductSlice"
import { logger } from "./logger";

const redux = configureStore({
    reducer: {
        addProduct: productReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default redux;