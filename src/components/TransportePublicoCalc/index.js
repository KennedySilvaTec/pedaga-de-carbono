/**
 * /src/components/TransportePublicoCalc/index.js
 */
import React, { Component } from 'react';

import './style.css';

class TransportePublicoCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            distanciaDiariaOnibusMunicipal: 0,
            distanciaDiariaOnibusViagem: 0,
            distanciaDiariaMetro: 0,

            diasAnoOnibusMunicipal: 0,
            diasAnoOnibusViagem: 0,
            diasAnoMetro: 0,

            fatorEmissaoCO2FossilOnibusMunicipal: 0.0939683,
            fatorEmissaoCH4FossilOnibusMunicipal: 0.000005000975009,
            fatorEmissaoN2OFossilOnibusMunicipal: 0.000005000975009,
            fatorEmissaoCH4BiocombustivelOnibusMunicipal: 0.00001197056362,
            fatorEmissaoN2OBiocombustivelOnibusMunicipal: 0.000000718233817,

            fatorEmissaoCO2FossilOnibusViagem: 0.02753674237,
            fatorEmissaoCH4FossilOnibusViagem: 0.000001465500178,
            fatorEmissaoN2OFossilOnibusViagem: 0.000001465500178,
            fatorEmissaoCH4BiocombustivelOnibusViagem: 0.000003507888578,
            fatorEmissaoN2OBiocombustivelOnibusViagem: 0.0000002104733147,

            fatorEmissaoCO2Metro: 4.5,

            valor: ""
        }



        this.handleDistanciaDiariaOnibusMunicipal = this.handleDistanciaDiariaOnibusMunicipal.bind(this);
        this.handleDistanciaDiariaOnibusViagem = this.handleDistanciaDiariaOnibusViagem.bind(this);
        this.handleDistanciaDiariaMetro = this.handleDistanciaDiariaMetro.bind(this);
        
        this.handleQuantidadeDiasDoAnoOnibusMunicipal = this.handleQuantidadeDiasDoAnoOnibusMunicipal.bind(this);
        this.handleQuantidadeDiasDoAnoOnibusViagem = this.handleQuantidadeDiasDoAnoOnibusViagem.bind(this);
        this.handleQuantidadeDiasDoAnoMetro = this.handleQuantidadeDiasDoAnoMetro.bind(this);
        
        this.transportePublicoCalc = this.transportePublicoCalc.bind(this);
    }

    handleDistanciaDiariaOnibusMunicipal(event) {
        this.setState(
            { distanciaDiariaOnibusMunicipal: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transportePublicoCalc() }
        );
    }

    handleDistanciaDiariaOnibusViagem(event) {
        this.setState(
            { distanciaDiariaOnibusViagem: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transportePublicoCalc() }
        );
    }

    handleDistanciaDiariaMetro(event) {
        this.setState(
            { distanciaDiariaMetro: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transportePublicoCalc() }
        );
    }

    handleQuantidadeDiasDoAnoOnibusMunicipal(event) {
        if (event.target.value > 365) {
            alert("Por favor, insira um número de dias no ano válido!")
            this.setState(
                { diasAnoOnibusMunicipal: 0 },
                () => { this.transportePublicoCalc() }
            )
        } else {
            this.setState(
                { diasAnoOnibusMunicipal: event.target.value.replace(",", ".") },
                // Feito aqui para conseguir utilizar o valor atual do state
                () => { this.transportePublicoCalc() }
            );
        }
    }

    handleQuantidadeDiasDoAnoOnibusViagem(event) {
        if (event.target.value > 365) {
            alert("Por favor, insira um número de dias no ano válido!");
            this.setState(
                { diasAnoOnibusViagem: 0 },
                () => { this.transportePublicoCalc() }
            );
        } else {
            this.setState(
                { diasAnoOnibusViagem: event.target.value.replace(",", ".") },
                // Feito aqui para conseguir utilizar o valor atual do state
                () => { this.transportePublicoCalc() }
            );
        }
    }

    handleQuantidadeDiasDoAnoMetro(event) {
        if (event.target.value > 365) {
            alert("Por favor, insira um número de dias no ano válido!");
            this.setState(
                { diasAnoMetro: 0 },
                () => { this.transportePublicoCalc() }
            );
        } else {
            this.setState(
                { diasAnoMetro: event.target.value.replace(",", ".") },
                // Feito aqui para conseguir utilizar o valor atual do state
                () => { this.transportePublicoCalc() }
            );
        }
    }

    transportePublicoCalc() {
        const {
            distanciaDiariaOnibusMunicipal,
            distanciaDiariaOnibusViagem,
            distanciaDiariaMetro,
            diasAnoOnibusMunicipal,
            diasAnoOnibusViagem,
            diasAnoMetro,

            fatorEmissaoCO2FossilOnibusMunicipal,
            fatorEmissaoCH4FossilOnibusMunicipal,
            fatorEmissaoN2OFossilOnibusMunicipal,
            fatorEmissaoCH4BiocombustivelOnibusMunicipal,
            fatorEmissaoN2OBiocombustivelOnibusMunicipal,
            fatorEmissaoCO2FossilOnibusViagem,
            fatorEmissaoCH4FossilOnibusViagem,
            fatorEmissaoN2OFossilOnibusViagem,
            fatorEmissaoCH4BiocombustivelOnibusViagem,
            fatorEmissaoN2OBiocombustivelOnibusViagem,
            fatorEmissaoCO2Metro
        } = this.state;

        //Onibus Municipal
        let emissaoCO2FossilOnibusMunicipal = ((distanciaDiariaOnibusMunicipal * diasAnoOnibusMunicipal * fatorEmissaoCO2FossilOnibusMunicipal) * (1 - 0.10)) / 1000;
        let emissaoCH4FossilOnibusMunicipal = ((distanciaDiariaOnibusMunicipal * diasAnoOnibusMunicipal * fatorEmissaoCH4FossilOnibusMunicipal) * (1 - 0.10)) / 1000;
        let emissaoN2OFossilOnibusMunicipal = ((distanciaDiariaOnibusMunicipal * diasAnoOnibusMunicipal * fatorEmissaoN2OFossilOnibusMunicipal) * (1 - 0.10)) / 1000;
        let emissaoCH4BiocombustivelOnibusMunicipal = ((distanciaDiariaOnibusMunicipal * diasAnoOnibusMunicipal * fatorEmissaoCH4BiocombustivelOnibusMunicipal) * (0.10)) / 1000;
        let emissaoN2OBiocombustivelOnibusMunicipal = ((distanciaDiariaOnibusMunicipal * diasAnoOnibusMunicipal * fatorEmissaoN2OBiocombustivelOnibusMunicipal) * (0.10)) / 1000;
        let emissaoCH4TotalOnibusMunicipal = emissaoCH4FossilOnibusMunicipal + emissaoCH4BiocombustivelOnibusMunicipal;
        let emissaoN2OTotalOnibusMunicipal = emissaoN2OFossilOnibusMunicipal + emissaoN2OBiocombustivelOnibusMunicipal;
        let valorOnibusMunicipal = (1 * emissaoCO2FossilOnibusMunicipal) + (25 * emissaoCH4TotalOnibusMunicipal) + (298 * emissaoN2OTotalOnibusMunicipal);

        //Onibus Viagem
        let emissaoCO2FossilOnibusViagem = ((distanciaDiariaOnibusViagem * diasAnoOnibusViagem * fatorEmissaoCO2FossilOnibusViagem) * (1 - 0.10)) / 1000;
        let emissaoCH4FossilOnibusViagem = ((distanciaDiariaOnibusViagem * diasAnoOnibusViagem * fatorEmissaoCH4FossilOnibusViagem) * (1 - 0.10)) / 1000;
        let emissaoN2OFossilOnibusViagem = ((distanciaDiariaOnibusViagem * diasAnoOnibusViagem * fatorEmissaoN2OFossilOnibusViagem) * (1 - 0.10)) / 1000;
        let emissaoCH4BiocombustivelOnibusViagem = ((distanciaDiariaOnibusViagem * diasAnoOnibusViagem * fatorEmissaoCH4BiocombustivelOnibusViagem) * (0.10)) / 1000;
        let emissaoN2OBiocombustivelOnibusViagem = ((distanciaDiariaOnibusViagem * diasAnoOnibusViagem * fatorEmissaoN2OBiocombustivelOnibusViagem) * (0.10)) / 1000;
        let emissaoCH4TotalOnibusViagem = emissaoCH4FossilOnibusViagem + emissaoCH4BiocombustivelOnibusViagem;
        let emissaoN2OTotalOnibusViagem = emissaoN2OFossilOnibusViagem + emissaoN2OBiocombustivelOnibusViagem;
        let valorOnibusViagem = (1 * emissaoCO2FossilOnibusViagem) + (25 * emissaoCH4TotalOnibusViagem) + (298 * emissaoN2OTotalOnibusViagem);

        //Metro
        let valorMetro = distanciaDiariaMetro * diasAnoMetro * fatorEmissaoCO2Metro / 1000000;

        //Valor total
        let valor = valorOnibusMunicipal + valorOnibusViagem + valorMetro;
        valor = Number.isNaN(parseFloat(valor)) ? 0 : valor;

        this.setState({ valor });
        this.props.valorTransportePublicoCallback(valor);
    }

    render() {
        return (
            <div className="transportePublicoCalc">
                <div className="transportePublico-content">
                    <div className="transportePublico-content-grid">
                        <div className="item1">
                            <h4>Ônibus Municipal</h4>
                        </div>

                        <div className="item2">
                            <label htmlFor="distanciaDiariaOnibusMunicipal">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaOnibusMunicipal} id="distanciaDiariaOnibusMunicipal" placeholder="Km" />
                        </div>

                        <div className="item3">
                            <label htmlFor="quantidadeDiasDoAnoOnibusMunicipal">Quantos dias no <strong>ano</strong> você utiliza o transporte?</label>
                            <input type="text" onChange={this.handleQuantidadeDiasDoAnoOnibusMunicipal} id="quantidadeDiasDoAnoOnibusMunicipal" placeholder="QTD" />
                        </div>

                        <div className="item4">
                            <h4>Ônibus de Viagem</h4>
                        </div>

                        <div className="item5">
                            <label htmlFor="distanciaDiariaOnibusViagem">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaOnibusViagem} id="distanciaDiariaOnibusViagem" placeholder="Km" />
                        </div>

                        <div className="item6">
                            <label htmlFor="quantidadeDiasDoAnoOnibusViagem">Quantos dias no <strong>ano</strong> você utiliza o transporte?</label>
                            <input type="text" onChange={this.handleQuantidadeDiasDoAnoOnibusViagem} id="quantidadeDiasDoAnoOnibusViagem" placeholder="QTD" />
                        </div>

                        <div className="item7">
                            <h4>Metrô</h4>
                        </div>

                        <div className="item8">
                            <label htmlFor="distanciaDiariaMetro">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaMetro} id="distanciaDiariaMetro" placeholder="Km" />
                        </div>

                        <div className="item9">
                            <label htmlFor="quantidadeDiasDoAnoMetro">Quantos dias no <strong>ano</strong> você utiliza o transporte?</label>
                            <input type="text" onChange={this.handleQuantidadeDiasDoAnoMetro} id="quantidadeDiasDoAnoMetro" placeholder="QTD" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransportePublicoCalc;