import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import eventReducer from "../features/eventsSlice";
import tableReducer from "../features/tablesSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventReducer,
    table: tableReducer,
    search: searchReducer,
  },
});
