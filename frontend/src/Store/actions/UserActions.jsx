import axios from "../../api/axiosConfig"
import { loadusers } from "../Reducers/UserSlice";


export const asyncCurrentUser = () => async(dispatch,getstate) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) dispatch(loadusers(user))
            else console.log("User not logged in");
    } catch (error) {
        console.error("Error in currentUser action:", error);
        
    }
}

export const asyncSignupUser = (user) => async(dispatch,getstate) => {
    try {
        const {data} = await axios.post("/users" ,user)
        console.log(data)
    } catch (error) {
        console.error("Error in signupUser action:", error);
    }
}
export const asyncLoginUser = (user) => async(dispatch,getstate) => {
    try {
        const { data }  = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem("user" ,JSON.stringify(data[0]))
    } catch (error) {
        console.error("Error in loginUser action:", error);
    }
}
export const asyncLogoutUser = () => async(dispatch,getstate) => {
    try {
        localStorage.removeItem("user",null)
    } catch (error) {
        console.error("Error in logoutUser action:", error);
    }
}


