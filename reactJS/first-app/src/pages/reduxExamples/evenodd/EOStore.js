import { configureStore } from "@reduxjs/toolkit";
import eoReducer from "./EOslicer"

export const eoStore=configureStore({
    reducer:{
        eoReducer:eoReducer
    }
})
