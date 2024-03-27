import { useState } from "react";

export default function Counter(){
    //let count=0
    let [count, setcount] = useState(0)
    
   let incCount = () => {
        setcount(count+1)
        console.log(count)
    }

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increase the Count</button>
        </div>
    );
}