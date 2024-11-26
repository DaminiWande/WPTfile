import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: "",
        auth: false,
        msg: "",
        signOut: false,
        res: false
    },
    reducers: {
        setResponse : function (state, action) {
            const responseData = action.payload
         if(responseData.login)
         {
            state.auth = true
            state.user = responseData.person
            state.msg = "Login Successful"
            state.signOut = false
         }

                console.log(responseData.data)
                state.auth = true
                state.user = responseData.person
                state.msg = "Login Successful"
                state.signOut = false
                alert()
         


            
        },
        logout: function (state, action) {
            state.auth = false
            state.msg = "Logout Successfully"
            state.user = ""
            state.signOut = true
        },

        registerUser: function (state, action) {
            const regData = action.payload

            // console.log(regData)
            state.msg = "Register Successful"
            state.res = true

        }
    }

})
export const { logout, registerUser ,setResponse} = loginSlice.actions
export default loginSlice.reducer

export const authenticate = (credentials) => async (dispatch) => {  //dispatch is by default paramiter
    try {
        alert("working in slice")
        const response = await axios.post("http://localhost:8000/login", credentials)
        console.log(response.data)
       dispatch(setResponse(response.data))
    }
    catch (err) {
        console.error(err)
    }
}

export function register(data) {
    return async  (dispatch)=> {
        try {
            // alert("working in slice")
            const response = await axios.post("http://localhost:8000/register", data)
            console.log(response.data)
           dispatch(registerUser(response.data))
        }
        catch (err) {
            console.error(err)
        }
    }

}