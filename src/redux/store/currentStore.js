import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";

const currentStore = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default currentStore;
