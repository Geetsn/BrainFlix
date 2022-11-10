// import { useState } from 'react';
// import './App.scss';
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Upload from './uploads/Upload/Upload';

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
      <Header/>
      {/* <Home /> */}
      <Upload />
      </div>
    // </BrowserRouter>
  );

}

export default App;
