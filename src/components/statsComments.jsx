import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function StatsComments(props) {
    const [error,setError] = useState("");
    const [isLoaded,setIsLoaded] = useState(false);
    const [value,setValue] = useState([]);
    const begin=props.begin;
    const end=props.end;
    const navigate=useNavigate();
    

    useEffect(() => {
        fetch(`http://localhost:9090/api/stats/comments?begin=${begin}&end=${end}`,{
            method: "GET",
            credentials: "include",
        },)
        .then(res => res.json())
        .then((response) => {
            if (response.notLogged) {
                navigate('/login');
            }
            setIsLoaded(true);
            setValue(response)
        },(error) => {
            setError(error);
            setIsLoaded(true);
        });
    },[begin,end])
    if (!isLoaded) {
        return (<div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>);
    }
    else if (isLoaded && error) {
        return (<div>Error : {error}</div>);
    }
    else {
        return (<div>{value.comments}</div>)
    }
} 
export default StatsComments;