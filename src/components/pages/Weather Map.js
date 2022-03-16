import React, {useEffect} from 'react';
import '../../App.css';
import {BrowserRouter} from "react-router-dom";

export default function WeatherMap() {
     useEffect(() => {
         window.location.replace = ('https://jhconger.github.io/weather_map/')
     }, []);

    return null;
 }

// export const Test = () => (
//     <div className="">
//         <button onClick={BrowserRouter.goBack}>Back</button>
//     </div>
// )