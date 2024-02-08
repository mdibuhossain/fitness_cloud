import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import isloadingSliceReducer from '../features/isloadingSlice'
import coursesReducer from '../features/coursesSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'


export default configureStore({
    reducer: {
        user: userReducer,
        isLoading: isloadingSliceReducer,
        courses: coursesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})