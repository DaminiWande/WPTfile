const express = require("express")
const path = require('path')
const mysql = require('mysql2')
const router = express.Router()
const {getConnect} = require("../db")
const {personCollection}=require("../mongoDb")
const {PersonModel}=require("../mongooseDb")

const basePath = path.join(process.cwd(), "pages") 

router.get('/', function (req, res) {
    res.sendFile(path.join(basePath, "register.html"))
  })
  // router.post('/', function (req, res) {
  //   const data = req.body
  //   // console.log(data)
  //   try {
  //     const con = getConnect()
  
  //     con.connect(function (error) {
  //       if (error) throw error
  //       console.log("Connection Success")
  
  //       const sql = `insert into person (name, mobile, gender, email, password) 
  //     values('${data.name}', '${data.mobile}', '${data.gender}', '${data.email}', '${data.password}');`
  
  //       con.query(sql, function (err, result) {
  //         if (err) throw err
  //         if (result.affectedRows == 1) {
  //           console.log("inserted...")
  
  //           res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
  //         }
  //         else {
  //           res.json({ affectedRows: 0, msg: "Person not registered" })
  //           console.log("not inserted...")
  
  //         }
  //         // console.log("Inserted")
  //         // console.log(result)
  //       })
  //     })
  //     // res.sendFile(path.join(basePath, "register.html"))
  //   }
  //   catch (err) {
  //     res.sendFile(path.join(basePath, "register.html"))
  //   }
  // })





  //in mongodb connection
  // router.post('/', async function (req, res) {
  //   const personData = req.body

  //   try {
  
  //    const savePerson= await personCollection.insertOne(personData)
  //   console.log(savePerson)
  //   res.json({ msg: "Person registered" })
  //         // if (result.affectedRows == 1) {
  //         //   console.log("inserted...")
  
  //         //   res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
  //         // }
  //         // else {
  //         //   res.json({ affectedRows: 0, msg: "Person not registered" })
  //         //   console.log("not inserted...")
  
  //         // }
  //         // console.log("Inserted")
  //         // console.log(result)
        
      
  //     // res.sendFile(path.join(basePath, "register.html"))
  //   }
  //   catch (err) {
  //     res.json({ msg: "Error in register" })
  //   }
  // })


  //mongoose  connection
  router.post('/', async function (req, res) {
    const personData = req.body

    try {
    const person= new PersonModel(personData)
     const savePerson= await person.save()
    console.log(savePerson)

          if (savePerson) {
            console.log("inserted...")
            res.json({ affectedRows:1, msg: "Person registered" })
          }
          else {
            res.json({ affectedRows: 0, msg: "Person not registered" })
            console.log("not inserted...")
  
          }
    }
    catch (err) {
      console.error(err)
      res.json({ msg: "Error in register" })
    }
  })
console.log(module)
module.exports = router
console.log(module)
