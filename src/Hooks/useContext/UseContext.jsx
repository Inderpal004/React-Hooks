import React, { useContext, useState } from 'react';
import Child1 from './Child1';
import { counterContext } from './context/context';

export default function UseContext() {

    const contextValue = useContext(counterContext);
    const [count, setCount] = useState(contextValue);

  return (
    <counterContext.Provider value={{count,setCount}}>
        <h1>useContext Hook</h1>

        <span>{count}</span>
        <Child1/>
    </counterContext.Provider>      
  )
}
