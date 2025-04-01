/**
 * /src/components/SideDrawer/DrawerToggleButton.js
 */
import React from 'react';

import './DrawerToogleButton.css';

const drawerToogleButton = props => {
    return (
        <button className='toogle-button' onClick={props.click}>
            <div className='toogle-button__line' />
            <div className='toogle-button__line' />
            <div className='toogle-button__line' />
        </button>
    )
}

export default drawerToogleButton;