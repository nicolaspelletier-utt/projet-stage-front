import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



const IsLogged = () => {
  const history = useNavigate();

  function connect() {
    //console.log(passwd);
    
    let result=fetch("http://localhost:9090/api/islogged", {
      credentials: 'include'

    })
    .then(res => res.json())
    .then((result) => {
      
      if (!result.logged) {
        history('/login');

      }
      
     console.log(result);
    });
  }

  return (<div>{connect()}

</div> )
}

export default IsLogged;