import React, { useEffect } from "react";
import '../../App.css';

export default function WeatherMap() {
    useEffect(() => {
        window.location.assign('https://jhconger.github.io/weather_map/');

    }, []);
    return null
}
