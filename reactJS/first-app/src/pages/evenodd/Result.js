export function Result({result,num,logResult})
{
    return(<>
    <h1>Result : {result?`${num} is even`: `${num} is odd`}</h1>
    <button onClick={logResult}>Log Result</button>
    </>)
}