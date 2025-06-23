import axios from "../../api/axiosConfig"
import { addTask } from "../Reducers/TaskSlice";

export const asyncAddTask = (task) => async(dispatch,getstate) => {
    try {
        const { data } = await axios.post("/tasks",task);
        console.log("Task added:", data);
        
        dispatch(addTask(data))
    } catch (error) {
        console.error("Error in addTask action:", error);
        
    }
}
