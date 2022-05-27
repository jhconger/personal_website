import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myPhoto from '../HART LOGO copy 2.png' ;
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='justin'>
                    <a href="https://github.com/jhconger" target='_blank' rel="noopener" className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='hart-logo' src={myPhoto} alt="HartLogo"/>
                            Justin Hart Conger
                    </a>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {/*<li className='nav-item'>*/}
                        {/*    <Link to='/' className='nav-links' onClick={closeMobileMenu}>*/}
                        {/*        Home*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className='nav-item'>
                            <a
                                href='https://alumni.codeup.com/students/1400' target='_blank' rel="noopener"
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About
                            </a>
                        </li>
                        {/*<li className='nav-item'>*/}
                        {/*    <Link*/}
                        {/*        to='/projects'*/}
                        {/*        className='nav-links'*/}
                        {/*        onClick={closeMobileMenu}*/}
                        {/*    >*/}
                        {/*        Projects*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Link*/}
                        {/*        to='/sign-up'*/}
                        {/*        className='nav-links-mobile'*/}
                        {/*        onClick={closeMobileMenu}*/}
                        {/*    >*/}
                        {/*        Contact*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;