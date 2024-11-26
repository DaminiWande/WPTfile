const path=require("path")
const fs=require("fs")
console.log(__dirname)
//D:\WedTech\NodeJS\fs-module

console.log(process.cwd())
//D:\WedTech\NodeJS\fs-module

const filePath=path.join(__dirname,"files","profile.txt")
console.log(filePath)
//D:\WedTech\NodeJS\fs-module/files/profile.txt
const data=fs.readFileSync(filePath,"utf-8")
console.log(data)