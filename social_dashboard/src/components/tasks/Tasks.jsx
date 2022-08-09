import React, { useState } from 'react';
import './tasks.css';
import {
  BrowserRouter as Router , 
  Switch,
  Route,
  Link,
  Routes,
  NavLink
} from "react-router-dom";
import Books from '../../pages/Books/Books';
import Friends from '../../pages/friends/MakeFriends';
import Clubs from '../../pages/clubs/BookClubs';

export default function Tasks() {

  const [showBooks, setShowBooks] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const [showClubs, setShowClubs] = useState(false);
  

 return (
  
  <section className="tasks-container">
    
    <div className="tasks-list">
    
    <div className="tasks-books" ><NavLink to="/books">Books</NavLink></div>
    <div className="tasks-friends"><NavLink to="/friends">Journal</NavLink></div>
      {/* <div className="tasks-clubs"><NavLink to="/bookclubs">Book Clubs</NavLink></div> */}
      
    </div>

  </section>
//   <Router>
//  <section className="tasks-container">
    
//  <div className="tasks-list">

// <Routes>
//   <Route>
//     <Route index element={<div className="tasks-books"><Books/></div>} />
//     <Route index element={<div className="tasks-friends"><Friends/></div>} />
//     <Route path="contact" element={<div className="tasks-clubs"><Clubs/></div>} />
    
//   </Route>
// </Routes>
//   </div>
//   </section>
//   </Router>
 )
}