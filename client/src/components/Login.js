import React, { useState } from 'react';
import fetchData from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Call the login API endpoint using fetchData
      const response = await fetchData('/api/login', 'POST', { username, password });
      console.log(response);
      // Redirect to the Profile page or display a success message
    } catch (error) {
      console.log(error);
      // Display an error message
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
