// import "./assets/css/style.css"
// import {useState,useEffect} from "react";
// /*import dms from "./assets/imgs/download.jpg"*/ //image dms mai import kiya hai 
// function App({name,age,path}) {
// //console.log(props)
// const [n,setN] = useState("Rahul")

// function alertCall(){
// alert("Alert")
// }

// //3 ways to write 
// // useEffect(()=>{

// // },[dependencies(optional)])
// // useEffect(()=>{

// // })
// // useEffect(()=>{

// // },[stateVariable(s)])

// // First method
// //1 way on render chalta hai 
// //2 will work when no dependcies array run on every state variable value changed
// // useEffect(()=>
// // {
// // console.log("useEffect") 
// // })


// //second method
// //on render and not run on any state variable value changed

// // useEffect(()=>{
// //   //console.log("useEffect") 
// //   setTimeout(()=>{
// //   setN("AAsa")
// //  //setAge(35)
// //   },3000)
// // },[])



// // only on render and run on any state variable value changed
// // useEffect(()=>
// //   {
// //     console.log("useEffect")
// //   },[n])

// //rgb(red,green,blue) range is from 0-255 
// //rgb(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256))
// useEffect(()=>{
//   setTimeout(()=>{
//       setN("AAsa")
//      //setAge(35)
//       },3000)
//   setInterval(()=>{
//     document.querySelector("h2").style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`
// },3000)
//   },[])


//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     { /* <h1>Hello Name : {props.name}  Age: {props.age}....</h1> */}
//     <h1 className="bg-color text-color">Hello Name : {name}  Age: {age}</h1> 
//     {/*<img src={dms} height={200}/>*/}
//     <img src={require(`./assets/imgs/${path}`)} height={200}/> 
//     <h2>{n}</h2>
//     <button onClick={()=>setN("Shravari")}>Change Name</button>
//     <button onClick={()=>alertCall("Shravari")}>Alert</button>
//     </>
//   );
// }

// export default App;


//Module
//import componentVariable from "componentFilePath"
//componenVariable is your tag should be in capital case
import "./assets/css/style.css"
import Header from "./pages/Header"
import {Footer} from "./pages/Footer"
import {Home} from "./pages/Home"
function App(){
  return (
   <>
  <Header/>
  <Footer/>
  <Home/>
  </>)
}
export default App