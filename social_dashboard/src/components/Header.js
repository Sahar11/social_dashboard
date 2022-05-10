import * as React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import './/style/header.css';
import styled from '@emotion/styled';

const NavMenu = styled.div`
ul {
  max-width: 1200px;
  margin:0 auto;
  width: 90%;

 li{
   display: inline-block;
   border-radius: 8px;
   transition: .3s ease background-color;
   &:hover {
     background-color: blue;
   }
 }
}
`;
export default function Header() {
  return (
    <NavMenu>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <   Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </NavMenu>
  );
}