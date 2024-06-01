import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';


const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
