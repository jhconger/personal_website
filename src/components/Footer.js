import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='https://www.facebook.com/justin.conger.90'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/justinhartconger/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link github'
                            to='https://github.com/jhconger'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i class='fab fa-github' />
                        </Link>
                        <Link
                            class='social-icon-link gmail'
                            to='mailto: jhconger@gmail.com'
                            target='_blank'
                            aria-label='Gmail'
                        >
                            <i class='fab fa-google' />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/justin-conger-9b5a897b/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
        </div>
    );
}
export default Footer;