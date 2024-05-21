import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/login';


const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
