import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [login,setLogin]=useState("");
  const [passwd,setPasswd]=useState("");
  const [error,setError]=useState("");
  const history = useNavigate();
  
  async function connect() {    
    let result=await fetch("http://localhost:9090/api/login", {
      method: 'POST',
      credentials: 'include',

      body:JSON.stringify({
        login:login,
        passwd:passwd
      })
    })
    .then(res => res.json())
    .then((result) => { 
      if (!result.logged) {
        setError(
        <div><br/>
          <div className="alert alert-danger" role="alert">
            Wrong username/password<br/>Could not authenticate you
          </div>
        </div>);
      }
      else {
        history('/');
      }   
    });
  }
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <br/><h3>Login</h3>
        </div>
        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Login" onChange={(e)=>setLogin(e.target.value)}></input>
        <input type="password" id="password" className="fadeIn third" name="passwd" placeholder="Password" onChange={(e)=>setPasswd(e.target.value)}></input>
        <input type="submit" className="fadeIn fourth" value="Log In" onClick={connect}/>
      </div>
      {error}
    </div> 
  )
}

export default LoginForm;