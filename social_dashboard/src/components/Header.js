import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import './/style/header.css'
import { Domain } from '@mui/icons-material';
export default function Header() {
  return (
    <div className="navbar">
     <ul>
       <li>
         <NavLink>Logo</NavLink></li>
       <li>Login</li>
       <li>Signup</li>
       </ul>
    </div>
  );
}