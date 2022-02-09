import React from 'react';
import Navbar from '../components/navbar';
import IsLogged from '../components/islogged';

class Home extends React.Component {
    render() {
        return  <div>
            <IsLogged/>
            <Navbar/>
            <div className='container'>
                <br/><br/>
            <h1 className='display-6'>Bienvenue sur le projet préparatoire de Nicolas</h1>
            </div>
        </div>
    }
}
export default Home;