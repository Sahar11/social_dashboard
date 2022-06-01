import React from "react";
import { Link } from "react-router-dom";
import '../components/style/header.css';


export default function New() {

  return (
    <nav>
     
<ul className="navUl">
  <li className="navLi"><a href="#home">Home</a></li>
  <li className="navLi"><a href="#news">News</a></li>
  <li className="navLi"><a href="#contact">Contact</a></li>
  <li className="navLi"><a href="#about">About</a></li>
</ul>
   
    </nav>
  )

}