import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Weatherslice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,   
  },
});