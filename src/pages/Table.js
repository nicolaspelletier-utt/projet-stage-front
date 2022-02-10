import React from 'react';
import Navbar from '../components/navbar';
import { Navigate } from 'react-router-dom';
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
   
    render() {
        const {isLogged,isLoaded} = this.state;
     
            return <div>
            <Navbar/>
            <h1>Page Table</h1>
    
        </div>


    }
}
export default Table;