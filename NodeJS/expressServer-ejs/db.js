const mysql = require('mysql2')

const getConnect = () => {
    return con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "route",
      database: "persondb"
    });
  }

  module.exports = {getConnect}