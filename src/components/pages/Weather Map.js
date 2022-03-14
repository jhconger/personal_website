import React from 'react';
import '../../App.css';
import { Route } from 'react-router-dom'

export default function WeatherMap() {
    return (

            <Route
                target="_blank"
                path='/weather-map'
                component={() => {
                // window.location.replace = ('https://jhconger.github.io/weather_map/');
                    if(window.location.href ===('https://jhconger.github.io/weather_map/'))
                    {
                        window.location.reload();
                    }
                    else
                    {
                        window.location.href = ('https://jhconger.github.io/weather_map/');
                    }
                    return null
            }}/>
    );
}
