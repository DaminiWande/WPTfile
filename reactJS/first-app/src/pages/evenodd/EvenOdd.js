import { useCallback, useState } from "react"
import { Result } from "./Result"

export function EvenOdd() {
    const [num,setNum]=useState(1)
    const [result,setResult]=useState(false)


    const logResult=useCallback(()=>{
        console.log(result?`${num} is even`:`${num} is odd`)
    },[num,result])


    function checkNumber() {
        if (num == 0 || num < 0) {
            alert(num + " is universal number. or cannot less than zero")
        }
        else {
            if (num % 2 == 0) {
                setResult(true)
            }
            else {
                setResult(false)
            }
        }
        logResult()
    }
    return (<>

        <input value={num} onChange={(event) => setNum(event.target.value)} />
        <button onClick={checkNumber}>Check Number(even/odd)</button>
        <Result result={result} num={num} logResult={logResult}/>


    </>)
}