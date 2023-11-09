import React, { useState } from "react";

function Login() {
  
 
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  async function register(ev) {
    ev.preventDefault(); 
  
    if (!username || !password) {
      alert('Please fill in both username and password fields.');
      return;
    }
  
    try {
      const response = await fetch('https://api.denzo.io/api/cus/v1/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: '+918086808680',
          password: '123456',
          store_id: '10'
        }),
      });
  
      if (response.ok) {
        alert('Login successful');
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      alert('An error occurred while logging in. Please try again later.');
      console.error('Login Error:', error);
    }
  }
  return (

    <>
      <div 
        className="container-fluid text-center"
        style={{ marginTop: "150px" }}
      >
        <h1 style={{ fontSize: "50px" }}>Welcome</h1>

       
        <form className='register' onSubmit={register}>
            <h1>Login</h1>
            <label >Email Address  </label>
            <br/>
            <input type='text' className="mb-3" placeholder='username' value={username} 
            onChange={ev=>setUsername(ev.target.value)}/>
            <br/>
            <label >Password  </label>
             <br/>
            <input type='password' className="mb-3" placeholder='password' value={password}
            onChange={ev=>setPassword(ev.target.value)}/>
            <br/>
            <button >Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
