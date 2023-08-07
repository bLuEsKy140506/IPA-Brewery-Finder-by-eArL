import { configureStore } from "@reduxjs/toolkit";
import brewery from "../store/reducers/brewery";

export const store = configureStore({
  reducer: {
    brewery: brewery,
  },
});
