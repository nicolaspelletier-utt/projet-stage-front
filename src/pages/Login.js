import React from 'react';
import LoginForm from '../components/loginform';
import '../App.css';
import { Navigate } from 'react-router-dom';

class Login extends React.Component {
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
      return <Navigate to ="/"/>
    }
    else {
      return (
        <div>
          <br/><br/><br/>
          <LoginForm/>
  
        </div>
      )
    }

  }
}

export default Login; 
