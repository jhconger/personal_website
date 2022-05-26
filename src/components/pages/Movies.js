import React, {useEffect} from 'react';
import '../../App.css';

export default function Movies() {
    useEffect(() => {
        window.location.assign('https://justin-and-gerald.github.io/movies/');
    }, []);
    return null
}
