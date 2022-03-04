import React from 'react';
import '../../App.css';
import {useTransform, useViewportScroll} from "framer-motion";
// import myVideo from

export default function Products({ offset = 1500 }) {
    const { scrollY } = useViewportScroll();
    // 3.
    const scale = useTransform(scrollY, [0, offset], [1, 5]);
    const opacity = useTransform(scrollY, [0, offset], [3, 0]);
    const moveDown = useTransform(scrollY, [0, offset], [0, -1000]);

    return (
        <>
            <div className='hero-container'>
                <h1>PROJECTS</h1>
                {/*// <p>What are you waiting for?</p>*/}
                <video  autoPlay controls loop>
                    <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            {/* 5. */}
            <div style={{background: '#030303', height: `${offset}px`}}/>
            <div style={{background: '#030303', height: '30vh'}}/>
        </>

    );
}