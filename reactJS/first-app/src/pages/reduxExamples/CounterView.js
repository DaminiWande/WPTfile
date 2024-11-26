import { useState } from "react"
import { increamentCount,decrementCount } from "./CounterSlicer"
import { useDispatch,useSelector } from "react-redux"

export function CounterView() {
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter.count)
    const [incBy,setIncBy]=useState(1)
    //state.counter.count in this counter is name of reducer of CounterStore
    return (<>
        <input type="number" onChange={(event)=>setIncBy(event.target.value)} value={incBy}/>
        <br/>
        <button className="btn btn-primary px-3 fs-4" onClick={()=>dispatch(increamentCount(incBy))}>+</button>
        <div className="display-5">{count}</div>
        <button className="btn btn-danger px-3 fs-4" onClick={()=>dispatch(decrementCount(incBy))}>-</button>
    </>)
}