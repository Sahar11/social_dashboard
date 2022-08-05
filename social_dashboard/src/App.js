import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Tasks from './components/tasks/Tasks';
import './App.css';
//const linkArray = ["Products", "Services", "Overview", "Contact Us"];

const App = () => {

    return (
        <>
            <Main />
            <Tasks/>
            <Routes>
        <Route path="/" />
        <Route index element={<Tasks/>} />
        </Routes>
        </>
    );
}

export default App;
