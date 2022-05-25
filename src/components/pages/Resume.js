import React, {useEffect} from 'react';
import '../../App.css';

export default function About() {
    useEffect(() => {
        window.location.replace('https://jhconger.github.io/resume/');
    }, []);
    return null
}