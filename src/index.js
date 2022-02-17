import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Stats from './pages/Stats.js';
import Table from './pages/Table.js';
import Logout from './pages/Logout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="table" element={<Table />}/>
        <Route path="stats" element={<Stats />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
