import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showComponent: true,
    name: "",
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        hiddenComponent: (state) => {
            state.showComponent = false;
        },
        addNameByAmount: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const {hiddenComponent, addNameByAmount} = alertSlice.actions;
export default alertSlice.reducer;