import React, {useEffect} from 'react';
import '../../App.css';

export default function Resume() {
    useEffect(() => {
        window.location.assign('https://jhconger.github.io/resume/');
    }, []);
    return null
}