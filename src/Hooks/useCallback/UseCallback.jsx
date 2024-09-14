import React, { useCallback, useState } from 'react';
import Child from "./Child"

export default function UseCallback() {

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const callBackFn1 = useCallback(()=>{
       setCount1(count1 + 1);
    },[count1])

    const callBackFn2 = useCallback(()=>{
       setCount2(count2 + 1);
    },[count2])

  return (
    <div>
        <h1>useCallback Hook</h1>

        <Child text="Button1" count={count1} onClick={callBackFn1}/>
        <Child text="Button2" count={count2} onClick={callBackFn2}/>
    </div>
  )
}
