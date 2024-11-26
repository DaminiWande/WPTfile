const express = require("express")
const path = require('path')
const mysql = require('mysql2')

const router = express.Router()
const {getConnect} = require("../db")

const basePath = path.join(process.cwd(), "pages") 

router.get('/', function (req, res) {
    res.sendFile(path.join(basePath, "register.html"))
  })
  router.post('/', function (req, res) {
    const data = req.body
    // console.log(data)
    try {
      const con = getConnect()
  
      con.connect(function (error) {
        if (error) throw error
        console.log("Connection Success")
  
        const sql = `insert into person (name, mobile, gender, email, password) 
      values('${data.name}', '${data.mobile}', '${data.gender}', '${data.email}', '${data.password}');`
  
        con.query(sql, function (err, result) {
          if (err) throw err
          if (result.affectedRows == 1) {
            console.log("inserted...")
  
            res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
          }
          else {
            res.json({ affectedRows: 0, msg: "Person not registered" })
            console.log("not inserted...")
  
          }
          // console.log("Inserted")
          // console.log(result)
        })
      })
      // res.sendFile(path.join(basePath, "register.html"))
    }
    catch (err) {
      res.sendFile(path.join(basePath, "register.html"))
    }
  })

console.log(module)

module.exports = router

console.log(module)