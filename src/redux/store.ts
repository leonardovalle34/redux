import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./counter-slicer"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})