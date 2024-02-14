import React from "react";
import { Provider } from "react-redux";
import currentStore from "./store/currentStore";

export default function ReduxProvider({ children }) {
  return (
    <>
      <Provider store={currentStore}>{children}</Provider>
    </>
  );
}
