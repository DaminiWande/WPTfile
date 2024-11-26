const mongoose=require('mongoose');


const url="mongodb://0.0.0.0:27017/persondb"
// ://0.0.0.0:270171/"

const con =mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
con.then((result)=>
{
 console.log(result)
 console.log("result successfull")
}).catch((err)=>{
    console.error(err)
})

//models class/object
const personSchema=new mongoose.Schema({
    name:String,
    gender:String,
    mobile:{type:String,unique:true},
    email:{type:String,unique:true},
    password:{type:String}
 
})
const PersonModel=mongoose.model("person",personSchema)
// const personCollection=database.collection("person")
// const employeeCollection=database.collection("employee")
// module.exports=(personCollection,employeeCollection,database)

module.exports={PersonModel}
