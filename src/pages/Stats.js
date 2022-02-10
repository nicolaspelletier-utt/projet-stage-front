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
            isLogged: true,
            isLoaded: true,
            begin: '',
            end: ''
        };
    }
    componentDidMount() {
        
        let result=fetch("http://localhost:9090/api/islogged", {
          credentials: 'include'
    
        })
        .then(res => res.json())
        .then((result) => {
          console.log(result);
          if (!result.logged) {
            this.setState({isLogged: false});
          }
          else {
            this.setState({isLogged: true});
          }
          this.setState({isLoaded: true});

          
        });
      }
      scope(begintmp,endTmp,coucou) {
        //this.setState({begin : begintmp, end: endTmp});
      }
    render() {
        //this.connect();
        const {isLogged,isLoaded} = this.state;
        const begin='';
        const end='';
        if (isLogged) {
            return <div>
            <Navbar/>
            <div className='container'>
                <br/><br/>
            <h1>Page Stats</h1><br/><br/>
            <h4>Choix de la période : </h4>
            <input type="date" id="begin" className="form-control" name="begin" onChange={(e)=> begin=e.target.value}></input>
            <input type="date" id="end" className="form-control" name="end" onChange={(e)=> end=e.target.value}></input>
            <input type="submit" className="btn btn-primary" value="Confirmer" onClick={this.scope(begin,end,this)}/>
            <div className='container'>
            <h4>Nombre moyen de commentaire : </h4>
            <div className='container'><br/>
            <p className='font-weight-bold'><StatsComments /></p>
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
        else if (!isLogged && !isLoaded) {
            return <div>Chargement . . .</div>
        }
        else {
            return <Navigate to="/login" />
        }
       
    }
}
export default Stats;