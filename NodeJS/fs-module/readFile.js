const fs=require("fs")
// fs.readFile("file.text","utf-8",(err,data)=> //univeral transformation format
// {
//     try
//     {
//     if(err)
//     {
//         throw err
//     }
//     console.log(data)
// }catch(err)
// {
//     console.error(err)
//     return err
// }

// })
try{
const data=fs.readFileSync("filesync.txt","utf-8")
console.log(data)
}
catch(err){
    console.error(err)
}
