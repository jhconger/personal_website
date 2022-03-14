import React from 'react';
import '../../App.css';
import { Route } from 'react-router-dom'

export default function WeatherMap() {
    return (

            <Route
                target="_blank"
                path='/weather-map'
                component={() => {
                window.location.href = 'https://jhconger.github.io/weather_map/';
                return false;
            }}/>
    );
}
