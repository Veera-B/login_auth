import React from 'react';
import classes from './Toolbar.module.css';
import Navigation from '../Navigations/Navigation';

const Tollbar = (props) =>{
    return (
        <header className = {classes.Toolbar}>
            <nav>
                <Navigation />
            </nav>
        </header>
    )
}

export default Tollbar;
