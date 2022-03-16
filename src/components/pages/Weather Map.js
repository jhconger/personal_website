import React, {useEffect} from 'react';
import '../../App.css';
import { browserHistory } from 'react-router'

export default function WeatherMap() {
     useEffect(() => {
         window.location.href = ('https://jhconger.github.io/weather_map/')
     }, []);

    return (
         null
     );
 }

