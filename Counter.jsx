import React, { useEffect, useState } from 'react'

export default function Counter() {
    const[count, setCount] = useState(0);
    function incr(){
        setCount(count+1);
    }
    function decr(){
        setCount(count-1);
    }
    useEffect(()=>{
    document.title=`count-${count}`;
    },[count]);
  return (
    <div className='m-5'>
    <button onClick={incr}>+</button>
    <h3>{count}</h3>
    <button onClick={decr}>-</button>
    </div>
  )
}
