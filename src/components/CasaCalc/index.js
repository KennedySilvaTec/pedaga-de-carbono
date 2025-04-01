/**
 * /src/components/CasaCalc/index.js
 */
import React, { Component } from 'react';

import infoIcon from '../../icons/infoIcon.svg';

import './style.css';

class CasaCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantidadePessoasCasa: 1,
            quantidadePessoasCasaPlaceHolder: "1",

            consumoMensalEnergiaEletrica: 0,
            fatorEmissaoEnergiaEletrica: 0.075,
            valorEnergiaEletrica: "",

            consumoMensalGlp: 0,
            fatorEmissaoGlpCO2: 2930.927472,
            fatorEmissaoGlpCH4: 0.2323674,
            fatorEmissaoGlpN2O: 0.004647348,
            valorGlp: ""
        }
        this.handleConsumoMensalEnergiaEletricaCalc = this.handleConsumoMensalEnergiaEletricaCalc.bind(this);
        this.handleConsumoMensalGlpCalc = this.handleConsumoMensalGlpCalc.bind(this);
        this.handleQuantidadePessoasCasa = this.handleQuantidadePessoasCasa.bind(this);

        this.quantidadePessoasCasaCalc = this.quantidadePessoasCasaCalc.bind(this);
        this.energiaEletricaCalc = this.energiaEletricaCalc.bind(this);
        this.glpCalc = this.glpCalc.bind(this);
    }

    handleQuantidadePessoasCasa(event) {
        console.log(event.target.value)
        if (event.target.value === "") {
            this.props.valorGlpCallback(0);
            this.props.valorEnergiaEletricaCallback(0);
        } else if

            (event.target.value === "0" || event.target.value === 0) {
            event.target.value = 1;
            this.quantidadePessoasCasaCalc();

            alert("O número de moradores dever ser maior que 0!");
        } else {
            this.setState(
                { quantidadePessoasCasa: event.target.value },
                () => { this.quantidadePessoasCasaCalc() }
            );
        }
    }


    handleConsumoMensalEnergiaEletricaCalc(event) {
        this.setState(
            { consumoMensalEnergiaEletrica: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.energiaEletricaCalc() }
        );
    }

    handleConsumoMensalGlpCalc(event) {
        this.setState(
            { consumoMensalGlp: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.glpCalc() }
        );
    }

    energiaEletricaCalc() {
        const { consumoMensalEnergiaEletrica, fatorEmissaoEnergiaEletrica, quantidadePessoasCasa } = this.state;
        /* O input do energia elétrica está em KWh consumida por mes
        porém o calculo é feito utilizando-se MWh, por isso há a conversão */
        let valorEnergiaEletrica = ((consumoMensalEnergiaEletrica / 1000) * fatorEmissaoEnergiaEletrica * 12) / quantidadePessoasCasa;

        valorEnergiaEletrica = Number.isNaN(parseFloat(valorEnergiaEletrica)) ? 0 : valorEnergiaEletrica;
        this.setState({ valorEnergiaEletrica });
        this.props.valorEnergiaEletricaCallback(valorEnergiaEletrica);
    }

    glpCalc() {
        const { consumoMensalGlp, fatorEmissaoGlpCO2, fatorEmissaoGlpCH4, fatorEmissaoGlpN2O, quantidadePessoasCasa } = this.state;
        let valorGlp = ((1 * (((consumoMensalGlp * 13) * 12 / 1000) * (fatorEmissaoGlpCO2 / 1000)))
            + (25 * (((consumoMensalGlp * 13) * 12 / 1000) * (fatorEmissaoGlpCH4 / 1000)))
            + (298 * (((consumoMensalGlp * 13) * 12 / 1000) * (fatorEmissaoGlpN2O / 1000)))) / quantidadePessoasCasa;

        valorGlp = Number.isNaN(parseFloat(valorGlp)) ? 0 : valorGlp;
        this.setState({ valorGlp });
        this.props.valorGlpCallback(valorGlp);
    }

    quantidadePessoasCasaCalc() {
        this.energiaEletricaCalc();
        this.glpCalc();
    }

    render() {
        return (
            <div className="grid">
                <div className="item2">
                    <h4>Quantidade de moradores</h4>
                    <label htmlFor="quantidadePessoasCasa">Quantas pessoas moram na sua casa?</label>
                    <input type="text" onChange={this.handleQuantidadePessoasCasa} id="quantidadePessoasCasa" placeholder={this.state.quantidadePessoasCasaPlaceHolder} />
                </div>

                <div className="item3">
                    <div className="energiaEletricaCalc">
                        <div className="input-energia">
                            <h4>Energia Elétrica</h4>
                            <label htmlFor="consumoMensalEnergiaEletrica">Qual é o seu consumo <strong>mensal</strong>?</label>
                            <input type="text" onChange={this.handleConsumoMensalEnergiaEletricaCalc} id="consumoMensalEnergiaEletrica" placeholder="KWh" />
                        </div>
                        <div className="info-energia-img">
                            <img className="icons" src={infoIcon} alt="Icone da Info"></img>
                            <div className="info-energia">
                                <p>Você pode encontrar essa informação na sua conta de luz!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item4">
                    <div className="glpCalc">
                        <div className="input-glp">
                            <h4>Gás de cozinha (GLP)</h4>
                            <label htmlFor="consumoMensalGlp">Qual é o seu consumo <strong>mensal</strong>? (Botijões - 13kg)</label>
                            <input type="text" onChange={this.handleConsumoMensalGlpCalc} id="consumoMensalGlp" placeholder="QTD" />
                        </div>
                        <div className="info-glp-img">
                            <img className="icons" src={infoIcon} alt="Icone da Info"></img>
                            <div className="info-glp">
                                <p>Em média, uma pessoa utiliza meio botijão de gás por mês!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CasaCalc;