import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './Reducers/TaskSlice'
import userReducer from './Reducers/UserSlice'

export const store = configureStore({
    reducer : {
        taskSlice : taskReducer,
        userSlice : userReducer
    }
})