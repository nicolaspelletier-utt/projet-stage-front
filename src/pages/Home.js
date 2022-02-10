import React from 'react';
import Navbar from '../components/navbar';
import { Navigate } from 'react-router-dom';
function Home() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <br/><br/>
      <h1 className='display-6'>Bienvenue sur le projet préparatoire de Nicolas</h1>
      </div> 
    </div>
  );
}
export default Home;
