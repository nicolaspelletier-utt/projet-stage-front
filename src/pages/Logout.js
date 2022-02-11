import React , {useState, useEffect} from 'react';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';
function Logout() {
    const [isLoaded,setIsLoaded] = useState("");
    const navigate=useNavigate();
    useEffect(() => {
        fetch("http://localhost:9090/api/logout",{
            credentials: 'include'
        })
        .then((result) => {
            setIsLoaded(true);
            navigate('/login');
        })
    })
    if (!isLoaded) {
        return(<div><h4>Déconnexion en cours  . . </h4></div>)
    }
    else {
        return null;
    }

}
export default Logout;
