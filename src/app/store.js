import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import isloadingSliceReducer from '../features/isloadingSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'


export default configureStore({
    reducer: {
        user: userReducer,
        isLoading: isloadingSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})