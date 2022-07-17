import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tableService from "../services/tables.service";

export const createTable = createAsyncThunk(
  "tables/create",
  async (data, thunkAPI) => {
    console.log("tableslice: " + JSON.stringify(data));
    try {
      await tableService.post(data);
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
export const addGuest = createAsyncThunk(
  "tables/addGuest",
  async (data, thunkAPI) => {
    console.log("tableslice: " + data);
    try {
      await tableService.addGuest(data);
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
  "tables/removeGuest",
  async (data, thunkAPI) => {
    console.log("tableslice: " + data);
    try {
      await tableService.removeGuest(data);
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
export const getTable = createAsyncThunk("tables/get", async (thunkAPI) => {
  try {
    const response = await tableService.get();
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const getTables = createAsyncThunk("tables/getAll", async (thunkAPI) => {
  try {
    const response = await tableService.getAll();
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const deleteTable = createAsyncThunk(
  "tables/removeTable",
  async (thunkAPI) => {
    try {
      const response = await tableService.removeTable();
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
  tables: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  addTable: false,
  tableAdded: false,
  tableRemoved: false,
  guestAdded: false,
  guestRemoved: false,
};

const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.addTable = false;
      state.tableAdded = false;
      state.tableRemoved = false;
      state.guestAdded = false;
      state.guestRemoved = false;
    },
    add_table: (state) => {
      state.addTable = true;
    },
  },
  extraReducers: {
    [createTable.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.addTable = false;
      state.tableAdded = true;
      state.isError = false;
    },
    [getTables.fulfilled]: (state, action) => {
      state.tables = [...action.payload];
      state.isSuccess = true;
      state.isError = false;
    },
    [getTable.fulfilled]: (state, action) => {
      state.tables = [action.payload];
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    },
    [getTable.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addGuest.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.guestAdded = true;
      state.isLoading = false;
    },
    [addGuest.pending]: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [removeGuest.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.guestRemoved = true;
      state.isLoading = false;
    },
    [removeGuest.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteTable.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.tableRemoved = true;
      state.isLoading = false;
    },
    [deleteTable.pending]: (state, action) => {
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
export const { reset, add_table } = tablesSlice.actions;
export default tablesSlice.reducer;
