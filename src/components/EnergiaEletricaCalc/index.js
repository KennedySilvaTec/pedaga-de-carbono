/**
 * /src/components/EnergiaEletricaCalc/index.js
 */
import React, { Component } from 'react';

import infoIcon from '../../icons/infoIcon.svg';

import './style.css';

class EnergiaEletricaCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            consumoMensal: "",
            fatorEmissao: 0.075,
            valor: ""
        }

        this.handleConsumoMensalEnergiaEletricaCalc = this.handleConsumoMensalEnergiaEletricaCalc.bind(this);

        this.energiaEletricaCalc = this.energiaEletricaCalc.bind(this);
    }

    handleConsumoMensalEnergiaEletricaCalc(event) {
        this.setState(
            { consumoMensal: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.energiaEletricaCalc() }
        );
    }

    energiaEletricaCalc() {
        const { consumoMensal, fatorEmissao } = this.state;
        /* O input do energia elétrica está em KWh consumida por mes
        porém o calculo é feito utilizando-se MWh, por isso há a conversão */
        let valor = ((consumoMensal / 1000) * fatorEmissao * 12);
        
        valor = Number.isNaN(parseFloat(valor)) ? 0 : valor;
        this.setState({ valor });
        this.props.valorEnergiaEletricaCallback(valor);
    }

    render() {
        return (
            <div className="energiaEletricaCalc">
                <div className="info-energia-img">
                    <img className="icons" src={infoIcon} alt="Icone da Info"></img>
                    <div className="info-energia">
                        <p>Você pode encontrar essa informação na sua conta de luz!</p>
                    </div>
                </div>
                <h4>Energia Elétrica</h4>
                <label htmlFor="consumoMensal">Qual é o seu consumo <strong>mensal</strong>?</label>
                <input type="text" onChange={this.handleConsumoMensalEnergiaEletricaCalc} id="consumoMensal" placeholder="KWh" />
            </div>
        )
    }
}

export default EnergiaEletricaCalc;