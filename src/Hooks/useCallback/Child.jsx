import React, { memo } from 'react'

function Child({text,count,onClick}) {

    console.log("Child Button ",text , count);

    return (
        <div>
            <p>Counter : {count}</p>
            <button onClick={onClick}>Update Counter</button>
        </div>
    )
}

export default memo(Child);