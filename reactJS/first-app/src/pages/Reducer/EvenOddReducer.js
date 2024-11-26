import { act, useReducer, useState } from "react"
export const EvenOddReducer=()=>{
const reducer =(state,action)=> //action actionType/actionPayLoad->values to reducer from view
{
   
    let num=action.payload
   switch(action.type)
   {
    case "even":
        if(num%2==0)
        {
        state={...state,result:`${num} is even`}
        return state
        }
        else{
            state={...state,result:`${num} is odd`}
            return state
        }
       case "fact":
        let fact=1
        for(let i=1;i<=num;i++){
            fact*=1
        }
        state={...state,result:`factorial of ${num} is ${fact}`}
        return state

        case "carea":
            let area=Math.pow(num,2)*Math.PI
            state={...state,result:`Area of circle of radius :${num} is ${area.toFixed(2)}`}
        case "inc":
            state={...state,count:state.count+parseInt(num)}
            return state
    case "dec":
        state={...state,count:state.count-parseInt(num)}
        return state
    default:
        return state
   }
}

//state variable
const initialState={
    count:0,
    result:""
}

  const[state,dispatch] =useReducer(reducer,initialState)
  const[incBy,setIncBy]=useState(1)
  return (<>
  
  <button className="btn btn-danger" onClick={()=>dispatch({type:"inc",payload:incBy})}>+</button>
  <h1>Count:{state.count}</h1>
  <h1>Result:{state.result}</h1>

  <input type="number" value={incBy} onChange={(event)=>setIncBy(event.target.value)}/>
  <br/>
  <button className="btn btn-danger" onClick={()=>dispatch({type:"dec",payload:incBy})}>-</button>
  <button className="btn btn-danger" onClick={()=>dispatch({type:"even",payload:incBy})}>EvenOdd</button>
  <button className="btn btn-danger" onClick={()=>dispatch({type:"fact",payload:incBy})}>Factorial</button>



  </>)
}