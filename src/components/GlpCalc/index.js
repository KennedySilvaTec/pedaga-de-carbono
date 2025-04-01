/**
 * /src/components/GlpCalc/index.js
 */
import React, { Component } from 'react';

import infoIcon from '../../icons/infoIcon.svg';

import './style.css';

class GlpCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            consumoMensal: 0,
            fatorEmissaoCO2: 2930.927472,
            fatorEmissaoCH4: 0.2323674,
            fatorEmissaoN2O: 0.004647348,
            valor: ""
        }

        this.handleConsumoMensalGlpCalc = this.handleConsumoMensalGlpCalc.bind(this);
       
        this.glpCalc = this.glpCalc.bind(this);
    }

    handleConsumoMensalGlpCalc(event) {
        this.setState(
            { consumoMensal: event.target.value.replace(",",".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.glpCalc() }
        );
    }

    glpCalc() {
        const { consumoMensal, fatorEmissaoCO2, fatorEmissaoCH4, fatorEmissaoN2O } = this.state;
        let valor = ((1 * (((consumoMensal * 13) * 12 / 1000) * (fatorEmissaoCO2 / 1000)))
            + (25 * (((consumoMensal * 13) * 12 / 1000) * (fatorEmissaoCH4 / 1000)))
            + (298 * (((consumoMensal * 13) * 12 / 1000) * (fatorEmissaoN2O / 1000))));
        
        valor = Number.isNaN(parseFloat(valor)) ? 0 : valor;
        this.setState({ valor });
        this.props.valorGlpCallback(valor);
    }

    render() {
        return (
            <div className="glpCalc">
                <div className="info-glp-img">
                    <img className="icons" src={infoIcon} alt="Icone da Info"></img>
                    <div className="info-glp">
                        <p>Em média, uma pessoa utiliza meio botijão de gás por mês!</p>
                    </div>
                </div>
                <h4>Gás de cozinha (GLP)</h4>
                <label htmlFor="consumoMensal">Qual é o seu consumo <strong>mensal</strong>? (Botijões - 13kg)</label>
                <input type="text" onChange={this.handleConsumoMensalGlpCalc} id="consumoMensal" placeholder="QTD" />
            </div>
        )
    }
}

export default GlpCalc;