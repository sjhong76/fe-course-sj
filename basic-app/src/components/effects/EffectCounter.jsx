import { useState, useEffect } from "react";

export default function EffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(()=> {
            console.log('🟢Mount and Update => ');
            return () => {
                console.log('🔴Unmount => ');
            }
    }, [ count ]);
    return (
        <div style={{width:'200px', 
                    textAlign:'center',
                    border:'1px solid black',}}>
            <h1>{count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>증가(+)</button>
            <button type="button" onClick={() => setCount(count - 1)}>감소(-)</button>
        </div>
    )
}