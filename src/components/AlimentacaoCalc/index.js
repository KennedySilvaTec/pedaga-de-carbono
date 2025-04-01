/**
 * /src/components/AlimentacaoCalc/index.js
 */
import React, { Component } from 'react';

import './style.css';

class AlimentacaoCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            consumoDiarioCarneBovina: 0,
            consumoDiarioCarneSuina: 0,
            consumoDiarioFrango: 0,
            consumoDiarioOvo: 0,
            consumoDiarioLeite: 0,

            fatorEmissaoCarneBovina: 34.58,
            fatorEmissaoCarneSuina: 2.41,
            fatorEmissaoFrango: 0.33,
            fatorEmissaoOvo: 0.8,
            fatorEmissaoLeite: 1.07,

            quantidadeDiasSemanaCarneBovina: 0,
            quantidadeDiasSemanaCarneSuina: 0,
            quantidadeDiasSemanaFrango: 0,
            quantidadeDiasSemanaOvos: 0,
            quantidadeDiasSemanaLeite: 0,

            isVeganoVegetarianoCheckedBox: false,

            valor: "",
        }

        this.handleConsumoDiarioCarneBovina = this.handleConsumoDiarioCarneBovina.bind(this);
        this.handleConsumoDiarioCarneSuina = this.handleConsumoDiarioCarneSuina.bind(this);
        this.handleConsumoDiarioFrango = this.handleConsumoDiarioFrango.bind(this);
        this.handleConsumoDiarioOvo = this.handleConsumoDiarioOvo.bind(this);
        this.handleConsumoDiarioLeite = this.handleConsumoDiarioLeite.bind(this);

        this.handleQuantidadeDiasSemanaCarneBovina = this.handleQuantidadeDiasSemanaCarneBovina.bind(this);
        this.handleQuantidadeDiasSemanaCarneSuina = this.handleQuantidadeDiasSemanaCarneSuina.bind(this);
        this.handleQuantidadeDiasSemanaFrango = this.handleQuantidadeDiasSemanaFrango.bind(this);
        this.handleQuantidadeDiasSemanaOvos = this.handleQuantidadeDiasSemanaOvos.bind(this);
        this.handleQuantidadeDiasSemanaLeite = this.handleQuantidadeDiasSemanaLeite.bind(this);
        
        this.handleClickCheckedBox = this.handleClickCheckedBox.bind(this);

        this.alimentacaoCalc = this.alimentacaoCalc.bind(this);
    }

    handleConsumoDiarioCarneBovina(event) {
        this.setState(
            { consumoDiarioCarneBovina: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleConsumoDiarioCarneSuina(event) {
        this.setState(
            { consumoDiarioCarneSuina: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleConsumoDiarioFrango(event) {
        this.setState(
            { consumoDiarioFrango: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleConsumoDiarioOvo(event) {
        this.setState(
            { consumoDiarioOvo: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleConsumoDiarioLeite(event) {
        this.setState(
            { consumoDiarioLeite: event.target.value.replace(",", ".") },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleQuantidadeDiasSemanaCarneBovina(event) {
        this.setState(
            { quantidadeDiasSemanaCarneBovina: parseFloat(event.target.value) },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleQuantidadeDiasSemanaCarneSuina(event) {
        this.setState(
            { quantidadeDiasSemanaCarneSuina: parseFloat(event.target.value) },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleQuantidadeDiasSemanaFrango(event) {
        this.setState(
            { quantidadeDiasSemanaFrango: parseFloat(event.target.value) },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleQuantidadeDiasSemanaOvos(event) {
        this.setState(
            { quantidadeDiasSemanaOvos: parseFloat(event.target.value) },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }

    handleQuantidadeDiasSemanaLeite(event) {
        this.setState(
            { quantidadeDiasSemanaLeite: parseFloat(event.target.value) },
            // Feito aqui para conseguir utilizar o valor atual do state
            () => { this.alimentacaoCalc() }
        );
    }
    
    handleClickCheckedBox(event) {
        if(event.target.checked) {
            this.setState({ 
                isVeganoVegetarianoCheckedBox: true,
                consumoDiarioCarneBovina: 0,
                consumoDiarioFrango: 0,
                consumoDiarioCarneSuina: 0,
            }, () => { this.alimentacaoCalc() });
            
            document.getElementById('consumoDiarioCarneBovina').disabled = true;
            document.getElementById('consumoDiarioCarneBovina').value = "";
            document.getElementById('quantidadeDiasSemanaCarneBovina').disabled = true;
            document.getElementById('quantidadeDiasSemanaCarneBovina').value = "0";
            document.getElementById('consumoDiarioCarneFrango').disabled = true;
            document.getElementById('consumoDiarioCarneFrango').value = "";
            document.getElementById('quantidadeDiasSemanaFrango').disabled = true;
            document.getElementById('quantidadeDiasSemanaFrango').value = "0";
            document.getElementById('consumoDiarioCarneSuina').disabled = true;
            document.getElementById('consumoDiarioCarneSuina').value = "";
            document.getElementById('quantidadeDiasSemanaCarneSuina').disabled = true;
            document.getElementById('quantidadeDiasSemanaCarneSuina').value = "0";
        } else {
            this.setState(
                { isVeganoVegetarianoCheckedBox: false }, 
                () => { this.alimentacaoCalc() }
            );

            document.getElementById('consumoDiarioCarneBovina').disabled = false;
            document.getElementById('quantidadeDiasSemanaCarneBovina').disabled = false;
            document.getElementById('consumoDiarioCarneFrango').disabled = false;
            document.getElementById('quantidadeDiasSemanaFrango').disabled = false;
            document.getElementById('consumoDiarioCarneSuina').disabled = false;
            document.getElementById('quantidadeDiasSemanaCarneSuina').disabled = false;
        }
    }

    alimentacaoCalc() {
        const {
            consumoDiarioCarneBovina,
            consumoDiarioCarneSuina,
            consumoDiarioFrango,
            consumoDiarioLeite,
            consumoDiarioOvo,

            fatorEmissaoCarneBovina,
            fatorEmissaoCarneSuina,
            fatorEmissaoFrango,
            fatorEmissaoOvo,
            fatorEmissaoLeite,

            quantidadeDiasSemanaCarneBovina,
            quantidadeDiasSemanaCarneSuina,
            quantidadeDiasSemanaFrango,
            quantidadeDiasSemanaOvos,
            quantidadeDiasSemanaLeite
        } = this.state;

        let emissaoCarneBovina = (consumoDiarioCarneBovina / 1000 * fatorEmissaoCarneBovina * (quantidadeDiasSemanaCarneBovina / 7) * 365) / 1000;
        let emissaoCarneSuina = (consumoDiarioCarneSuina / 1000 * fatorEmissaoCarneSuina * (quantidadeDiasSemanaCarneSuina / 7) * 365) / 1000;
        let emissaoFrango = (consumoDiarioFrango / 1000 * fatorEmissaoFrango * (quantidadeDiasSemanaFrango / 7) * 365) / 1000;
        /* O input do ovo recebe a quantidade de unidades de ovo consumida
        porém o calculo é feito utilizando-se a peso, por isso há a conversão
        das unidades em peso, utilizando-se o peso médio de um ovo médio(60g ou 0.06Kg com a casca) */
        let emissaoOvo = ((consumoDiarioOvo * 0.06) * fatorEmissaoOvo * (quantidadeDiasSemanaOvos / 7) * 365) / 1000;
        /* O input do leite recebe a quantidade em ml de leite consumida por dia
        porém o calculo é feito utilizando-se o peso, por isso há a conversão
        dos mls em peso, utilizando-se o peso médio de 1L de leite(1.029 Kg) */
        let emissaoLeite = ((consumoDiarioLeite * 1.029 / 1000) * fatorEmissaoLeite * (quantidadeDiasSemanaLeite / 7) * 365) / 1000;
        
        let valor = emissaoCarneBovina + emissaoCarneSuina + emissaoFrango + emissaoOvo + emissaoLeite;
        valor = Number.isNaN(parseFloat(valor)) ? 0 : valor;
        this.setState({ valor });
        this.props.valorAlimentacaoCallback(valor);
        this.props.valoresInputsCallback(
            this.state.consumoDiarioCarneBovina, 
            this.state.quantidadeDiasSemanaCarneBovina, 
            this.state.consumoDiarioFrango, 
            this.state.quantidadeDiasSemanaFrango, 
            this.state.consumoDiarioCarneSuina, 
            this.state.quantidadeDiasSemanaCarneSuina, 
            this.state.isVeganoVegetarianoCheckedBox
        );
    }
    
    render() {
        return (
            <div className="alimentacao-content">
                <div className="alimentacao-content-grid">
                    <div className="item0">
                        <input type="checkbox" id="vegano-vegetariano" name="vegano-vegetariano" onClick={this.handleClickCheckedBox}/>
                        <label htmlFor="vegano-vegetariano">Sou Vegano(a) ou Vegetariano(a)</label>
                    </div>

                    <div className="item1">
                        <h4>Carne Bovina</h4>
                    </div>

                    <div className="item2">
                        <label htmlFor="consumoDiarioCarneBovina">Nos informe o seu consumo <strong>diário</strong>!</label>
                        <input type="text" onChange={this.handleConsumoDiarioCarneBovina} id="consumoDiarioCarneBovina" placeholder="gramas" />
                    </div>

                    <div className="item3">
                        <label htmlFor="quantidadeDiasSemanaCarneBovina">Quantos dias na semana você consome esse alimento?</label>
                        <select name="quantidadeDiasSemanaCarneBovina" id="quantidadeDiasSemanaCarneBovina" onChange={this.handleQuantidadeDiasSemanaCarneBovina}>
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
                        <h4>Carne Suina</h4>
                    </div>

                    <div className="item5">
                        <label htmlFor="consumoDiarioCarneSuina">Nos informe o seu consumo <strong>diário</strong>!</label>
                        <input type="text" onChange={this.handleConsumoDiarioCarneSuina} id="consumoDiarioCarneSuina" placeholder="gramas" />
                    </div>

                    <div className="item6">
                        <label htmlFor="quantidadeDiasSemanaCarneSuina">Quantos dias na semana você consome esse alimento?</label>
                        <select name="quantidadeDiasSemanaCarneSuina" id="quantidadeDiasSemanaCarneSuina" onChange={this.handleQuantidadeDiasSemanaCarneSuina}>
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
                        <h4>Frango</h4>
                    </div>

                    <div className="item8">
                        <label htmlFor="consumoDiarioCarneFrango">Nos informe o seu consumo <strong>diário</strong>!</label>
                        <input type="text" onChange={this.handleConsumoDiarioFrango} id="consumoDiarioCarneFrango" placeholder="gramas" />
                    </div>

                    <div className="item9">
                        <label htmlFor="quantidadeDiasSemanaFrango">Quantos dias na semana você consome esse alimento?</label>
                        <select name="quantidadeDiasSemanaFrango" id="quantidadeDiasSemanaFrango" onChange={this.handleQuantidadeDiasSemanaFrango}>
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
                        <h4>Ovo</h4>
                    </div>

                    <div className="item11">
                        <label htmlFor="consumoDiarioOvos">Nos informe o seu consumo <strong>diário</strong>!</label>
                        <input type="text" onChange={this.handleConsumoDiarioOvo} id="consumoDiarioOvos" placeholder="unidades" />
                    </div>

                    <div className="item12">
                        <label htmlFor="quantidadeDiasSemanaOvos">Quantos dias na semana você consome esse alimento?</label>
                        <select name="quantidadeDiasSemanaOvos" id="quantidadeDiasSemanaOvos" onChange={this.handleQuantidadeDiasSemanaOvos}>
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
                        <h4>Leite</h4>
                    </div>

                    <div className="item14">
                        <label htmlFor="consumoDiarioLeite">Nos informe o seu consumo <strong>diário</strong>!</label>
                        <input type="text" onChange={this.handleConsumoDiarioLeite} id="consumoDiarioLeite" placeholder="mililitros" />
                    </div>

                    <div className="item15">
                        <label htmlFor="quantidadeDiasSemanaLeite">Quantos dias na semana você consome esse alimento?</label>
                        <select name="quantidadeDiasSemanaLeite" id="quantidadeDiasSemanaLeite" onChange={this.handleQuantidadeDiasSemanaLeite}>
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
        )
    }
}

export default AlimentacaoCalc;