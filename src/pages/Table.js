import React, { useState,useEffect } from 'react';
import Navbar from '../components/navbar.jsx';
import { Navigate } from 'react-router-dom';
import StatsComments from '../components/statsComments.jsx';
import StatsUsers from '../components/statsUsers.jsx';
import StatsNoInterraction from '../components/statsNoInterraction.jsx';
import StatsPosts from '../components/statsPosts.jsx';
function Table() {

    const [begin,setBegin] = useState("");
    const [end,setEnd] = useState("");
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <br/><br/>
                <h1>Tables Dashboard</h1><br/><br/>
                <h4>Choice of period : </h4>
                <form className='form-group'>
                <input type="date" id="begin" className="form-control" name="begin" onChange={(e) => setBegin(e.target.value)}></input>
                <br/>
                <input type="date" id="end" className="form-control" name="end" onChange={(e) => setEnd(e.target.value)}></input>
                </form>
                <div className='container'>
                  <h4>Average number of comments: </h4>
                    <div className='container'><br/>
                        <div className='font-weight-bold'><StatsComments begin={begin} end={end}/></div>
                    </div>
                </div>
                <br/>
                <div className='container'>
                    <StatsUsers begin={begin} end={end}/>
                </div>
                <div className='container'>
                    <StatsNoInterraction begin={begin} end={end}/>
                </div>
                <br/><br/>
                <div className='container'>
                    <StatsPosts begin={begin} end={end}/>
                </div>
                <br/><br/>
            </div>
        </div>
    );
}
export default Table;
