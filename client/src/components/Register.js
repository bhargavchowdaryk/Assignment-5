import React, { useState } from 'react';
import fetchData from '../api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Call the registration API endpoint using fetchData
      const response = await fetchData('/api/register', 'POST', { username, password });
      console.log(response);
      // Redirect to the Profile page or display a success message
    } catch (error) {
      console.log(error);
      // Display an error message
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
