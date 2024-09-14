import React, { useContext } from 'react'
import { counterContext } from './context/context'

export default function Child3() {

    const {setCount} = useContext(counterContext);

  return (
    <div>
     <button onClick={()=> setCount((prev) => prev + 1)}>Increase</button> 
     <button onClick={()=> setCount((prev) => prev - 1)}>Decrease</button> 
    </div>
  )
}
