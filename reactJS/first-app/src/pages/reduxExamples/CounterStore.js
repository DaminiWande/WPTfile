import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlicer"

export const counterStore=configureStore({
    reducer:{
        counter:counterReducer
        //this "counter" property name use to access state variables
        //in app view(CounterView) 
    }
})
