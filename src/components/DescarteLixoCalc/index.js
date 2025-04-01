/**
 * /src/components/DescarteLixo/index.js
 */
import React, { Component } from 'react';

import infoIcon from '../../icons/infoIcon.svg';

import './style.css';

class DescarteLixoCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descarteDiario: 0,
            fatorEmissao: 2.64,
            valor: ""
        }

        this.descarteLixoCalc = this.descarteLixoCalc.bind(this);
        this.handleDescarteDiario = this.handleDescarteDiario.bind(this);
    }

    handleDescarteDiario(event) {
        this.setState(
            { descarteDiario: event.target.value.replace(",", ".") },
            () => { this.descarteLixoCalc() }
        );
    }

    descarteLixoCalc() {
        const { descarteDiario, fatorEmissao } = this.state;
        let valor = descarteDiario * fatorEmissao * 365 / 1000;
        valor = Number.isNaN(parseFloat(valor)) ? 0 : valor;
        this.setState({ valor });
        this.props.valorDescarteLixoCallback(valor);
    }

    render() {
        return (
            <div className="descarteLixoCalc">
                <div className="descarteLixo-content">
                    <div className="input-lixo">
                        <label htmlFor="descarteDiario">Quantos quilogramas de lixo você descarta por <strong>dia</strong>?</label>
                        <input type="text" onChange={this.handleDescarteDiario} id="descarteDiario" placeholder="Kg" />
                    </div>
                    <div className="info-lixo-img">
                        <img className="icons" src={infoIcon} alt="Icone da Info"></img>
                        <div className="info-lixo">
                            <p>Caso esteja em dúvida, utilize 1 kg/dia.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DescarteLixoCalc;