/*
=========================================================
Name : App.js
Assignment : Assignment 4
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Mar 24, 2024
Description : App file for my-ecommerce-app
=========================================================
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../../my-ecommerce-app/src/components/Homepage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;