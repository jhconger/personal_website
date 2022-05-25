import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import myPhoto1 from "../weather.gif";
import myPhoto2 from "../movie.gif";
import myPhoto3 from "../img_2.gif";
import myPhoto4 from "../coffee.gif";
import myPhoto5 from "../konami.gif";
import myPhoto6 from "../H3BlueLogo.png";
import myVideo from "../HartLogoVid.mp4";

function Cards() {

    return (
        <>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper' style={{width: "75%"}}>
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
                            <CardItem
                                src={myPhoto6}
                                text='Happening Happy Hours'
                                label='H3'
                                path='/h3'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;