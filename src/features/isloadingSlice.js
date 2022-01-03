import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true
}

export const isloadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { setIsLoading } = isloadingSlice.actions;

export const selectIsLoading = (state) => state.isLoading.isLoading;

export default isloadingSlice.reducer;