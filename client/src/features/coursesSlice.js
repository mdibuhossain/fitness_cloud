import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: [],
}

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCourses } = coursesSlice.actions

export const selectcourses = (state) => state.courses.courses;

export default coursesSlice.reducer