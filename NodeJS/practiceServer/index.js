const http=require("http")
const fs=require("fs")
const path=require("path")

const app=http.createServer((req , res)=>{
  console.log(req.url)
 const basePath=path.join(__dirname,"pages")
  if(req.url==="/"){
    const pageText=fs.readFileSync(path.join(basePath,"index.html"),"utf-8")
    res.write(pageText)
    // res.write(`<h1>Root response</h1>
    //     <p><a href="/about">Go to About Page</a></p>
    //     <p><a href="/contact">Go to Contact Page</a></p>
    //     <p><a href="/services">Go to Services Page</a></p>
    //     `)
    res.end()
   }
   else if(req.url==="/contact")
   {
    const pageText=fs.readFileSync(path.join(basePath,"contact.html"),"utf-8")
    res.write(pageText)
    res.end()
   }
   else if(req.url==="/about")
    {
        const pageText=fs.readFileSync(path.join(basePath,"about.html"),"utf-8")
        res.write(pageText)
      res.end()
    }
    else
    {
       
        const pageText=fs.readFileSync(path.join(basePath,"404page.html"),"utf-8")
        res.writeHead(404,{"Content-type":"text/html"})
        res.write(pageText) 
       // res.write("<h1 style='color:red'>404 Page Not Found</h1>")
        res.end()
    }
})  
//give 5000,8000,3000 and we can put localhost as 127.0.0.1
    app.listen(8000,"localhost",()=>{
    console.log("http://localhost:8000")
})