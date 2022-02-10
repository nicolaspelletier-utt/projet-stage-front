import React , {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import { Navigate } from 'react-router-dom';
function Table() {

    return (
        <div>
            <Navbar/><br/><br/>
            <div className="container">
                <h1>Page table</h1>
            </div>
        </div>
    );
}
export default Table;
