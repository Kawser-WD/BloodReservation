import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-lg-12 mt-2">
                <p><FontAwesomeIcon icon={faCopyright}/> 2021 Copyright All Right Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;