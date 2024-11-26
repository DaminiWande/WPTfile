import { useState } from "react"
// import {Result} from "./Result"

export function Calculator()
{
    // const [n1,setN1]=useState(0)
    // const[n2,setN2]=useState(0)
    const [values,setValues]=useState({n1:"",n2:""})
    return(<>
    {/* <input onChange={(event)=>setN1(parseInt( event.target.value.trim()))} value={n1}/>
    <input onChange={(event)=>setN2(parseInt( event.target.value.trim()))} value={n2}/>
   <div >result {n1+n2}</div>
   <div >result {n1-n2}</div> */}

   <input value={values.n1} onChange={(event)=>setValues({...values,n1:parseInt(event.target.value)})}/>
   <input value={values.n2} onChange={(event)=>setValues({...values,n2:parseInt(event.target.value)})}/>
   <div>Result{values.n1-values.n2}</div>


    </>)
}