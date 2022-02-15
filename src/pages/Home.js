import React from 'react';
import Navbar from '../components/navbar';
import { Navigate } from 'react-router-dom';
import IsLogged from '../components/isLogged.jsx';
function Home() {
  
  return (
    <div>
      <IsLogged/>
      <Navbar/>
      <div className='container'>
      <br/><br/>
      <h1 className='display-6'>Welcome to Nicolas' training project</h1>
      </div> 
    </div>
  );
}
export default Home;
