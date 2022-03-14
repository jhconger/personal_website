import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import myPhoto1 from "../weather.gif";
import myPhoto2 from "../movie.gif";
import myPhoto3 from "../img_2.gif";
import myPhoto4 from "../coffee.gif";
import myPhoto5 from "../konami.gif";
import {Route} from "react-router-dom";

function Cards() {

    return (
        <>
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper' style={{ width: "75%" }}>
                    <ul className='cards__items'>

                        <CardItem
                            src={myPhoto1}
                            text='An interactive Weather API project'
                            label='Weather Map'
                            path='/weather-map'
                        />
                        <CardItem
                            src={myPhoto2}
                            text='An interactive Movie API project'
                            label='Movies'
                            path='/movies'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={myPhoto3}
                            text='A complete guide to me'
                            label='Resume'
                            path='/resume'
                        />
                        <CardItem
                            src={myPhoto4}
                            text='A Coffee App'
                            label='Coffee'
                            path='/coffee'
                        />
                        <CardItem
                            src={myPhoto5}
                            text='Please enter the Konami Code'
                            label='Konami'
                            path='/konami-code'
                        />
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards;