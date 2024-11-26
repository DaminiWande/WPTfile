// const n1=10
// const n2=20
// const add=n1+n2
// console.log(add)
// //will not get window obj document obj , history obj,location,screen

// console.log("hello")


const fs=require("fs")

const data="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// fs.writeFile("file.text",data,(err)=> //callback function always runs if err then err variables not null otherwise null
// {
//         if(err)
//         {
//             console.error(err)
//             return err
//         }
//         console.log("file write successfully....")

// })
fs.writeFileSync("filesync",data)