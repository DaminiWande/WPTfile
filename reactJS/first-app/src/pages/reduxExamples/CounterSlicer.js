import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name:"countername",
    initialState:{
        count:0
    },
    reducers:{
        increamentCount:(state,action)=>
        {
            const incBy=action.payload
            state.count+=parseInt(incBy)
        },
        decrementCount:(state,action)=>
        {
            const incBy=action.payload
            state.count-=parseInt(incBy)
        },

    }
})

export const {increamentCount,decrementCount}=counterSlice.actions
//counterSlice.actions returns an object of all function from reducer property of counterSlice then export them
export default counterSlice.reducer
//export reducer as default because can change name when import in store




