import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   taskList: JSON.parse(localStorage.getItem("tasks")) || [],
   loading:false,
   error:null
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
        },
        deleteTask: (state,action) => {
            state.taskList = state.taskList.filter((task) => task.id !== action.payload)
        }
    }
})

export const { loadTask,addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer