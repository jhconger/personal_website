import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default
// function KonamiCode() {
//     return (
//         <Route
//             target="_blank"
//             path='/konami-code'
//             component={() => {
//                 window.location.replace =('https://jhconger.github.io/konami/');
//             }}/>
//     );
// }
function url_redirect(url){
    let X = setTimeout(function(){
        window.location.replace('https://jhconger.github.io/konami/');
        return true;
    },300);

    if( window.location = ('https://jhconger.github.io/konami/')){
        clearTimeout(X);
        return true;
    } else {
        if (('https://jhconger.github.io/konami/')) {
            clearTimeout(X);
            return true;
        } else {
            clearTimeout(X);
            window.location.replace('https://jhconger.github.io/konami/');
            return true;
        }
    }
    return false;
};