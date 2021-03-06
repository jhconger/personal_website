import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import Projects from './components/pages/Projects';
import SignUp from './components/pages/LeaveAMessage';
import WeatherMap from './components/pages/Weather Map';
import Movies from "./components/pages/Movies";
import Resume from "./components/pages/Resume";
import KonamiCode from "./components/pages/Konami";
import H3 from './components/pages/H3.js';
import Coffee from "./components/pages/Coffee";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, {Component, Fragment, useState, useEffect, FC, ReactElement, ReactChildren, Children} from 'react';

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/services' component={About}/>
                {/*<Route path='/projects' component={Projects}/>*/}
                <Route path='/sign-up' component={SignUp}/>
                <Route path='/weather-map' component={WeatherMap}/>
                <Route path='/movies' component={Movies}/>
                <Route path='/resume' component={Resume}/>
                <Route path='/coffee' component={Coffee}/>
                <Route path='/konami-code' component={KonamiCode}/>
                <Route path='/h3' component={H3}/>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}

export default (App);



