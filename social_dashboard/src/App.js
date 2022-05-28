import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
const linkArray = ["Products", "Services", "Overview", "Contact Us"];

const App = () => {

    return (
        <div>
       <Navbar links={linkArray}/>
       </div>
    );
}

export default App;
