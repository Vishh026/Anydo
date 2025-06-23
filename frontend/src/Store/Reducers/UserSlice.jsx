import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user:null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        loadusers :(state,action) => {
            state.user = action.payload
        }
    }
})

export const { loadusers } = userSlice.actions
export default userSlice.reducer