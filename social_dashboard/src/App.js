import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Tasks from './components/tasks/Tasks';
import './App.css';
import MakeFriends from './pages/friends/MakeFriends';
import Books from './pages/Books/Books';
import BookClubs from './pages/clubs/BookClubs';

//const linkArray = ["Products", "Services", "Overview", "Contact Us"];

const App = () => {

    return (
        <>
         
            <Router>
       
      <Routes>
      <Route index element={<Main/>} />
       <Route path="/books" element = {<Books/>} />
      <Route path = "/friends" element = {<MakeFriends/>} />
      <Route path = "/bookclubs" element = {<BookClubs/>} />
     </Routes>
     </Router>
        </>
    );
}

export default App;
