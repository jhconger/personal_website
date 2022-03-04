
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import React, {Component, Fragment, useState, useEffect, FC, ReactElement, ReactChildren, Children} from 'react';
import withSplashScreen from './components/withSplashScreen'

// class App extends Component {
//     render() {
//             return (
//                 <Fragment>
//                     <>
//                         <Router>
//                             <Navbar/>
//                             <Switch>
//                                 <Route path='/' exact component={Home}/>
//                                 <Route path='/services' component={Services}/>
//                                 <Route path='/products' component={Products}/>
//                                 <Route path='/sign-up' component={SignUp}/>
//                             </Switch>
//                         </Router>
//                     </>
//                 </Fragment>
//             )
//         }
// }
function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/services' component={Services}/>
                <Route path='/products' component={Products}/>
                <Route path='/sign-up' component={SignUp}/>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}
export default (App);




