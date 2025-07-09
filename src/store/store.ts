import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { userReducer } from "../features/user/userSlice";

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
})

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
