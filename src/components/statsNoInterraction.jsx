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
    const [filterText, setFilterText] = useState('');
    const subHeaderComponentMemo = React.useMemo(() => {		
      fetch(`http://localhost:9090/api/stats/nointerraction?begin=${begin}&end=${end}&search=${filterText}`,{
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
      return (
            <div>
              <p>You're currently searching for : {filterText}</p>
                <input type="text" id="search" placeholder="Filter By Name" aria-label="Search Input" onChange={e => setFilterText(e.target.value)}></input>
            </div>
		);
	}, [filterText]);
    useEffect(() => {
        fetch(`http://localhost:9090/api/stats/nointerraction?begin=${begin}&end=${end}&search=${filterText}`,{
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
        return (<div>
                        <DataTable
        title="Unresponsive users"
        columns={columns}
        data={value}
        pagination
        highlightOnHover  
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
        </div>)
    }
} 
export default StatsNoInterraction;
