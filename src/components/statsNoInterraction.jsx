import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component'; 

function StatsNoInterraction(props) {
    const [error,setError] = useState("");
    const [isLoaded,setIsLoaded] = useState(false);
    const [value,setValue] = useState([]);
    const begin=props.begin;
    const end=props.end;
    const navigate=useNavigate();
    const columns = [
        {
          name: '#',
          selector: row => row.id,
          sortable: true,
        },
        {
          name: 'Name',
          selector: row => row.name,
          sortable: true,
        },

      ];

    useEffect(() => {
        console.log(props);
        fetch(`http://localhost:9090/api/stats/nointerraction?begin=${begin}&end=${end}`,{
            method: "GET",
            credentials: "include"
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
        return (<div>Chargement . . .</div>);
    }
    else if (isLoaded && error) {
        return (<div>Erreur : {error}</div>);
    }
    else {
        return (<div>
                        <DataTable
        title="Utilisateurs n'ayant pas eu d'interractions"
        columns={columns}
        data={value}
        pagination
        highlightOnHover  
      />
        </div>)
    }
} 
export default StatsNoInterraction;
