import React from 'react';
import Navbar from '../components/navbar.jsx';
import { Navigate } from 'react-router-dom';

import StatsComments from '../components/statsComments.jsx';
import StatsUsers from '../components/statsUsers.jsx';
import StatsNoInterraction from '../components/statsNoInterraction.jsx';
class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: '',
            end: ''
        };
    }

      scope(begintmp,endTmp,coucou) {
        //this.setState({begin : begintmp, end: endTmp});
      }
    render() {
        //this.connect();
        const begin='';
        const end='';

            return <div>
            <Navbar/>
            <div className='container'>
                <br/><br/>
            <h1>Page Stats</h1><br/><br/>
            <h4>Choix de la période : </h4>
            <input type="date" id="begin" className="form-control" name="begin" ></input>
            <input type="date" id="end" className="form-control" name="end" ></input>
            <input type="submit" className="btn btn-primary" value="Confirmer" />
            <div className='container'>
            <h4>Nombre moyen de commentaire : </h4>
            <div className='container'><br/>
            <div className='font-weight-bold'><StatsComments /></div>
            </div>
            </div>
            <br/><br/>
            <div className='container'>
                <h4>Top 10 des utiliseurs ayant le plus interragis</h4><br/>
            <StatsUsers/>
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