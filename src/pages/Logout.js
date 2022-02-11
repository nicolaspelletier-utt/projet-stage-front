import React , {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const [isLoaded,setIsLoaded] = useState("");
    const navigate=useNavigate();
    useEffect(() => {
        fetch("http://localhost:9090/api/logout",{
            credentials: 'include'
        })
        .then(() => {
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
