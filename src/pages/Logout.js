import React from 'react';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        };
    }
    componentDidMount() {
        fetch("http://localhost:9090/api/logout",{
            credentials: 'include'
        })
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }
    render() {
        const { error,isLoaded,value } = this.state;
        //const history = useNavigate();

        if (error) {
            return <div>Erreur : {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Déconnexion…</div>;
          } else {
            return <Navigate to="/login"/>
          }
    }
}

export default Logout; 
