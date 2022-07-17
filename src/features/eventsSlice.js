import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "../services/events.service";

export const createEvent = createAsyncThunk(
  "events/create",
  async (data, thunkAPI) => {
    console.log("eventslice data: " + JSON.stringify(data));
    try {
      const result = await eventService.post(data);
      return result;
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

export const getEvents = createAsyncThunk("events/getAll", async (thunkAPI) => {
  try {
    const response = await eventService.getAll();
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const deleteEvent = createAsyncThunk(
  "events/removeEvent",
  async (thunkAPI) => {
    try {
      const response = await eventService.removeEvent();
      return response;
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
// export const deleteApplication = createAsyncThunk(
//   "applications/deleteApp",
//   async (thunkAPI) => {
//     try {
//       const response = await applicationService.deleteApp();
//       return response;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const updateApplication = createAsyncThunk(
//   "applications/update",
//   async ({ interview_received, offer_received }, thunkAPI) => {
//     try {
//       await applicationService.update({ interview_received, offer_received });
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

const initialState = {
  events: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  addEvent: false,
  eventAdded: false,
  eventRemoved: false,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
      state.addEvent = false;
      state.eventAdded = false;
      state.eventRemoved = false;
    },
    add_event: (state) => {
      state.addEvent = true;
    },
  },
  extraReducers: {
    [createEvent.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.addEvent = false;
      state.eventAdded = true;
      state.isLoading = false;
    },
    [createEvent.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getEvents.fulfilled]: (state, action) => {
      state.events = [...action.payload];
      state.isSuccess = true;
      state.isLoading = false;
    },
    [getEvents.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteEvent.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isError = false;
      state.eventRemoved = true;
      state.isLoading = false;
    },
    [deleteEvent.pending]: (state, action) => {
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
export const { reset, add_event } = eventsSlice.actions;
export default eventsSlice.reducer;
