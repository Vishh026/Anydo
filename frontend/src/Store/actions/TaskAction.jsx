import axios from "../../api/axiosConfig";
import { addTask, deleteTask, loadTask, updatedTask } from "../Reducers/TaskSlice";

export const asyncLoadAllTask = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/tasks");
    dispatch(loadTask(data));
    localStorage.setItem("tasks", JSON.stringify(data));
  } catch (error) {
    console.log("Error while loading task", error);
  }
};

export const asyncAddTask = (task) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/tasks", task);
    dispatch(addTask(data));
    dispatch(asyncStoreTasktoLocal());
  } catch (error) {
    console.error("Error in addTask action:", error);
  }
};
export const asyncStoreTasktoLocal = () => async (dispatch, getState) => {
  try {
    const { taskList } = getState().taskSlice;
    localStorage.setItem("tasks", JSON.stringify(taskList));
  } catch (error) {
    console.log("Error in storing task", error);
  }
};

export const asyncDeleteTask = (id) => async (dispatch, getstate) => {
  try {
    await axios.delete(`/tasks/${id}`);
    dispatch(deleteTask(id));
    dispatch(asyncStoreTasktoLocal());
  } catch (error) {
    console.log("Error while deleteing task", error);
  }
};

export const  asyncUpdateTask = (id,updateddata) => async(dispatch,getState) => {

  try {
    const { data } = await axios.patch(`/tasks/${id}`,updateddata)
    dispatch(updatedTask({taskid: id,updates :data}))
    dispatch(asyncStoreTasktoLocal())
  } catch (error) {
    console.log("error while updating data",error);
    
  }
}


