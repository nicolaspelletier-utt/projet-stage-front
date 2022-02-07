import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Stats from './pages/Stats.js';
import Table from './pages/Table.js';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="table" element={<Table />}/>
        <Route path="stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
