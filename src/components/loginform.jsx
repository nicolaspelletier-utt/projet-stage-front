import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [login,setLogin]=useState("");
  const [passwd,setPasswd]=useState("");
  const history = useNavigate();
  var erreur=<div>Coucou c'est moi</div>;

  async function connect() {
    //console.log(passwd);
    
    let result=await fetch("http://localhost:9090/api/login", {
      method: 'POST',
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
        console.log("coucou");
        history('/table')
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
  {erreur}
</div> )
}

export default LoginForm;