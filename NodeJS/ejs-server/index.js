const express=require("express")
const app=express()
app.set("view engine","ejs")

app.get("/",(req,res)=>{
   res.render("home",{name:"Manish"})
})
app.get("/list",(req,res)=>{
    const guests=[
        {
            name:"Poonam",
            mobile:"234567891",
            food:false
        },
        {
            name:"Rakesh",
            mobile:"234499819",
            food:true
        },
        {
            name:"Lokesh",
            mobile:"2345678122",
            food:false
        },
        
        // when we will comment or the data will be empty then the guests it will show no guests as we applied the condition in if else
    ]
    res.render("welcome",{guests})
})
app.listen(3000,"localhost",()=>
{
    console.log("http://localhost:3000")
})