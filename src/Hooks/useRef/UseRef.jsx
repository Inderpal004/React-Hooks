import React, { useRef } from 'react'

export default function UseRef() {

    const ref = useRef(null);

    const updateRed = ()=>{
        ref.current.style.color = 'red';
    }

    const updateBlue = ()=>{
        ref.current.style.color = 'blue';
    }

    const updateGreen = ()=>{
        ref.current.style.color = 'green';
    }

  return (
    <div>
      <h1 ref={ref}>useRef Hook</h1>

      <button onClick={updateRed}>Red</button>
      <button onClick={updateBlue}>Blue</button>
      <button onClick={updateGreen}>Green</button>
    </div>
  )
}
