import '../../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, { useEffect } from "react";

export default function KonamiCode() {

    useEffect(() => {
        window.location.href = ('https://jhconger.github.io/konami/');
    }, []);

    return (
     null
    );
}




// function
//     return (
//         <Route
//             target="_blank"
//             path='/konami-code'
//             component={() => {
//                 window.location.replace =('https://jhconger.github.io/konami/');
//             }}/>
//     );
// }

