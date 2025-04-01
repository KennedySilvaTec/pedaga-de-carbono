/**
 * /src/components/Header/index.js
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer';
import Toolbar from '../Toolbar/Toolbar';

import logo from '../../images/logo.png';

import './style.css';

class Header extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((pervState) => {
            return { sideDrawerOpen: !pervState.sideDrawerOpen }
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }
    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div id="header">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
        )
    }
}

export default Header;