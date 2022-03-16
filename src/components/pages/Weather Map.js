import React, {useEffect} from 'react';
import '../../App.css';


export default function WeatherMap() {
     useEffect(() => {
         window.location.href = ('https://jhconger.github.io/weather_map/')
     }, []);

    return false;
 }

// export const Test = () => (
//     <div className="">
//         <button onClick={BrowserRouter.goBack}>Back</button>
//     </div>
// )