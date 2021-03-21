import React, { createContext, useContext, useReducer } from "react";

//initializing context
export const stateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);
