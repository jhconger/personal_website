import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default function Resume() {
    return (
        <Route
            target="_blank"
            path='/resume'
            component={() => {
                window.location.href = ('https://jhconger.github.io/resume/');
                return true;
            }}/>
    );
}
