/**
 * /src/components/TransporteAereoCalc/index.js
 */
import React, { Component } from 'react';

import './style.css';

class TransporteAereoCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            distanciaAnual: "",
            fatorEmissaoCO2: "",
            fatorEmissaoCH4: "",
            fatorEmissaoN2O: "",
            valor: ""
        }

        this.handleDistanciaAnual = this.handleDistanciaAnual.bind(this);
    
        this.transporteAereoCalc = this.transporteAereoCalc.bind(this);
    }

    handleDistanciaAnual(event) {
        this.setState(
            { distanciaAnual: event.target.value.replace(",",".") },
            () => { this.transporteAereoCalc() }
        );

        if (event.target.value <= 500) {
            this.setState({
                fatorEmissaoCO2: 0.1235648148,
                fatorEmissaoCH4: 0.000004444444444,
                fatorEmissaoN2O: 0.000003914988814
            });
        } else if (event.target.value > 500 && event.target.value <= 3700) {
            this.setState({
                fatorEmissaoCO2: 0.07676851852,
                fatorEmissaoCH4: 0.0000003703703704,
                fatorEmissaoN2O: 0.000002423564504
            });
        } else if (event.target.value > 3700) {
            this.setState({
                fatorEmissaoCO2: 0.09485185185,
                fatorEmissaoCH4: 0.0000003703703704,
                fatorEmissaoN2O: 0.00000301391996
            });
        }
    }

    transporteAereoCalc() {
        const { distanciaAnual, fatorEmissaoCO2, fatorEmissaoCH4, fatorEmissaoN2O } = this.state;
        let valor = (1 * ((1 + 0.08) * distanciaAnual * fatorEmissaoCO2 / 1000))
            + (25 * ((1 + 0.08) * distanciaAnual * fatorEmissaoCH4 / 1000))
            + (298 * ((1 + 0.08) * distanciaAnual * fatorEmissaoN2O / 1000));
        
        valor = Number.isNaN(parseFloat(valor)) ? 0 : valor;
        this.setState({ valor });
        this.props.valorTransporteAereoCallback(valor);
    }

    render() {
        return (
            <div className="transporteAereoCalc">
                <div className="transporteAereo-content">
                    <label htmlFor="distanciaAnual">Qual a distância <strong>anual</strong> total que você percorre em suas viagens aéreas?</label>
                    <input type="text" onChange={this.handleDistanciaAnual} id="distanciaAnual" placeholder="Km" />
                </div>
            </div>
        )
    }
}

export default TransporteAereoCalc;