import React from 'react';
import './Body.css'
import logo from '../../logo.png'
const Body = () => {
    return (
        <div className='body-container'>
            <div>
                <div className='logo-container'>
                    <img src={logo} className='logopic' />
                    <h2 className='logo'>The Muscle Bar</h2>
                </div>
            </div>
            <div><h2>Dashboard</h2></div>
        </div>
    );
};

export default Body;