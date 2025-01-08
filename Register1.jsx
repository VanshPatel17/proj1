import React, { useState } from 'react'

export default function Register() {
    const[formData,setFormData]=useState({
        userName:"bob",
        password:"123",
        mobile:123456789,
    });

    function handle(){
        console.log(userName);
        console.log(password);
        console.log(mobile);
    }

    function handleinput(e){
        setFormData({...formData, [e.target.value]:e.target.value});
    }
  return (
    <>
    <input type='text' placeholder='Enter username' name='userName' value={formData.userName} 
    onChange={(e)=> handleinput(e) }/>
    <input type='password' placeholder='Enter Password'name='password' value={formData.password}
     onChange={(e)=> haandleinput(e)}/>
    <input type='number' placeholder='Enter Mobile No.' name='mobile' value={formData.mobile} 
    onChange={(e)=>handleinput(e)}/>
    <button onClick={handle}>Register</button> 
    </>
  );
}
