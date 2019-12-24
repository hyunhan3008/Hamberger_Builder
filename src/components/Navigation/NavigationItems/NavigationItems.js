import React from 'react';
// import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/checkout">Checkout</NavigationItem>
        {/* <li style={{ margin: '10px', display: 'inline-block' }}>
            <NavLink to="/checkout/">Checkout</NavLink></li> */}
    </ul>
);

export default navigationItems;