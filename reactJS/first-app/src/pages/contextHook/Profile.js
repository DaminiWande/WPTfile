import { Container } from "./Container"
import { useState } from "react"
import { createContext } from "react"

export const userContext=createContext()

export const Profile=()=>
{

    //profile k andar jayega container , container k andar profile card ...aur profilecard k andar profiledetails.
    const {user,setUser}=useState([{
        name:"Vijay",
        age:23,
        mobile:"12334567786",
        email:"abc@gmail.com",
        city:"Nagpur"
    },
    {
        name:"Kijay",
        age:26,
        mobile:"1233453456",
        email:"xyz@gmail.com",
        city:"Akola"
}])
    return(<>
    <userContext.Provider value={user}>
    <Container/>
    </userContext.Provider>
    </>)
}