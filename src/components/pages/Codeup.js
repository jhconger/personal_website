import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default function Codeup() {
    return (
        <Route
            target="_blank"
            path='/codeup'
            component={() => {
                window.location.href = ('https://jhconger.github.io/codeup/');
                return true;
            }}/>
    );
}
