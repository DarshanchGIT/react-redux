import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incrementCounter: state => {
            state.value += 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

//create reducers with createSlice then use them as action or export them 

export const { incrementCounter, incrementByAmount } = counterSlice.actions


//by default the reducers will be exported
export const counterReducer = counterSlice.reducer