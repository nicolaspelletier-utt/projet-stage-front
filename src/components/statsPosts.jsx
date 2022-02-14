import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component'; 

function StatsPosts(props) {
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
        {
          name: 'Count',
          selector: row => row.count,
          sortable: true,
        },
      ];
      const [filterText, setFilterText] = useState('');
      const filteredItems = value.filter(
            item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
        );
      const subHeaderComponentMemo = React.useMemo(() => {		
          return (
              <div>
                  <input type="text" id="search" placeholder="Filter By Name" aria-label="Search Input" onChange={e => setFilterText(e.target.value)}></input>
              </div>
          );
      }, [filterText]);
    useEffect(() => {
        console.log(props);
        fetch(`http://localhost:9090/api/stats/posts?begin=${begin}&end=${end}`,{
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
        title="Répartition des posts par groupe "
        columns={columns}
        data={filteredItems}
        pagination
        highlightOnHover  
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
        </div>)
    }
}
export default StatsPosts;
