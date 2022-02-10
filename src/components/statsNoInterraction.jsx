import React, { useEffect, useState } from 'react';
function StatsNoInterraction(props) {
    const [error,setError] = useState("");
    const [isLoaded,setIsLoaded] = useState(false);
    const [value,setValue] = useState([]);
    const begin=props.begin;
    const end=props.end;
    

    useEffect(() => {
        console.log(props);
        fetch(`http://localhost:9090/api/stats/nointerraction?begin=${begin}&end=${end}`,{
            method: "GET",
            credentials: "include"
        },)
        .then(res => res.json())
        .then((response) => {
            setIsLoaded(true);
            setValue(response)
        },(error) => {
            setError(error);
            setIsLoaded(true);
        });
    },[begin,end])
    const values = value.map(function(table) {
        return (
            <tr>
                <td scope="row">{table.id}</td>
                <td scope="row">{table.name}</td>
            </tr>);
    })
    if (!isLoaded) {
        return (<div>Chargement . . .</div>);
    }
    else if (isLoaded && error) {
        return (<div>Erreur : {error}</div>);
    }
    else {
        return (<div>
            <div>
                  <table className='table'>
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                          </tr>
                      </thead>
                      <tbody>
                        {values}
                      </tbody>

                  </table>
              </div>
        </div>)
    }
} 
export default StatsNoInterraction;
