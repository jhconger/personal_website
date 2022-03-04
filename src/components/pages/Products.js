import React from 'react';
import '../../App.css';
import {useTransform, useViewportScroll} from "framer-motion";
import myVideo from '../../cube1.mp4'

export default function Products({ offset = 1500 }) {
    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, [0, offset], [1, 5]);
    const opacity = useTransform(scrollY, [0, offset], [3, 0]);
    const moveDown = useTransform(scrollY, [0, offset], [0, -1000]);

    return (
        <>
            <div className='hero-container'>
                <h1>PROJECTS</h1>
                <video  autoPlay controls loop>
                    <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            <div style={{background: '#030303', height: `${offset}px`}}/>
            <div style={{background: '#030303', height: '30vh'}}/>
        </>

    );
}