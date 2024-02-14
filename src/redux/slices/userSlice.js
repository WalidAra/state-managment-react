/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const user = {
  username: "",
  full_name: "",
  pfp: "",
};

const useSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    ReduxLogin: (state, action) => {
      state.username = action.payload.username;
      state.full_name = action.payload.full_name;
      state.pfp = action.payload.pfp;
    },
    ReduxReset: (state, action) => {
      state = user;
    },
  },
});

export const { ReduxLogin, ReduxReset } = useSlice.actions;

export default useSlice.reducer;
