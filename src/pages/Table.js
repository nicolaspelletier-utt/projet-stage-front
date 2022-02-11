import React, { useState,useEffect } from 'react';
import Navbar from '../components/navbar.jsx';
import { Navigate } from 'react-router-dom';
import StatsComments from '../components/statsComments.jsx';
import StatsUsers from '../components/statsUsers.jsx';
import StatsNoInterraction from '../components/statsNoInterraction.jsx';
function Table() {

    const [begin,setBegin] = useState("");
    const [end,setEnd] = useState("");
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <br/><br/>
            <h1>Page Table</h1><br/><br/>
            <h4>Choix de la période : </h4>
            <form className='form-group'>
            <input type="date" id="begin" className="form-control" name="begin" onChange={(e) => setBegin(e.target.value)}></input>
            <br/>
            <input type="date" id="end" className="form-control" name="end" onChange={(e) => setEnd(e.target.value)}></input>
            </form>
            <div className='container'>
            <h4>Nombre moyen de commentaire : </h4>
            <div className='container'><br/>
            <div className='font-weight-bold'><StatsComments begin={begin} end={end}/></div>
            </div>
            </div>
            <br/><br/>
            <div className='container'>
                <h4>Top 10 des utiliseurs ayant le plus interragis</h4><br/>
            <StatsUsers begin={begin} end={end}/>
            </div>
            <div className='container'>
                <h4>Top 10 des utiliseurs n'ayant pas interragis</h4><br/>
            <StatsNoInterraction begin={begin} end={end}/>
            </div>
            <br/><br/>
            </div>
        </div>
    );
}
export default Table;
