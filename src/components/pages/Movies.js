import React, {useEffect} from 'react';
import '../../App.css';

export default function Movies() {
    useEffect(() => {
        window.location.assign('https://jhconger.github.io/ReactMovieDB/');
    }, []);
    return null
}
