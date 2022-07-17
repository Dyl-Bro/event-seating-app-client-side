import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import guestService from "../services/guests.service";

export const addGuest = createAsyncThunk(
  "guests/addGuest",
  async (data, thunkAPI) => {
    console.log("tableslice: " + data);
    try {
      await guestService.addGuest(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const removeGuest = createAsyncThunk(
  "guests/removeGuest",
  async (data, thunkAPI) => {
    console.log("tableslice: " + data);
    try {
      await guestService.removeGuest(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const guestsSlice = createSlice({
  name: "guests",
  initialState,
  reducer: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [addGuest.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
    },
    [addGuest.pending]: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [removeGuest.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
    },
    [removeGuest.pending]: (state, action) => {
      state.isLoading = true;
    },
    // [updateApplication.fulfilled]: (state, action) => {
    //   state.isSuccess = true;
    // },
    // [deleteApplication.fulfilled]: (state, action) => {
    //   state.isSuccess = true;
    // },
  },
});
export const { reset } = guestsSlice.actions;
export default guestsSlice.reducer;
