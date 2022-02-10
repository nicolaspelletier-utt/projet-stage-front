import React from 'react';
import Navbar from '../components/navbar';
import { Navigate } from 'react-router-dom';
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            isLoaded: false
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
    render() {
        const {isLogged,isLoaded} = this.state;
        if (isLogged) {
            return <div>
            <Navbar/>
            <h1>Page Table</h1>
    
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
export default Table;