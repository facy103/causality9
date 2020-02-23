import React from 'react';
import Home from './Home.js';
import Restart from './Restart.js';
import Send from './Send.js';
import Save from './Save.js';
import './Footer.css';


const Footer = (props) => {

    return (

        <div className="footer"> 
            <Send setNextStep={props.setNextStep} />
            <Save />
            <Restart />
            <Home />
        </div>


    )
}

export default Footer;