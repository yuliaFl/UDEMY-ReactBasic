import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Body from './Body'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
            
            <BrowserRouter>
            
            <Navbar/>

            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
         
            </BrowserRouter>

    </div>
  );
}

export default App;