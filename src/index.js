import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import Header from './Header/Header';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{backgroundColor:"Black",backgroundSize:"cover",height:"110vh"}}>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path='/Skills' element = {<Skills/>}/>
          </Routes>
        </BrowserRouter>
  </div>
);

