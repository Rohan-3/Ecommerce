import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(user),
    });
    console.log(response.ok);
    console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      if (responseData) {
        setUser({
          username: '',
          email: '',
          password: '',
        });
        alert('Registered Successful');
      } else {
        alert("User already exists")
      }
    }else{
        alert("Already registered !")
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            placeholder="Full name"
            required
            value={user.username}
            onChange={handleInput}
            id="username"
            name="username"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            value={user.email}
            onChange={handleInput}
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            required
            value={user.password}
            onChange={handleInput}
            id="password"
            name="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
