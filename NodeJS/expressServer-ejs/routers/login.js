const express = require("express")
const path = require('path')
const mysql = require('mysql2')

const router = express.Router()
const {getConnect} = require("../db")

const basePath = path.join(process.cwd(), "pages") 

router.get('/', function (req, res) {
    res.sendFile(path.join(basePath, "login.html"))
})

router.post('/', function (req, res) {
    const data = req.body
    const sql = `select * from person where email = '${data.email}' and password = '${data.password}';`

    try {
        const con = getConnect()

        con.connect(function (error) {
            if (error) throw error
            console.log("Connection Success")

            con.query(sql, function (err, result) {
                if (err) throw err
                if (result.length == 1) {
                    console.log("login...")

                    res.json({ login: true, msg: "Person logged in", person: result[0] })
                }
                else {
                    res.json({ login: false, msg: "Person not logged in" })
                    loginconsole.log("not...")

                }
            })
        })

    }
    catch (err) {
        res.sendFile(path.join(basePath, "login.html"))

    }

})

console.log(module)

module.exports = router

console.log(module)
