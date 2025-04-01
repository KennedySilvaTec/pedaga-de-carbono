/**
 * /src/pages/Inicio/index.js
 */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import inicio02Image from '../../images/inicio02Image.png';
import inicio03Image from '../../images/inicio03Image.png';
import inicio04Image from '../../images/inicio04Image.png';

import './style.css';

class Inicio extends Component {
    render() {
        return (
            <div id="inicio">
                <div className="component-header">
                    <h1>Pegada de Carbono</h1>
                </div>
                <div className="subtitle">
                    <h4>Você sabe qual o impacto das suas atividades diárias nas mudanças climáticas?</h4>
                </div>
                <div className="inicio-content">
                    <div>
                        <img className="inicio03Image" src={inicio03Image} alt="Imagem 03 Inicio"></img>
                        <p>Algumas atividades que realizamos no dia-a-dia emitem, direta ou indiretamente, gases do efeito estufa, os quais contribuem para as mudanças climáticas. A sua alimentação, os meios de transporte que você utiliza e tudo que envolve consumo de energia na sua casa,
                        são alguns exemplos.
                    </p>
                    </div>
                </div>

                <div className="subtitle">
                    <h4>Mas o que a pegada de carbono tem a ver com isso?</h4>
                </div>
                <div className="inicio-content">
                    <div>
                        <img className="inicio02Image-mobile" src={inicio02Image} alt="Imagem 02 Inicio"></img>
                        <p>A pegada de carbono é justamente uma forma de medir o impacto que a emissão desses gases têm no nosso planeta, através da quantificação, dada em toneladas de CO2 equivalente por ano, das emissões vindas dessas atividades do dia-a-dia.</p>
                        <img className="inicio02Image-desktop" src={inicio02Image} alt="Imagem 02 Inicio"></img>
                    </div>
                    <p>Sabendo qual sua pegada de carbono individual é possível adotar medidas para compensar essa emissão e também, adotar novos hábitos de vida para reduzir sua pegada de carbono individual.</p>
                </div>
                <hr/>
    
                <div className="inicio-content-final">
                    <div>
                        <img className="inicio04Image" src={inicio04Image} alt="Imagem 04 Inicio"></img>
                        <h3>Quer saber qual é a sua pegada de carbono?</h3>
                    </div>
                </div>

                <div className="bt">
                    <Link to='/calculos'>
                        <button>
                            Calcule agora!
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Inicio;