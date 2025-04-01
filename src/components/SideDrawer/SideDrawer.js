/**
 * /src/components/SideDrawer/SideDrower.js
 */
import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = porps => {
    let drawerClasses = 'side-drawer';

    if (porps.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/' className='a'>Início</Link></li>
                <li><Link to='/calculos' className='a'>Calculadora</Link></li>
                <li><Link to='/informacoes' className='a'>Informações</Link></li>
                <li><Link to='/sobre' className='a'>Sobre</Link></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;