import React from 'react';
import '../App.css';
import './HeroSection.css';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import myVideo from "../HartLogoVid.mp4";

export default function HeroSection({ offset = 1500 }) {
    // 2.
    const { scrollY } = useViewportScroll();
    // 3.
    const scale = useTransform(scrollY, [0, offset], [1, 5]);
    const opacity = useTransform(scrollY, [0, offset], [3, 0]);
    const moveDown = useTransform(scrollY, [0, offset], [0, -1000]);

    return (
        <>
        <div className='hero-container'>
            <h1>Seneca, “Luck is what happens when preparation meets opportunity.” </h1>
            {/*<video muted autoPlay loop >*/}
            {/*    <source src={myVideo} type="video/mp4" />*/}
            {/*</video>*/}
            <div
                dangerouslySetInnerHTML={{
                    __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${myVideo} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
                }}
            />

        </div>
            <p className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules"
               data-ca3_icon=""/>
        </>
    );
}
