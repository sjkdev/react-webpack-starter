import React, { Fragment } from "react";
import Header from './layout/Header'
import Navigation from './layout/Navigation'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from './pages/home/home'
// import About from './pages/about/about'
// import Services from './pages/services/services'
// import Portfolio from './pages/portfolio/portfolio'
// import FAQS from './pages/faqs/faqs'
// import Blog from './pages/blog/blog'
// import Contact from './pages/contact/contact'
// import Thanks from './pages/thanks/thanks'
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './assets/sass/global.scss'
import "./assets/sass/global.scss";

// import imgFile from "../../assests/image/Favicon.png";

const App = () => {
  return (
    <Fragment src={Styles}>
      <Header />
      <Navigation />
    </Fragment>
    
  );
};

export default App;