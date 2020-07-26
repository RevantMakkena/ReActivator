import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
import {LoadState} from "./PersistData";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
