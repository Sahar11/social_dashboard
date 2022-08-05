import React from "react";
import {
  BrowserRouter as Router , 
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Layout from "../components/Layout";

import Home from './Home';
import Login from './Login';

const Pages = () => {
  return (
    <Router>
      <Layout>
      <Routes>
      
        <Route exact path="/" component = {Home} />
        <Route path = "/login" component = {Login} />
        
      
      </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;