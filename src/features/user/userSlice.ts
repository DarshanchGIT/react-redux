import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL: string = "https://api.escuelajs.co/api/v1/users";

// User Type
export type UserType = {
    id: number,
    email: string,
    name: string,
    role: string,
    avatar: string,
    creationAt?: Date,
    updatedAt?: Date
};

// State Type
export type InitialStateType = {
    user: UserType[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
};

// Initial State
const initialState: InitialStateType = {
    user: [],
    status: 'idle',
    error: null
};

// Async Thunk
export const fetchUsers = createAsyncThunk<UserType[]>(
    'user/fetchUser',
    async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data as UserType[];
    }
);

// Slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const userReducer = userSlice.reducer;
