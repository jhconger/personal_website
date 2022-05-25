import React, {useEffect} from 'react';
import '../../App.css';

export default function About() {
    useEffect(() => {
        window.location.replace('https://justin-and-gerald.github.io/movies/');
    }, []);
    return null
}
