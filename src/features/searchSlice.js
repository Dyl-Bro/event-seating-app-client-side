import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  isSuccess: false,
  isError: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducer: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
    },
  },
});
export const { reset } = searchSlice.actions;
export default searchSlice.reducer;
