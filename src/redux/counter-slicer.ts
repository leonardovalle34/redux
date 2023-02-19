import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface CountState{
    value : number
}

const initialState = {
    value : 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1
        },
        incrementAmount:(state, action : PayloadAction<number>)=>{
            state.value+= action.payload
        },
        decrementMinus1: (state, action : PayloadAction<number>)=>{
            state.value -= action.payload
        },
        
    }
})

export const {increment , incrementAmount , decrementMinus1 } = counterSlice.actions
export const counterReducer = counterSlice.reducer