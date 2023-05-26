import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './bg.css'

export const Layout = (props) => {
    return(
        <div>
            <Navbar />
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            {props.children}
            <Footer />
        </div>
    )
}