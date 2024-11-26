import { configureStore } from "@reduxjs/toolkit";

import factReducer from "./FactSlice";

 export const factStore = configureStore({
    reducer:
    
    {factReducer:factReducer}
})





    