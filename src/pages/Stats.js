import React from 'react';
import Navbar from '../components/navbar.jsx';
import StatsComments from '../components/statsComments.jsx';
import StatsUsers from '../components/statsUsers.jsx';
class Stats extends React.Component {

    render() {
        return <div>
            <Navbar/>
            <div className='container'>
                <br/><br/>
            <h1>Page Stats</h1>
            <StatsComments />
            <br/>
            <StatsUsers />
            <br/><br/>
            </div>
        </div>
    }
}
export default Stats;