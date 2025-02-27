import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wrongCount: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.wrongCount += 1;
        }
    }
})

export const {increment} = counterSlice.actions;
export default counterSlice.reducer;