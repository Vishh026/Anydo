import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   taskList:[]
}

export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers: {
        loadTask :(state,action) => {
            state.taskList = action.payload
        },
        addTask: (state,action) => {
            state.taskList.unshift(action.payload)
        }
    }
})

export const { loadTask,addTask } = taskSlice.actions
export default taskSlice.reducer