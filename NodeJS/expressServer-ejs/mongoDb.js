const mongo=require('mongodb');
const MongoClient=mongo.MongoClient

const url="mongodb://0.0.0.0:27017/"
// ://0.0.0.0:270171/"

const client =new MongoClient(url)
const database=client.db("person")
const personCollection=database.collection("person")
const employeeCollection=database.collection("employee")
module.exports=(personCollection,employeeCollection,database)
