import { useReducer, useState } from "react"
const reducer =(state,action)=> //action actionType/actionPayLoad->values to reducer from view
{
    let incPayload=action.payload
   switch(action.type)
   {
    case "inc":
        state={...state,count:state.count+parseInt(incPayload)}
        return state
    case "dec":
        state={...state,count:state.count-parseInt(incPayload)}
        return state
    default:
        return state
   }
}


//state variable
const initialState={
    count:0
}
export const CounterReducer=()=>
{
  const[state,dispatch] =useReducer(reducer,initialState)
  const[incBy,setIncBy]=useState(1)
  return (<>
  
  <button className="btn btn-danger" onClick={()=>dispatch({type:"inc",payload:incBy})}>+</button>
  <h1>{state.count}</h1>
  <input type="number" value={incBy} onChange={(event)=>setIncBy(event.target.value)}/>
  <br/>
  <button className="btn btn-danger" onClick={()=>dispatch({type:"dec",payload:incBy})}>-</button>

  </>)
}