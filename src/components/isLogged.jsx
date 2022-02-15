import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function IsLogged() {
  const navigate=useNavigate();
  useEffect(() => {
    fetch(`http://localhost:9090/api/islogged`,{
      method: "GET",
      credentials: "include"
    },)
    .then(res => res.json())
    .then((response) => {
      if (!response.logged) {
        navigate('/login');
      }
    });
  })
  return null;
}
export default IsLogged;