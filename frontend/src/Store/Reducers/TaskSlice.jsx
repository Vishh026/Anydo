import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   taskList: JSON.parse(localStorage.getItem("tasks")) || [],
   loading:false,
   error:null,
   selectedtask:null
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
        },
        toggleTask: (state,action) => {
            const taskid = action.payload
            state.taskList = state.taskList.map((task)=> taskid == task.id ?
            {...task,checked : !task.checked} : task)
        },
        selectedTask: (state,action) => {
            state.selectedtask = action.payload
        },
        updatedTask : (state,action) => {
            const {taskid,updates} = action.payload
            const idx = state.taskList.findIndex((t) => t.id == taskid);
            if(idx !== -1){
                state.taskList[idx]= {
                    ...state.taskList[idx],
                    ...updates
                }

            }
        }
       
    }
})

export const { loadTask,addTask, deleteTask,toggleTask,selectedTask,updatedTask } = taskSlice.actions
export default taskSlice.reducer