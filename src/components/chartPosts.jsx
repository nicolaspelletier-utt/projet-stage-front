import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


function ChartPosts(props) {
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
      const backgroundColor = [];
      const values = []
      const labels = [];
      value.map((obj) => {
        var randomColor = "#000000".replace(/0/g, function () {
          return (~~(Math.random() * 16)).toString(16);
        });
        backgroundColor.push(randomColor);
        values.push(obj.count);
        labels.push(obj.name);
      });
      const data = {
          labels,
          datasets: [{
              label : "Distribution of posts by group",
              data: values,
              backgroundColor,
              borderColor: backgroundColor,
              borderWidth: 1
          },],
      };
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
        return (<div>Loading . . .</div>);
    }
    else if (isLoaded && error) {
        return (<div>Error : {error}</div>);
    }
    else {
        return (<div style={{width: '40%'}}>
            <Pie data={data} />
        </div>)
    }
}
export default ChartPosts;
