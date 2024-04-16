import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter", 
      initialState, 
       reducers: {
        increment(state) {  
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        setValue : (state, action) => {
            return {...state, value : action.payload}
        }
    }
})
export const{increment,decrement,setValue}=counterSlice.actions
export default counterSlice.reducer