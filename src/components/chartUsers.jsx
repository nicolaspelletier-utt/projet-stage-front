import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function ChartUsers(props) {
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
      const values = [];
      const labels = [];
      const comments = [];
      const reactions = [];
      value.map((obj) => {
        var randomColor = "#000000".replace(/0/g, function () {
          return (~~(Math.random() * 16)).toString(16);
        });
        backgroundColor.push(randomColor);
        values.push(obj.count);
        labels.push(obj.name);
        comments.push(obj.comments);
        reactions.push(obj.reactions);
      });
      const options = {
        responsive: true,
        scales: {
          x : {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        }
      }
      const data = {
          labels,
          datasets: [
            {
              label : "Posts",
              data: values,
              backgroundColor: 'rgb(255, 99, 132)',
              borderWidth: 1
          },
        {
          label: "Comments",
          data: comments,
          backgroundColor: 'rgb(75,192,192)',
          borderWidth: 1
        },
        {
          label: "Reactions",
          data: reactions,
          backgroundColor: 'rgb(53,162,235)',
          borderWidth: 1
        },
        ],
      };
    useEffect(() => {
        fetch(`http://localhost:9090/api/stats/users?begin=${begin}&end=${end}`,{
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
        return (<div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>);
    }
    else if (isLoaded && error) {
        return (<div>Error : {error}</div>);
    }
    else {
        return (<div style={{width: '40%'}}>
            <Bar data={data} options={options}/>
        </div>)
    }
}
export default ChartUsers;
