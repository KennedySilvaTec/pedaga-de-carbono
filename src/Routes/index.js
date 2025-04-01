/**
 * /src/Routes/index.js
 */
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ScrollToTop from '../components/ScrollToTop'
import Inicio from '../pages/Inicio'
import Calculos from '../pages/Calculos'
import Informacoes from '../pages/Informacoes'
import Sobre from '../pages/Sobre'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './style.css';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <div className="routes" >
                    <Route path='/' exact component={Inicio} />
                    <Route path='/calculos' exact component={Calculos} />
                    <Route path='/informacoes' exact component={Informacoes} />
                    <Route path='/sobre' exact component={Sobre} />
                </div>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Routes