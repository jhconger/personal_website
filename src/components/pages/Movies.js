import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


export default function Movies() {
    return (

        <Route
            target="_blank"
            path='/movies'
            component={() => {
                window.location.href = ('https://jhconger.github.io/movies/');
                return false;
            }}/>
    );
}
