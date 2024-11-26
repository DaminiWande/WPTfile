const express=require("express")
const mysql=require("mysql2")
const path = require('path')
const basePath=path.join(process.cwd(),"pages")
const {getConnection}=require("../db")

// __dirname will get path of express server
//process.cwd will get u to the current directive


const router=express.Router()//router can be export



router.get('/', function (req, res) {
    res.sendFile(path.join(basePath,"login.html"))
})

router.get('/list',function(req,res){
    res.send("List of person..")
})

router.post('/', function (req, res) {
    // res.sendFile(path.join(basePath,"login.html"))
    const data=req.body
    const sql=`select * from person where email='${data.email}' and password'${data.password}'`
    try{
     const c=getConnection()
     c.connect(function(err){
       if(err) throw err
       console.log("Connection successfully...")
 
       c.query(sql,function(err,result){
         if(err) throw err
         console.log(result)
         if(result.length==1){
           console.log("Login...")
           res.join({login:true,msg:"person logged-in",person:result[0]})
         }
         else{
           res.join({login:false,msg:"Person not logged-in"})
           console.log("not login")
         }
       })
     })
    }
    catch(err){
     res.sendFile(path.join(basePath,"Login.html"))
    }
 })

// router.get()
// router.post()
// router.delete()
// router.put()




console.log(module)
module.exports=router
console.log(module)





// const express = require("express")
// const path = require('path')
// const mysql = require('mysql2')

// const router = express.Router()
// const {getConnect} = require("../db")

// const basePath = path.join(process.cwd(), "pages") 

// router.get('/', function (req, res) {
//     res.sendFile(path.join(basePath, "login.html"))
// })

// router.post('/', function (req, res) {
//     const data = req.body
//     const sql=`select * from person where email='${data.email}' and password'${data.password}'`


//     try {
//         const con = getConnect()

//         con.connect(function (err) {
//             if (err) throw err
//             console.log("Connection Success")

//             con.query(sql, function (err, result) {
//                 if (err) throw err
//                 if (result.length == 1) {
//                     console.log("login...")

//                     res.json({ login: true, msg: "Person logged in", person: result[0] })
//                 }
//                 else {
//                     res.json({ login: false, msg: "Person not logged in" })
//                     loginconsole.log("not...")

//                 }
//             })
//         })

//     }
//     catch (err) {
//         res.sendFile(path.join(basePath, "login.html"))

//     }

// })

// console.log(module)

// module.exports = router

// console.log(module)

