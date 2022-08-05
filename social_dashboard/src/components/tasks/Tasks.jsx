import React from 'react';
import './tasks.css';
import Book from '../../data/books.png';
import {
  BrowserRouter as Router , 
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default function Tasks() {
 return (
  <section className="tasks-container">
    <div className="tasks-list">
   <Router path="/books"><Link><div className="tasks-books"><Book /></div> </Link></Router>
      <div className="tasks-friends">Make Friends</div>
      <div className="tasks-clubs">Book Clubs</div>
    </div>
  </section>
  
 )
}