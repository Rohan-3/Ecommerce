import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
      email:"",
      password:""
    })
    const nav = useNavigate();

    const handleUserInput = (e)=>{

      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]:value
      })

      console.log(user);
    }

    const HandleLoginForm = async(e)=>{
      try {
        e.preventDefault();
        console.log(user);
  
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        const responseData = await response.json();
        if (!response.ok)
        {
          alert('Response IS False');
          console.log(response.ok);

        }
        else
        {
          alert('Login Successful');
          console.log('Login Response = ', responseData);
          console.log(' Login TOken   =   ', responseData.token);
          Cookies.set('userToken', responseData.token, { expires: 1 });
          Cookies.set('user', user.email, { expires: 1 });
          nav("/");
          window.location.reload();
        }
    } catch (error) {
      console.log('Error Response ', error);
    }
    }
  return (
    <div>
      <form onSubmit={HandleLoginForm}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='email' id='email' name='email' required value={user.email} onChange={handleUserInput}/>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Password' id='password' name='password' required  value={user.password} onChange={handleUserInput}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login