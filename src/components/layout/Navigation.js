import React, { Fragment } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../pages/home/home'
import About from '../pages/about/about'
import Services from '../pages/services/services'
import Portfolio from '../pages/portfolio/portfolio'
import Work from '../pages/work/work'
import FAQS from '../pages/faqs/faqs'
import Blog from '../pages/blog/blog'
import Contact from '../pages/contact/contact'
import Thanks from '../pages/thanks/thanks'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Styles from '../assets/sass/global.scss'
import "../assets/sass/global.scss";

export default function Navigation() {
    return (
        <Fragment>
        <Router>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="/">RWB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/work">Work</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/faqs">Faqs</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <div>
              
                <Switch>
                  {/* dynamic page routes */}
                  <Route path="/" component={Home} exact />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/services" component={Services} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/work" component={Work} />
                  <Route path="/faqs" component={FAQS} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/thanks" component={Thanks} />
                  <Route component={Error}/>
                </Switch>
              </div>
            </Router>
        </Fragment>
    )
}
