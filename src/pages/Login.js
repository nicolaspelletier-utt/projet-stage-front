import React, { useEffect } from 'react';
import LoginForm from '../components/loginform';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:9090/api/islogged", {
      credentials: 'include'
    })
    .then(res => res.json())
    .then((result) => {
      if (result.logged) {
        navigate('/');
      }
    })
  })
  return (
    <div>
      <br/><br/><br/>
      <LoginForm />
    </div>
  );
}
export default Login;
