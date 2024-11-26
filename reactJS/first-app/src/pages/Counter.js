import { useState ,useCallback,useMemo} from "react"
import { ResultCallBack } from "./ResultCallBack"
import { ResultMemo } from "./ResultMemo"
// import { Evenodd } from "./evenodd/EvenOdd"

// export function Counter()
// {
//     const[count,setCount]=useState(0)
//     return(<>
//     <p>{count}</p>
    
//     <button className="btn btn-primary" onClick={()=>setCount(count+1)}>+</button>
//     <button className="btn btn-primary" onClick={()=>setCount(count-1)}>-</button>

//     </>)
// }
export function CounterCallBack()
{
    
    const[count,setCount]=useState(0)
    const logCount=useCallback(()=>
    {
       console.log("Count="+count)
    },[count])
    const incCount=()=>
    {
        setCount((preCount)=>preCount+1)

    }
    return(<>
    <p>{count}</p>
    <button className="btn btn-primary" onClick={incCount}>+</button>
    {/* <button className="btn btn-primary" onClick={()=>setCount(count+1)}>+</button> */}
    {/* <button className="btn btn-danger" onClick={()=>setCount(count-1)}>-</button> */}
    {/* <button onClick={logCount}>Log Count</button> */}
    <ResultCallBack logCount={logCount}/>
    <hr/>
    <h1>Even Odd</h1>
    {/* <Evenodd/> */}
    
    </>)
}



// export function CounterMemo()
// {
    
//     const[count,setCount]=useState(0)
//     const logCountVal=useMemo(()=>{
//         return count
//     },[])
//     const incCount=()=>
//     {
//         setCount((preCount)=>preCount+1)

//     }
//     return(<>
//     <p>{count}</p>
//     <button className="btn btn-primary" onClick={incCount}>+</button>
//     {/* <button className="btn btn-primary" onClick={()=>setCount(count+1)}>+</button> */}
//     {/* <button className="btn btn-danger" onClick={()=>setCount(count-1)}>-</button> */}
//     <ResultMemo logCountVal={logCountVal}/>

    
//     </>)
// }