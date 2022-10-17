import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    const res = await fetch('http://localhost:4000', {
      method: 'GET',
      credentials: 'include',
    });

    const data = await res.json();

    setMessage(data.message);
  };

  return (
    <>
      <h1>Login</h1>
      <Link to='/chat'>Chat</Link>
      <p>{message}</p>
      <button onClick={getMessage}>Get Message</button>
    </>
  );
}

export default Login;