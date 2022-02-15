import React, { useState,useEffect } from 'react';
import Navbar from '../components/navbar.jsx';
import { Navigate } from 'react-router-dom';

import StatsComments from '../components/statsComments.jsx';
import ChartUsers from '../components/chartUsers.jsx';
import ChartUnresponsive from '../components/chartUnresponsive.jsx';
import ChartPosts from '../components/chartPosts.jsx';
function Stats() {
    const [begin,setBegin] = useState("");
    const [end,setEnd] = useState("");
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <br/><br/>
            <h1>Stats dashboard</h1><br/><br/>
            <h4>Choice of period : </h4>
            <form className='form-group'>
            <input type="date" id="begin" className="form-control" name="begin" onChange={(e) => setBegin(e.target.value)}></input>
            <br/>
            <input type="date" id="end" className="form-control" name="end" onChange={(e) => setEnd(e.target.value)}></input>
            </form>
            <div className='container'>
            <h4 id="comments">Average number of comments:  </h4>
            <div className='container'><br/>
            <div className='font-weight-bold'><StatsComments begin={begin} end={end}/></div>
            </div>
            </div>
            <br/><br/>
            <div className='container'>
                <h4 id="users">Users with the most posts</h4><br/>
            <ChartUsers begin={begin} end={end}/>
            </div>
            <div className='container'>
                <h4 id="unresponsive">Unresponsive users</h4><br/>
            <ChartUnresponsive begin={begin} end={end}/>
            </div>
            <br/><br/>
            </div>
            <div className='container'>
            <h4 id="posts">Distribution of posts by group</h4><br/>
            <ChartPosts begin={begin} end={end}/>
            </div>
            <br/><br/>
            </div>
      
    );
}
export default Stats;
