/**
 * /src/components/Toolbar/Toolbar.js
 */
import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const Toolbar = props => {
    return (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='spacer' />
                <div className='toolbar_navigation-items'>
                    <ul>
                        <li><Link to='/' className='a'>Início</Link></li>
                        <li><Link to='/calculos' className='a'>Calculadora</Link></li>
                        <li><Link to='/informacoes' className='a'>Informações</Link></li>
                        <li><Link to='/sobre' className='a'>Sobre</Link></li>
                    </ul>
                </div>
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;