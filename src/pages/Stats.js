import React from 'react';
import Navbar from '../components/navbar.jsx';
import StatsComments from '../components/statsComments.jsx';
class Stats extends React.Component {

    render() {
        return <div>
            <Navbar/>
            <h1>Page Stats</h1>
            <StatsComments />
        </div>
    }
}
export default Stats;