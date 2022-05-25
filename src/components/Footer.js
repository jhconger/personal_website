import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import myPhoto from "../HART LOGO copy 2.png";

function Footer() {
    return (
        <div className='footer-container'>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link github'
                            href='https://github.com/jhconger'
                            target='_blank'
                            rel="noopener"
                            aria-label='Github'
                        >
                            <i class='fab fa-github'/>
                        </a>
                        <a
                            class='social-icon-link gmail'
                            href='mailto: jhconger@gmail.com'
                            target='_blank'
                            rel="noopener"
                            aria-label='Gmail'
                        >
                            <i class='fab fa-google'/>
                        </a>
                        <a
                            class='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/justin-conger-9b5a897b/'
                            target='_blank'
                            rel="noopener"
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin'/>
                        </a>
                    </div>
        </div>
    );
}
export default Footer;