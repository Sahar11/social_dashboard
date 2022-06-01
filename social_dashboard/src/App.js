import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import New from './components/New';
import Body from './components/Table';
import './App.css';
const linkArray = ["Products", "Services", "Overview", "Contact Us"];

const App = () => {

    return (
        <>
         <New /> 
       {/* <Navbar links={linkArray}/> */}
     
      
       </>
    );
}

export default App;
