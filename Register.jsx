import React, { useState } from 'react'

export default function Register() {
    const[userName,setuserName]=useState("bob");
    const[password,setPassword]=useState("123");
    const[mobile,setMobile]=useState(123456789);

    function handle(){
        console.log(userName);
        console.log(password);
        console.log(mobile);
    }
  return (
    <>
    <input type='text' placeholder='Enter username' value={userName} onChange={(e)=>setuserName( e.target.value) }/>
    <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <input type='number' placeholder='Enter Mobile No.' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    <button onClick={handle}>Register</button> 
    </>
  );
}
