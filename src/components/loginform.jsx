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
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        login:login,
        passwd:passwd
      })
    })
    .then(res => res.json())
    .then((result) => {
      
      if (!result.logged) {
        
        setError(<div><br/><div class="alert alert-danger" role="alert">
        Mauvais Login/mot de passe<br/>Imposible de vous authentifier!
      </div></div>);

      }
      else {
        history('/');
      }
      
     console.log(result);
    });
  }

  return (
    <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
        <br/><h3>Connexion</h3>
    </div>
    
    
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Login" onChange={(e)=>setLogin(e.target.value)}></input>
      <input type="password" id="password" className="fadeIn third" name="passwd" placeholder="Password" onChange={(e)=>setPasswd(e.target.value)}></input>
      <input type="submit" className="fadeIn fourth" value="Log In" onClick={connect}/>
    
   

  

  </div>
  {error}
</div> )
}

export default LoginForm;