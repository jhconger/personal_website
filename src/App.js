
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 7ea9cbb5241af9e749928b6f27b7b24b63244fef
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import React, {Component, Fragment, useState, useEffect, FC, ReactElement, ReactChildren, Children} from 'react';
import withSplashScreen from './components/withSplashScreen'
<<<<<<< HEAD

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


=======

class App extends Component {
    render() {
            return (
                <Fragment>
                    <>
                        <Router>
                            <Navbar/>
                            <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/services' component={Services}/>
                                <Route path='/products' component={Products}/>
                                <Route path='/sign-up' component={SignUp}/>
                            </Switch>
                        </Router>
                    </>
                </Fragment>
            )
        }
}


                export default withSplashScreen(App);


>>>>>>> 7ea9cbb5241af9e749928b6f27b7b24b63244fef


