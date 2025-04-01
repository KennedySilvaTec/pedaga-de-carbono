/**
 * /src/components/TransporteParticularCalc/index.js
 */
// Foram utilizados fatores de emissão de automoveis e motos flex à gasolina
import React, { Component } from 'react';

import './style.css';

class TransporteParticularCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            distanciaDiariaCarroGasolina: 0,
            distanciaDiariaCarroEtanol: 0,
            distanciaDiariaMotoGasolina: 0,
            distanciaDiariaMotoEtanol: 0,
            distanciaDiariaBicicleta: 0,

            diasSemanaCarroGasolina: 0,
            diasSemanaCarroEtanol: 0,
            diasSemanaMotoGasolina: 0,
            diasSemanaMotoEtanol: 0,
            diasSemanaBicicleta: 0,

            consumoMedioCarroGasolina: 12.2,
            consumoMedioCarroEtanol: 8.5,
            consumoMedioMotoGasolina: 43.2,
            consumoMedioMotoEtanol: 29.3,

            fatorEmissaoCO2CarroGasolina: 2.212,
            fatorEmissaoCH4CarroGasolina: 0.0001708,
            fatorEmissaoN2OCarroGasolina: 0.0002318,
            fatorEmissaoCO2CarroEtanol: 0,
            fatorEmissaoCH4CarroEtanol: 0.000238,
            fatorEmissaoN2OCarroEtanol: 0.0001445,

            fatorEmissaoCO2MotoGasolina: 2.212,
            fatorEmissaoCH4MotoGasolina: 0.000864,
            fatorEmissaoN2OMotoGasolina: 0.0000864,
            fatorEmissaoCO2MotoEtanol: 0,
            fatorEmissaoCH4MotoEtanol: 0.000586,
            fatorEmissaoN2OMotoEtanol: 0.0000586,

            valor: ""
        }

        this.handleDistanciaDiariaCarroGasolina = this.handleDistanciaDiariaCarroGasolina.bind(this);
        this.handleDistanciaDiariaCarroEtanol = this.handleDistanciaDiariaCarroEtanol.bind(this);
        this.handleDistanciaDiariaMotoGasolina = this.handleDistanciaDiariaMotoGasolina.bind(this);
        this.handleDistanciaDiariaMotoEtanol = this.handleDistanciaDiariaMotoEtanol.bind(this);
        this.handleDistanciaDiariaBicicleta = this.handleDistanciaDiariaBicicleta.bind(this);

        this.handleQuantidadeDiasSemanaCarroGasolina = this.handleQuantidadeDiasSemanaCarroGasolina.bind(this);
        this.handleQuantidadeDiasSemanaCarroEtanol = this.handleQuantidadeDiasSemanaCarroEtanol.bind(this);
        this.handleQuantidadeDiasSemanaMotoGasolina = this.handleQuantidadeDiasSemanaMotoGasolina.bind(this);
        this.handleQuantidadeDiasSemanaMotoEtanol = this.handleQuantidadeDiasSemanaMotoEtanol.bind(this);
        this.handleQuantidadeDiasSemanaBicicleta = this.handleQuantidadeDiasSemanaBicicleta.bind(this);

        this.transporteParticularCalc = this.transporteParticularCalc.bind(this);
    }

    handleDistanciaDiariaCarroGasolina(event) {
        this.setState(
            { distanciaDiariaCarroGasolina: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleDistanciaDiariaCarroEtanol(event) {
        this.setState(
            { distanciaDiariaCarroEtanol: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleDistanciaDiariaMotoGasolina(event) {
        this.setState(
            { distanciaDiariaMotoGasolina: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleDistanciaDiariaMotoEtanol(event) {
        this.setState(
            { distanciaDiariaMotoEtanol: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleDistanciaDiariaBicicleta(event) {
        this.setState(
            { distanciaDiariaBicicleta: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleQuantidadeDiasSemanaCarroGasolina(event) {
        this.setState(
            { diasSemanaCarroGasolina: event.target.value },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleQuantidadeDiasSemanaCarroEtanol(event) {
        this.setState(
            { diasSemanaCarroEtanol: event.target.value },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleQuantidadeDiasSemanaMotoGasolina(event) {
        this.setState(
            { diasSemanaMotoGasolina: event.target.value },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleQuantidadeDiasSemanaMotoEtanol(event) {
        this.setState(
            { diasSemanaMotoEtanol: event.target.value },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    handleQuantidadeDiasSemanaBicicleta(event) {
        this.setState(
            { diasSemanaBicicleta: event.target.value },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.transporteParticularCalc() }
        );
    }

    transporteParticularCalc() {
        const {
            distanciaDiariaCarroGasolina,
            distanciaDiariaCarroEtanol,
            distanciaDiariaMotoGasolina,
            distanciaDiariaMotoEtanol,
            distanciaDiariaBicicleta,
            diasSemanaCarroGasolina,
            diasSemanaCarroEtanol,
            diasSemanaMotoGasolina,
            diasSemanaMotoEtanol,
            diasSemanaBicicleta,
            consumoMedioCarroGasolina,
            consumoMedioCarroEtanol,
            consumoMedioMotoGasolina,
            consumoMedioMotoEtanol,

            fatorEmissaoCO2CarroGasolina,
            fatorEmissaoCH4CarroGasolina,
            fatorEmissaoN2OCarroGasolina,
            fatorEmissaoCO2CarroEtanol,
            fatorEmissaoCH4CarroEtanol,
            fatorEmissaoN2OCarroEtanol,
            fatorEmissaoCO2MotoGasolina,
            fatorEmissaoCH4MotoGasolina,
            fatorEmissaoN2OMotoGasolina,
            fatorEmissaoCO2MotoEtanol,
            fatorEmissaoCH4MotoEtanol,
            fatorEmissaoN2OMotoEtanol,
        } = this.state;

        let consumoCombustivelTotalCarroGasolina = distanciaDiariaCarroGasolina * (diasSemanaCarroGasolina / 7 * 365) / consumoMedioCarroGasolina;
        let consumoCombustivelFossilCarroGasolina = consumoCombustivelTotalCarroGasolina * (1 - 0.27);
        let valorCarroGasolina = (1 * (consumoCombustivelFossilCarroGasolina * fatorEmissaoCO2CarroGasolina / 1000))
            + (25 * (consumoCombustivelTotalCarroGasolina * fatorEmissaoCH4CarroGasolina / 1000))
            + (298 * (consumoCombustivelTotalCarroGasolina * fatorEmissaoN2OCarroGasolina / 1000));

        let consumoCombustivelTotalCarroEtanol = distanciaDiariaCarroEtanol * (diasSemanaCarroEtanol / 7 * 365) / consumoMedioCarroEtanol;
        let consumoCombustivelFossilCarroEtanol = consumoCombustivelTotalCarroEtanol * (1 - 0.27);
        let valorCarroEtanol = (1 * (consumoCombustivelFossilCarroEtanol * fatorEmissaoCO2CarroEtanol / 1000))
            + (25 * (consumoCombustivelTotalCarroEtanol * fatorEmissaoCH4CarroEtanol / 1000))
            + (298 * (consumoCombustivelTotalCarroEtanol * fatorEmissaoN2OCarroEtanol / 1000));

        let consumoCombustivelTotalMotoGasolina = distanciaDiariaMotoGasolina * (diasSemanaMotoGasolina / 7 * 365) / consumoMedioMotoGasolina;
        let consumoCombustivelFossilMotoGasolina = consumoCombustivelTotalMotoGasolina * (1 - 0.27);
        let valorMotoGasolina = (1 * (consumoCombustivelFossilMotoGasolina * fatorEmissaoCO2MotoGasolina / 1000))
            + (25 * (consumoCombustivelTotalMotoGasolina * fatorEmissaoCH4MotoGasolina / 1000))
            + (298 * (consumoCombustivelTotalMotoGasolina * fatorEmissaoN2OMotoGasolina / 1000));

        let consumoCombustivelTotalMotoEtanol = distanciaDiariaMotoEtanol * (diasSemanaMotoEtanol / 7 * 365) / consumoMedioMotoEtanol;
        let consumoCombustivelFossilMotoEtanol = consumoCombustivelTotalMotoEtanol * (1 - 0.27);
        let valorMotoEtanol = (1 * (consumoCombustivelFossilMotoEtanol * fatorEmissaoCO2MotoEtanol / 1000))
            + (25 * (consumoCombustivelTotalMotoEtanol * fatorEmissaoCH4MotoEtanol / 1000))
            + (298 * (consumoCombustivelTotalMotoEtanol * fatorEmissaoN2OMotoEtanol / 1000));

        const valorBicicleta = (diasSemanaBicicleta / 7 * 365) * distanciaDiariaBicicleta * 0;

        let flagIsGasolina = false;
        if (valorCarroGasolina > 0 || valorMotoGasolina > 0) {
            flagIsGasolina = true;
        }

        let flagIsBicicleta = false;
        if (distanciaDiariaBicicleta > 0 && diasSemanaBicicleta > 0) {
            flagIsBicicleta = true;
        }

        let flagIsEtanol = false;
        if (valorCarroEtanol > 0 || valorMotoEtanol > 0) {
            flagIsEtanol = true;
        }

        let valor = valorCarroGasolina + valorCarroEtanol + valorMotoGasolina + valorMotoEtanol + valorBicicleta;
        valor = Number.isNaN(parseFloat(valor)) ? 0 : valor;

        this.setState({ valor });
        this.props.valorTransporteParticularCallback(valor);
        this.props.setIsGasolinaIsEtanolIsBicicletaVeiculoParticularCallback(flagIsGasolina, flagIsEtanol, flagIsBicicleta);
    }

    render() {
        return (
            <div className="transporteParticularCalc">
                <div className="transporteParticular-content">
                    <div className="transporteParticular-content-grid">
                        <div className="item1">
                            <h4>Carro a gasolina</h4>
                        </div>

                        <div className="item2">
                            <label htmlFor="distanciaDiariaCarroGasolina">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaCarroGasolina} id="distanciaDiariaCarroGasolina" placeholder="Km" />
                        </div>

                        <div className="item3">
                            <label htmlFor="quantidadeDiasSemanaCarroGasolina">Quantos dias na semana você utiliza o veículo?</label>
                            <select name="quantidadeDiasSemanaCarroGasolina" id="quantidadeDiasSemanaCarroGasolina" onChange={this.handleQuantidadeDiasSemanaCarroGasolina}>
                                <option value="0">QTD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>

                        <div className="item4">
                            <h4>Carro a etanol</h4>
                        </div>

                        <div className="item5">
                            <label htmlFor="distanciaDiariaCarroEtanol">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaCarroEtanol} id="distanciaDiariaCarroEtanol" placeholder="Km" />
                        </div>

                        <div className="item6">
                            <label htmlFor="quantidadeDiasSemanaCarroEtanol">Quantos dias na semana você utiliza o veículo?</label>
                            <select name="quantidadeDiasSemanaCarroEtanol" id="quantidadeDiasSemanaCarroEtanol" onChange={this.handleQuantidadeDiasSemanaCarroEtanol}>
                                <option value="0">QTD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>

                        <div className="item7">
                            <h4>Moto a Gasolina</h4>
                        </div>

                        <div className="item8">
                            <label htmlFor="distanciaDiariaMotoGasolina">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaMotoGasolina} id="distanciaDiariaMotoGasolina" placeholder="Km" />
                        </div>

                        <div className="item9">
                            <label htmlFor="quantidadeDiasSemanaMotoGasolina">Quantos dias na semana você utiliza o veículo?</label>
                            <select name="quantidadeDiasSemanaMotoGasolina" id="quantidadeDiasSemanaMotoGasolina" onChange={this.handleQuantidadeDiasSemanaMotoGasolina}>
                                <option value="0">QTD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>

                        <div className="item10">
                            <h4>Moto a Etanol</h4>
                        </div>

                        <div className="item11">
                            <label htmlFor="distanciaDiariaMotoEtanol">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaMotoEtanol} id="distanciaDiariaMotoEtanol" placeholder="Km" />
                        </div>

                        <div className="item12">
                            <label htmlFor="quantidadeDiasSemanaMotoEtanol">Quantos dias na semana você utiliza o veículo?</label>
                            <select name="quantidadeDiasSemanaMotoEtanol" id="quantidadeDiasSemanaMotoEtanol" onChange={this.handleQuantidadeDiasSemanaMotoEtanol}>
                                <option value="0">QTD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>

                        <div className="item13">
                            <h4>Bicicleta</h4>
                        </div>

                        <div className="item14">
                            <label htmlFor="distanciaDiariaBicicleta">Quantos quilômetros você percorre por <strong>dia</strong>?</label>
                            <input type="text" onChange={this.handleDistanciaDiariaBicicleta} id="distanciaDiariaBicicleta" placeholder="Km" />
                        </div>

                        <div className="item15">
                            <label htmlFor="quantidadeDiasSemanaBicicleta">Quantos dias na semana você utiliza o veículo?</label>
                            <select name="quantidadeDiasSemanaBicicleta" id="quantidadeDiasSemanaBicicleta" onChange={this.handleQuantidadeDiasSemanaBicicleta}>
                                <option value="0">QTD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransporteParticularCalc;