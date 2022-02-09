import React from 'react';
import Navbar from '../components/navbar.jsx';
import StatsComments from '../components/statsComments.jsx';
import StatsUsers from '../components/statsUsers.jsx';
import IsLogged from '../components/islogged.jsx';
import StatsNoInterraction from '../components/statsNoInterraction.jsx';
class Stats extends React.Component {

    render() {
        return <div>
            <IsLogged/>
            <Navbar/>
            <div className='container'>
                <br/><br/>
            <h1>Page Stats</h1><br/><br/>
            <div className='container'>
            <h4>Nombre moyen de commentaire : </h4>
            <div className='container'><br/>
            <p className='font-weight-bold'><StatsComments /></p>
            </div>
            </div>
            <br/><br/>
            <div className='container'>
                <h4>Top 10 des utiliseurs ayant le plus interragis</h4><br/>
            <StatsUsers />
            </div>
            <div className='container'>
                <h4>Top 10 des utiliseurs n'ayant pas interragis</h4><br/>
            <StatsNoInterraction />
            </div>
            <br/><br/>
            </div>
        </div>
    }
}
export default Stats;