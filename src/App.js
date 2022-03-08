import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';
import WeatherMap from './components/pages/Weather Map';
import React, {Component, Fragment, useState, useEffect, FC, ReactElement, ReactChildren, Children} from 'react';
import withSplashScreen from './components/withSplashScreen'

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/services' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/sign-up' component={SignUp}/>
                <Route path='/weather-map' component={WeatherMap}/>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}
export default (App);



