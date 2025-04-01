/**
 * /src/components/Footer/index.js
 */
import React, { Component } from 'react';

import logo_ponte from '../../images/logo_ponte.png';

import './style.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer-content">
                    <div className="contato">
                        <h4>Contatos</h4>
                        <p>arielvieira65@gmail.com</p>
                        <p>elitonmatheus98@gmail.com</p>
                    </div>
                    <div className="grupo-pesquisa">
                        <h4>Conheça o nosso grupo de pesquisa</h4>
                        <a target="blanck" href="https://www.ponteducacional.com.br"><img className="image" src={logo_ponte} alt="Logo Ponte"></img></a>
                    </div>
                    <div className="license">
                        <a 
                            rel="license" 
                            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img 
                            alt="Creative Commons License" 
                            style={{borderWidth:0}}
                            src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                        </a>
                        <br />
                        <p>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a></p>.
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;