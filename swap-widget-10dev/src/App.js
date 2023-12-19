import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstFrame from './components/FirstFrame';
import './App.css';

function App() {
  return (
   <BrowserRouter>

   
   <Routes>
   <Route path="/" element={<FirstFrame/>} />

   </Routes>
 
    </BrowserRouter>
 
  
  );
}

export default App;
