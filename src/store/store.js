import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../components/AlertModal/alertSlice"
import counterReducer from "../components/Game/NavBarInfo/WrongCounter/counterSlice"
import blockReducer from "../components/Game/Blocks/blockSlice"

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        counter: counterReducer,
        block: blockReducer,
    }
})