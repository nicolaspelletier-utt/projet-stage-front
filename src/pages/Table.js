import React from 'react';
import Navbar from '../components/navbar';
import IsLogged from '../components/islogged';
class Table extends React.Component {
    render() {
        return <div>
            <IsLogged/>
            <Navbar/>
            <h1>Page Table</h1>
        </div>
    }
}
export default Table;