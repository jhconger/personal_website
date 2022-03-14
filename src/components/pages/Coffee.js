import '../../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, { useEffect } from "react";

export default function Coffee() {

    useEffect(() => {
        window.location.href = ('https://jhconger.github.io/coffee/');
    }, []);

    return (
        null
    );
}
