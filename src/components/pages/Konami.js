import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default function KonamiCode() {
    return (
        <Route
            target="_blank"
            path='/konami-code'
            component={() => {
                window.location.href = ('https://jhconger.github.io/konami/');
                return true;
            }}/>
    );
}
