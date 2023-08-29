import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: localStorage.getItem("search"),
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialState,
    reducers: {
    search(state, action) {
      state.search = action.payload;
      localStorage.setItem("search", action.payload);
    },
  },
})

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;
