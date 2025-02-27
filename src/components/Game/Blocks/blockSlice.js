import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderRange: [...Array(20).keys()],
    duration: 500,
    correctBlocks: [],
};

const blockSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    randomOrder: (state) => {
      let current = state.orderRange.length,
          temp
      while (current > 0) {
        let random = Math.floor(Math.random() * current);
        current--;
        temp = state.orderRange[current]
        state.orderRange[current] = state.orderRange[random]
        state.orderRange[random] = temp
      }
    },
    setCorrectBlocks: (state, action) => {
      state.correctBlocks.push(...action.payload)
    }
  },
});

export const { randomOrder, setCorrectBlocks } = blockSlice.actions;
export default blockSlice.reducer;
