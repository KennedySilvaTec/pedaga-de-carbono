/**
 * /src/pages/Calculos/index.js
 */
import React, { Component } from 'react';

import AlimentacaoCalc from '../../components/AlimentacaoCalc';
import DescarteLixoCalc from '../../components/DescarteLixoCalc';
import TransporteAereoCalc from '../../components/TransporteAereoCalc';
import TransporteParticularCalc from '../../components/TransporteParticularCalc';
import TransportePublicoCalc from '../../components/TransportePublicoCalc';
import CasaCalc from '../../components/CasaCalc';

import alimentacaoIcon from '../../icons/alimentacaoIcon.svg';
import casaIcon from '../../icons/casaIcon.svg';
import descarteLixoIcon from '../../icons/descarteLixoIcon.svg';
import setaIcon from '../../icons/setaIcon.svg';
import transporteAereoIcon from '../../icons/transporteAereoIcon.svg';
import transporteParticularIcon from '../../icons/transporteParticularIcon.svg';
import transportePublicoIcon from '../../icons/transportePublicoIcon.svg';
import dicasIcon from '../../icons/dicasIcon.svg';
import arvoreIcon from '../../icons/arvoreIcon.svg';
import infoIcon from '../../icons/infoIcon.svg';
import compensacaoArvoresIcon from '../../icons/compensacaoArvoresIcon.svg';

import dicasEnergiaImage from '../../images/dicasEnergiaImage.png';
import dicasGasImage from '../../images/dicasGasImage.png';
import dicasAlimentacaoImage from '../../images/dicasAlimentacaoImage.png';
import dicasLixoImage from '../../images/dicasLixoImage.png';
import dicasTransporteImage from '../../images/dicasTransporteImage.png';
import habitoImage from '../../images/habitoImage.png';

import './style.css';

class Calculos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valorEnergiaEletrica: 0,
            valorGlp: 0,
            valorAlimentacao: 0,
            valorTransporteAereo: 0,
            valorTransporteParticular: 0,
            valorTransportePublico: 0,
            valorDescarteLixo: 0,

            valorCarneBovina: 0,
            valorCarneFrango: 0,
            valorCarneSuina: 0,
            quantidadeDiasSemanaCarneBovina: 0,
            quantidadeDiasSemanaCarneFrango: 0,
            quantidadeDiasSemanaCarneSuina: 0,
            isVeganoVegetarianoCheckedBox: false,

            setaAlimentacao: false,
            setaCasa: false,
            setaTransporteAereo: false,
            setaTransporteParticular: false,
            setaTransportePublico: false,
            setaDescarteLixo: false,

            casaStyle: "casa",
            alimentacaoStyle: "alimentacao",
            transporteAereoStyle: "transporteAereo",
            transporteParticularStyle: "transporteParticular",
            transportePublicoStyle: "transportePublico",
            descarteLixoStyle: "descarteLixo",

            emissaoTotal: 0,
            quantidadePessoasCasa: 1,
            showElementDicas: false,
            showElementArvores: false,

            arvores: 0,

            flagIsGasolina: false,
            flagIsEtanol: false,
            flagIsBicicleta: false,
        }

        this.setValorEnergiaEletricaState = this.setValorEnergiaEletricaState.bind(this);
        this.setValorGlpState = this.setValorGlpState.bind(this);
        this.setValorAlimentacaoState = this.setValorAlimentacaoState.bind(this);
        this.setValoresInputsAlimentacaoState = this.setValoresInputsAlimentacaoState.bind(this);
        this.setValorTransporteAereoState = this.setValorTransporteAereoState.bind(this);
        this.setValorTransporteParticularState = this.setValorTransporteParticularState.bind(this);
        this.setValorTransportePublicoState = this.setValorTransportePublicoState.bind(this);
        this.setValorDescarteLixoState = this.setValorDescarteLixoState.bind(this);
        this.setIsGasolinaIsEtanolIsBicicletaVeiculoParticularCallback = this.setIsGasolinaIsEtanolIsBicicletaVeiculoParticularCallback.bind(this);

        this.toggleDropdownAlimentacao = this.toggleDropdownAlimentacao.bind(this);
        this.toggleDropdownCasa = this.toggleDropdownCasa.bind(this);
        this.toggleDropdownTransporteAereo = this.toggleDropdownTransporteAereo.bind(this);
        this.toggleDropdownTransporteParticular = this.toggleDropdownTransporteParticular.bind(this);
        this.toggleDropdownTransportePublico = this.toggleDropdownTransportePublico.bind(this);
        this.toggleDropdownDescarteLixo = this.toggleDropdownDescarteLixo.bind(this);

        this.renderDropdownElementAlimentacao = this.renderDropdownElementAlimentacao.bind(this);
        this.renderDropdownElementCasa = this.renderDropdownElementCasa.bind(this);
        this.renderDropdownElementTransporteAereo = this.renderDropdownElementTransporteAereo.bind(this);
        this.renderDropdownElementTransporteParticular = this.renderDropdownElementTransporteParticular.bind(this);
        this.renderDropdownElementTransportePublico = this.renderDropdownElementTransportePublico.bind(this);
        this.renderDropdownElementDescarteLixo = this.renderDropdownElementDescarteLixo.bind(this);
        this.renderShowElementDicas = this.renderShowElementDicas.bind(this);
        this.renderShowElementArvores = this.renderShowElementArvores.bind(this);
        this.renderShowElementHabito = this.renderShowElementHabito.bind(this);

        this.clickDicas = this.clickDicas.bind(this);
        this.clickToTop = this.clickToTop.bind(this);

        this.emissaoTotal = this.emissaoTotal.bind(this);
    }

    toggleDropdownAlimentacao = (e) => {
        this.setState(prevState => ({ setaAlimentacao: !prevState.setaAlimentacao }))
        if (this.state.alimentacaoStyle === "alimentacao") {
            this.setState({ alimentacaoStyle: "alimentacao open" })
        } else {
            this.setState({ alimentacaoStyle: "alimentacao" })
        }
    }

    toggleDropdownCasa = (e) => {
        this.setState(prevState => ({ setaCasa: !prevState.setaCasa }))
        if (this.state.casaStyle === "casa") {
            this.setState({ casaStyle: "casa open" })
        } else {
            this.setState({ casaStyle: "casa" })
        }
    }

    toggleDropdownTransporteAereo = (e) => {
        this.setState(prevState => ({ setaTransporteAereo: !prevState.setaTransporteAereo }))
        if (this.state.transporteAereoStyle === "transporteAereo") {
            this.setState({ transporteAereoStyle: "transporteAereo open" })
        } else {
            this.setState({ transporteAereoStyle: "transporteAereo" })
        }
    }

    toggleDropdownTransporteParticular = (e) => {
        this.setState(prevState => ({ setaTransporteParticular: !prevState.setaTransporteParticular }))
        if (this.state.transporteParticularStyle === "transporteParticular") {
            this.setState({ transporteParticularStyle: "transporteParticular open" })
        } else {
            this.setState({ transporteParticularStyle: "transporteParticular" })
        }
    }

    toggleDropdownTransportePublico = (e) => {
        this.setState(prevState => ({ setaTransportePublico: !prevState.setaTransportePublico }))
        if (this.state.transportePublicoStyle === "transportePublico") {
            this.setState({ transportePublicoStyle: "transportePublico open" })
        } else {
            this.setState({ transportePublicoStyle: "transportePublico" })
        }
    }

    toggleDropdownDescarteLixo = (e) => {
        this.setState(prevState => ({ setaDescarteLixo: !prevState.setaDescarteLixo }))
        if (this.state.descarteLixoStyle === "descarteLixo") {
            this.setState({ descarteLixoStyle: "descarteLixo open" })
        } else {
            this.setState({ descarteLixoStyle: "descarteLixo" })
        }
    }

    setValorEnergiaEletricaState(valorEnergiaEletrica) {
        this.setState({
            valorEnergiaEletrica: valorEnergiaEletrica
        }, () => { this.emissaoTotal() })
    }

    setValorGlpState(valorGlp) {
        this.setState({
            valorGlp: valorGlp
        }, () => { this.emissaoTotal() })
    }

    setValorAlimentacaoState(valorAlimentacao) {
        this.setState({
            valorAlimentacao
        }, () => { this.emissaoTotal() })
    }

    setValoresInputsAlimentacaoState(valorCarneBovina, quantidadeDiasSemanaCarneBovina, valorCarneFrango, quantidadeDiasSemanaCarneFrango, valorCarneSuina, quantidadeDiasSemanaCarneSuina, isVeganoVegetarianoCheckedBox) {
        this.setState({
            valorCarneBovina,
            quantidadeDiasSemanaCarneBovina,
            valorCarneFrango,
            quantidadeDiasSemanaCarneFrango,
            valorCarneSuina,
            quantidadeDiasSemanaCarneSuina,
            isVeganoVegetarianoCheckedBox
        })
    }

    setValorTransporteAereoState(valorTransporteAereo) {
        this.setState({
            valorTransporteAereo,
        }, () => { this.emissaoTotal() })
    }

    setValorTransporteParticularState(valorTransporteParticular) {
        this.setState({
            valorTransporteParticular
        }, () => { this.emissaoTotal() })
    }

    setIsGasolinaIsEtanolIsBicicletaVeiculoParticularCallback(flagIsGasolina, flagIsEtanol, flagIsBicicleta) {
        this.setState({
            flagIsGasolina,
            flagIsEtanol,
            flagIsBicicleta,
        })
    }


    setValorTransportePublicoState(valorTransportePublico) {
        this.setState({
            valorTransportePublico
        }, () => { this.emissaoTotal() })
    }

    setValorDescarteLixoState(valorDescarteLixo) {
        this.setState({
            valorDescarteLixo,
        }, () => { this.emissaoTotal() })
    }

    emissaoTotal() {
        const { valorEnergiaEletrica, valorGlp, valorAlimentacao, valorTransporteAereo, valorTransporteParticular, valorTransportePublico, valorDescarteLixo } = this.state;

        let emissaoTotal = valorEnergiaEletrica + valorGlp + valorAlimentacao + valorTransporteAereo + valorTransporteParticular + valorTransportePublico + valorDescarteLixo;

        // Pega a emissao total em tCO2eq, divide pela quantidade de carbono estocado por uma arvore na Amazônia e kgCO2eq
        // e multiplica por 1000 para conversão correta do resultado
        let arvores = emissaoTotal / 222 * 1000

        emissaoTotal = Number.isNaN(parseFloat(emissaoTotal)) ? 0 : emissaoTotal;
        this.setState({
            arvores,
            emissaoTotal,
        })
    }

    clickToTop() {
        window.scrollTo(0, 0);
    }

    clickDicas() {
        this.setState({
            showElementDicas: true,
        })
    }

    renderDropdownElementAlimentacao() {
        return (
            <div className={this.state.alimentacaoStyle}>
                <AlimentacaoCalc valorAlimentacaoCallback={this.setValorAlimentacaoState} valoresInputsCallback={this.setValoresInputsAlimentacaoState} />
                <h3>Resultado Parcial</h3>
                <div className="result">
                    {
                        <p>Sua emissão anual de GEE relacionada a Alimentação é <strong>{parseFloat(this.state.valorAlimentacao).toFixed(2)}</strong> tCO2eq</p>
                    }
                </div>
            </div>
        )
    }

    renderDropdownElementCasa() {
        return (
            <div className={this.state.casaStyle}>
                <CasaCalc valorEnergiaEletricaCallback={this.setValorEnergiaEletricaState} valorGlpCallback={this.setValorGlpState} />
                <h3>Resultado Parcial</h3>
                <div className="result">
                    {
                        <p>Sua emissão anual de GEE relacionada a Energia Elétrica é <strong>{parseFloat(this.state.valorEnergiaEletrica).toFixed(2)}</strong> tCO2eq</p>
                    }
                    {
                        <p>Sua emissão anual de GEE relacionada a GLP é <strong>{parseFloat(this.state.valorGlp).toFixed(2)}</strong> tCO2eq</p>
                    }
                </div>
            </div>
        )
    }


    renderDropdownElementTransporteAereo() {
        return (
            <div className={this.state.transporteAereoStyle}>
                <TransporteAereoCalc valorTransporteAereoCallback={this.setValorTransporteAereoState} />
                <h3>Resultado Parcial</h3>
                <div className="result">
                    {
                        <p>Sua emissão anual de GEE relacionada a Transporte Aéreo é <strong>{parseFloat(this.state.valorTransporteAereo).toFixed(2)}</strong> tCO2eq</p>
                    }
                </div>
            </div>
        )
    }

    renderDropdownElementTransporteParticular() {
        return (
            <div className={this.state.transporteParticularStyle}>
                <TransporteParticularCalc valorTransporteParticularCallback={this.setValorTransporteParticularState} setIsGasolinaIsEtanolIsBicicletaVeiculoParticularCallback={this.setIsGasolinaIsEtanolIsBicicletaVeiculoParticularCallback} />
                <h3>Resultado Parcial</h3>
                <div className="result">
                    {
                        <p>Sua emissão anual de GEE relacionada a Transporte Particular é <strong>{parseFloat(this.state.valorTransporteParticular).toFixed(2)}</strong> tCO2eq</p>
                    }
                </div>
            </div>
        )
    }

    renderDropdownElementTransportePublico() {
        return (
            <div className={this.state.transportePublicoStyle}>
                <TransportePublicoCalc valorTransportePublicoCallback={this.setValorTransportePublicoState} />
                <h3>Resultado Parcial</h3>
                <div className="result">
                    {
                        <p>Sua emissão anual de GEE relacionada a Transporte Público é <strong>{parseFloat(this.state.valorTransportePublico).toFixed(2)}</strong> tCO2eq</p>
                    }
                </div>
            </div>

        )
    }

    renderDropdownElementDescarteLixo() {
        return (
            <div className={this.state.descarteLixoStyle}>
                <DescarteLixoCalc valorDescarteLixoCallback={this.setValorDescarteLixoState} />
                <h3>Resultado Parcial</h3>
                <div className="result">
                    {
                        <p>Sua emissão anual de GEE relacionada a Descarte de Lixo é <strong>{parseFloat(this.state.valorDescarteLixo).toFixed(2)}</strong> tCO2eq</p>
                    }
                </div>
            </div>
        )
    }

    renderShowElementDicas() {
        return (
            <div id="dicas">
                <div className="component-header">
                    <img className="icons" src={dicasIcon} alt="Icone Dicas"></img>
                    <h2>Dicas</h2>
                </div>
                <div className="subtitle">
                    <p>Conheça algumas práticas que podem fazer com que sua pegada de carbono diminua!</p>
                </div>
                {/* Casa */}
                {
                    this.state.valorEnergiaEletrica > 0 &&
                    <div className="dicas-content">
                        <h3>Energia Elétrica</h3>
                        <img className="dicasEnergiaImage" src={dicasEnergiaImage} alt="Imagem Dicas Energia"></img>
                        <ul>
                            <li>Prefira utilizar lâmpadas de LED, pois elas consomem muito menos energia do que as incandescentes, além disso, sua durabilidade é maior.</li>
                            <li>Invista em eletrodomésticos que possuam maior eficiência, conforme classificação do INMETRO na etiqueta de eficiência de energia que acompanha o produto.</li>
                            <li>Procure deixar as luzes dos ambientes que não estão sendo utilizados apagadas.</li>
                            <li>Tente reduzir seu tempo de banho.</li>
                        </ul>
                        <h4>Fontes</h4>
                        <p><a target="blank" href="http://www.neomondo.org.br/2017/12/13/como-diminuir-sua-pegada-de-carbono-de-forma-simples-e-economica/">NEO MONDO</a></p>
                        <p><a target="blank" href="https://www.consumidorpositivo.com.br/educacao-financeira/7-atitudes-que-vao-diminuir-sua-conta-de-energia-eletrica/">Boa Vista</a></p>
                    </div>
                }
                {/* GLP */}
                {
                    this.state.valorGlp > 0 &&
                    <div className="dicas-content">
                        <h3>Gás Liquefeito do Petróleo (GLP)</h3>
                        <img className="dicasGasImage" src={dicasGasImage} alt="Imagem Dicas Gas"></img>
                        <ul>
                            <li>Bocas maiores gastam mais gás, assim utilize-as somente quando estiver utilizando panelas maiores.</li>
                            <li>Procure não utilizar o fogão para descongelamentos, pois isso pode aumentar seu consumo de gás consideravelmente.</li>
                            <li>Mantenha seu fogão limpo, pois bocas entupidas podem aumentar o desperdício de gás.</li>
                            <li>Certifique-se de que seu botijão não esteja vazando.</li>
                        </ul>
                        <h4>Fonte</h4>
                        <p><a target="blank" href="https://www.economizare.com/consumo-de-gas_-como-evitar-desperdicio/">ECONOMIZARE</a></p>
                    </div>
                }
                {/* Alimentação */}
                {
                    ((this.state.valorAlimentacao > 0) || (this.state.isVeganoVegetarianoCheckedBox)) &&
                    <div className="dicas-content">
                        <h3>Alimentação</h3>
                        <img className="dicasAlimentacaoImage" src={dicasAlimentacaoImage} alt="Imagem Dicas Alimentacao"></img>
                        <ul>
                            <li>Se atente ao desperdício e procure evitá-lo ao máximo.</li>
                            <li>Dê preferência à alimentos cultivados localmente.</li>
                            <li>Evite alimentos ultraprocessados, além dos malefícios que tais alimentos podem causar a sua saúde, as técnicas empregadas no seu processo de produção trazem impactos negativos para o meio ambiente.</li>
                            {
                                (this.state.valorCarneBovina * this.state.quantidadeDiasSemanaCarneBovina >
                                    this.state.valorCarneFrango * this.state.quantidadeDiasSemanaCarneFrango
                                    + this.state.valorCarneSuina * this.state.quantidadeDiasSemanaCarneSuina)
                                &&

                                <li>Percebemos que seu consumo de carne bovina está mais alto que o de frango e/ou carne suina!
                                Procure equilibrar este consumo, pois no Brasil o fator de emissão de GEE relacionado à carne bovina é muito mais alto do que o relacionado às carnes de frango
                                    e suina, impactando consideravelmente a sua pegada de carbono.</li>
                            }
                            {
                                (this.state.isVeganoVegetarianoCheckedBox) &&
                                <li>Vimos aqui que você é Vegano(a) ou Vegetariano(a). Dietas com consumo menor ou nulo de alimentos de origem animal podem reduzir a sua pegada significativamente! Parabéns, você
                                está no caminho para ajudar o planeta!
                                </li>
                            }
                        </ul>
                        <h4>Fontes</h4>
                        <p><a target="blank" href="https://www.economizare.com/consumo-de-gas_-como-evitar-desperdicio/">ECONOMIZARE</a></p>
                        <p><a target="blank" href="https://valorinveste.globo.com/mercados/brasil-e-politica/noticia/2019/09/23/adocao-de-dieta-vegana-reduziria-ate-70percent-dos-gases-de-efeito-estufa-no-brasil.ghtml">Valor Investe | Globo</a></p>
                        <p><a target="blank" href="https://thegreenestpost.com/diminua-sua-pegada-de-carbono-pela-metade-com-uma-simples-mudanca-habito/">The Greenest Post</a></p>
                    </div>
                }
                {/* Transporte */}
                {
                    (this.state.valorTransporteParticular > 0 ||
                        this.state.valorTransportePublico > 0 ||
                        this.state.flagIsBicicleta === true) &&
                    <div className="dicas-content">
                        <h3>Transporte</h3>
                        <img className="dicasTransporteImage" src={dicasTransporteImage} alt="Imagem Dicas Transporte"></img>
                        <ul>
                            {
                                ((this.state.valorTransporteParticular > 0) &&
                                    ((this.state.flagIsGasolina === true && this.state.flagIsEtanol === false))) &&
                                <div>
                                    <li>Notamos que você utiliza um veículo particular à gasolina. Se possível, dê preferência para biocombustíveis, como o etanol por exemplo, pois os biocombustíveis emitem muito menos GEE do que os combustíveis fósseis, como a gasolina.</li>
                                    <li>Procure dirigir mais devagar, isso ajuda a queimar menos combustível.</li>
                                    <li>Mantenha a manutenção do seu veículo em dia, isso é fundamental para que ele funcione de forma eficiente, o que reduz as emissões de GEE.</li>
                                </div>
                            }

                            {
                                ((this.state.valorTransporteParticular > 0) &&
                                    (this.state.flagIsEtanol === true && this.state.flagIsGasolina === false)) &&
                                <div>
                                    <li>Notamos que você utiliza um veículo particular à etanol. O etanol é um biocombustível, tais combustíveis emitem muito menos GEE em comparação à combustíveis fósseis como a gasolina. Portanto, neste sentido, você está no caminho certo!</li>
                                    <li>Procure dirigir mais devagar, isso ajuda a queimar menos combustível.</li>
                                    <li>Mantenha a manutenção do seu veículo em dia, isso é fundamental para que ele funcione de forma eficiente, o que reduz as emissões de GEE.</li>
                                </div>
                            }
                            {
                                ((this.state.valorTransporteParticular > 0) &&
                                    ((this.state.flagIsGasolina === true && this.state.flagIsEtanol === true))) &&
                                <div>
                                    <li>Procure dar preferência ao etanol como combustível.</li>
                                    <li>Procure dirigir mais devagar, isso ajuda a queimar menos combustível.</li>
                                    <li>Mantenha a manutenção do seu veículo em dia, isso é fundamental para que ele funcione de forma eficiente, o que reduz as emissões de GEE.</li>
                                </div>
                            }
                            {
                                (this.state.valorTransportePublico === 0 && this.state.valorTransporteParticular > 0) &&
                                <li>Vimos aqui que você utiliza transporte particular, mas não costuma utilizar transporte público. Dar preferência para o transporte público é uma boa forma de reduzir a sua Pegada de Carbobno.</li>
                            }
                            {
                                (this.state.valorTransportePublico > 0) &&
                                <li>Estou vendo aqui que você utiliza transporte público. Parabéns, essa é uma boa forma de reduzir a sua pegada de carbono, sempre que possível, prefira utilizar transportes públicos ao invés de um transporte particular.</li>
                            }
                            {
                                (this.state.flagIsBicicleta === false) &&
                                <li>Meios de transporte como uma bicicleta, por exemplo, são ótimos para reduzir sua Pegada, pois não há queima de combustível. Além disso, podem ser ótimos para sua saúde, então sempre que possível, opte por eles!</li>
                            }
                        </ul>
                        {
                            this.state.flagIsBicicleta === true &&
                            <ul>
                                <li>Parabéns! Vimos que você utiliza bicicleta, essa é uma ótima forma de reduzir sua emissão de GEE relacionada à transporte.</li>
                            </ul>
                        }

                        <h4>Fontes</h4>
                        <p><a target="blank" href="http://www.neomondo.org.br/2017/12/13/como-diminuir-sua-pegada-de-carbono-de-forma-simples-e-economica/">NEO MONDO</a></p>
                        <p><a target="blank" href="https://www.vivaalongevidade.com.br/forum-da-longevidade/9-dicas-para-reduzir-sua-pegada-de-carbono">Viva a Longevidade</a></p>
                    </div>
                }
                {/* Descarte de Lixo*/}
                {
                    this.state.valorDescarteLixo > 0 &&
                    <div className="dicas-content">
                        <h3>Descarte de Lixo</h3>
                        <img className="dicasLixoImage" src={dicasLixoImage} alt="Imagem Descarte de Lixo"></img>
                        <ul>
                            <li>Faça reciclagem do seu lixo, isso ajuda na redução da sua pegada de carbono!</li>
                            <li>Procure evitar o despedício de alimentos, compre somente o necessário, e coloque em seu prato somente o quanto você pode ingerir. Essas ações podem diminuir o lixo orgânico gerado, os quais emitem metano em sua decomposição.</li>
                            <li>Ao fazer compras, prefira utilizar sacolas reutilizáveis, pois as sacolinhas plásticas geralmente utilizadas levam muitos anos para se decomporem, além disso, seu descarte incorreto acarreta na poluição de mares, por exemplo.</li>
                            <li>Procure separar o seu lixo em: orgânico, reciclável e não reciclável. Assim é possível destiná-los aos locais corretos. Em muitas cidades há organizações que realizam ações neste sentido, se possível dê uma pesquisada!</li>
                            <li>Se possível, use uma composteira, pois a compostagem transforma o lixo orgânico em adubo, minimizando os impactos ambientais do seu consumo.</li>
                        </ul>
                        <h4>Fontes</h4>
                        <p><a target="blank" href="https://agenciabrasil.ebc.com.br/geral/noticia/2019-06/lixoes-liberam-6-milhoes-de-toneladas-de-gas-de-efeito-estufa-ao-ano#:~:text=Segundo%20o%20levantamento%2C%20a%20emiss%C3%A3o,superior%20a%20130%20mil%20carros.&text=Partindo%20desses%20dados%2C%20chegou%2Dse,256%20mil%20toneladas%20de%20CO2">Agência Brasil | EBC</a></p>
                        <p><a target="blank" href="https://www2.camara.leg.br/a-camara/estruturaadm/gestao-na-camara-dos-deputados/responsabilidade-social-e-ambiental/ecocamara/o-ecocamara/noticias/lixo-e-aquecimento-global-qual-a-relacao-1">ECOCÂMARA | Portal da Câmara dos Deputados</a></p>
                    </div>
                }
                {/* Compensação de Árvores*/}
                {
                    this.state.arvores >= 1 &&
                    <div className="compensacao-arvores">
                        <div className="subtitle">
                            <p>Há formas de compensar a sua pegada!</p>
                        </div>
                        <div className="compensacao-arvores-content">
                            <img className="compensacaoArvoresImage" src={compensacaoArvoresIcon} alt="Imagem Compensação Árvores"></img>
                            <div className="compensacao-arvores-text">
                                <p>
                                    Você pode apoiar uma organização que faz o <strong>plantio de árvores</strong>, aqui vão algumas:
                                </p>
                                <div className="compensacao-arvores-text-links">
                                    <ul>
                                        <li><a target="blanck" href="https://www.iniciativaverde.org.br/">Iniciativa Verde</a></li>
                                        <li><a target="blanck" href="https://idesam.org/">Idesam</a></li>
                                        <li><a target="blanck" href="https://www.sosma.org.br/comprar-mudas/">Sos Mata Atlântica</a></li>
                                    </ul>
                                </div>
                                <p>
                                    Você pode, também, <strong>plantar uma árvore</strong>, recomenda-se a <strong>arborização urbana com árvores nativas</strong>. Para mais informações, como as <strong>espécies indicadas</strong>, 
                                    deixamos aqui publicações que abordam o assunto e um <strong>manual técnico</strong> para arborização urbana, desenvolvido pela prefeitura de São Paulo:
                                </p>
                                <div className="compensacao-arvores-text-links">
                                    <ul>
                                        <li><a target="blanck" href="https://www.archdaily.com.br/br/880359/20-especies-nativas-para-arborizacao-urbana">20 Espécies nativas para arborização urbana</a></li>
                                        <li><a target="blanck" href="https://www.vivadecora.com.br/pro/paisagismo/arborizacao-urbana/">Como funciona a arborização urbana? Confira 15 árvores ideais para grandes cidades</a></li>
                                        <li><a target="blanck" href="https://www.sosma.org.br/wp-content/uploads/2015/03/MANUAL-ARBORIZACAO_22-01-15_.pdf">Manual técnico de arborização urbana</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="buttom">
                    <a href="#casa"><button>Voltar aos cálculos!</button></a>
                </div>
            </div>
        )
    }

    renderShowElementArvores() {
        return (
            <div id="arvores">
                <div className="subtitle">
                    <p>Quantas árvores plantadas no ano são necessárias para compensar sua pegada?</p>
                </div>
                <div className="arvores-content">
                    <img className="arvoreIcon" src={arvoreIcon} alt="Icone Arvores"></img>
                    <div className="arvores-result">
                        <strong><p>{parseInt(this.state.arvores)}</p></strong>
                        <h3>Árvores</h3>
                    </div>
                </div>
            </div>
        )
    }

    renderShowElementHabito() {
        return (
            <div id="habito">
                <div className="subtitle">
                    <p>Temos um convite para você!</p>
                </div>
                <div className="habito-content">
                    <img className="habitoImage" src={habitoImage} alt="Imagem Mudança Hábito"></img>
                    <div className="habito-text">
                        <p>
                            Conhecendo a sua <strong>pegada de carbono</strong>, que tal <strong>mudar
                            um hábito</strong> para <strong>reduzir</strong> seu impacto?
                        </p>
                        <p>
                            Você pode conferir algumas dicas, com base no seu resultado, para reduzir a sua pegada. Depois, convidamos você a usar nossa <strong>calculadora novamente</strong> para visualizar o resultado obtido com a mudança do hábito proposto.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let setaAlimentacao = "button-dropdown-bottom"
        let setaCasa = "button-dropdown-bottom"
        let setaTransporteAereo = "button-dropdown-bottom"
        let setaTransporteParticular = "button-dropdown-bottom"
        let setaTransportePublico = "button-dropdown-bottom"
        let setaDescarteLixo = "button-dropdown-bottom"

        if (this.state.setaAlimentacao) {
            setaAlimentacao += " seta-up"
        } else
            setaAlimentacao += " seta-down"

        if (this.state.setaCasa) {
            setaCasa += " seta-up"
        } else
            setaCasa += " seta-down"

        if (this.state.setaTransporteAereo) {
            setaTransporteAereo += " seta-up"
        } else
            setaTransporteAereo += " seta-down"

        if (this.state.setaTransporteParticular) {
            setaTransporteParticular += " seta-up"
        } else
            setaTransporteParticular += " seta-down"

        if (this.state.setaTransportePublico) {
            setaTransportePublico += " seta-up"
        } else
            setaTransportePublico += " seta-down"

        if (this.state.setaDescarteLixo) {
            setaDescarteLixo += " seta-up"
        } else
            setaDescarteLixo += " seta-down"

        return (
            <div id="pegadaCarbono" className="pegadaCarbono">
                <div id="important-infos" className="element-container">
                    <div className="important-infos">
                        <div className="important-infos-header">
                            <img className="icons" src={infoIcon} alt="Icone Informações"></img>
                            <h2>Importante</h2>
                        </div>
                        <hr />
                        <div className="important-infos-content">
                            <ul>
                                <li>
                                    A calculadora considera as principais atividades do dia-a-dia e fornece uma estimativa da sua emissão anual.
                                </li>
                                <li>
                                    Nem todas as informações precisam ser preenchidas, se alguma não faz sentido para você, pode deixar sem responder.
                                </li>
                            </ul>
                            <p>Esperamos que você tenha uma boa experiência.  Aproveite os resultados para refletir sobre seus hábitos e tomar ações para reduzir seu impacto no nosso planeta!</p>
                        </div>
                    </div>
                </div>

                <div id="casa" className="element-container">
                    <div className="button-dropdown-top">
                        <button onClick={this.toggleDropdownCasa}>
                            <div className="elements-button-dropdown-top">
                                <img className="icons" src={casaIcon} alt="Icone da Casa"></img>
                                <h2>Casa</h2>
                            </div>
                        </button>
                    </div>
                    {
                        this.renderDropdownElementCasa()
                    }
                    <div className={setaCasa}>
                        <button onClick={this.toggleDropdownCasa}>
                            <div className="elements-button-dropdown-bottom">
                                <img className="icons" src={setaIcon} alt="Seta"></img>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="alimentacao" className="element-container">
                    <div className="button-dropdown-top">
                        <button onClick={this.toggleDropdownAlimentacao}>
                            <div className="elements-button-dropdown-top">
                                <img className="icons" src={alimentacaoIcon} alt="Icone de Alimentação"></img>
                                <h2>Alimentação</h2>
                            </div>
                        </button>
                    </div>
                    {
                        this.renderDropdownElementAlimentacao()
                    }
                    <div className={setaAlimentacao}>
                        <button onClick={this.toggleDropdownAlimentacao}>
                            <div className="elements-button-dropdown-bottom">
                                <img className="icons" src={setaIcon} alt="Seta"></img>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="transporteAereo" className="element-container">
                    <div className="button-dropdown-top">
                        <button onClick={this.toggleDropdownTransporteAereo}>
                            <div className="elements-button-dropdown-top">
                                <img className="icons" src={transporteAereoIcon} alt="Icone de Transporte Aéreo"></img>
                                <h2>Transporte Aéreo</h2>
                            </div>
                        </button>
                    </div>
                    {
                        this.renderDropdownElementTransporteAereo()
                    }
                    <div className={setaTransporteAereo}>
                        <button onClick={this.toggleDropdownTransporteAereo}>
                            <div className="elements-button-dropdown-bottom">
                                <img className="icons" src={setaIcon} alt="Seta"></img>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="transporteParticular" className="element-container">
                    <div className="button-dropdown-top">
                        <button onClick={this.toggleDropdownTransporteParticular}>
                            <div className="elements-button-dropdown-top">
                                <img className="icons" src={transporteParticularIcon} alt="Icone de Transporte Particular"></img>
                                <h2>Transporte Particular</h2>
                            </div>
                        </button>
                    </div>
                    {
                        this.renderDropdownElementTransporteParticular()
                    }
                    <div className={setaTransporteParticular}>
                        <button onClick={this.toggleDropdownTransporteParticular}>
                            <div className="elements-button-dropdown-bottom">
                                <img className="icons" src={setaIcon} alt="Seta"></img>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="transportePublico" className="element-container">
                    <div className="button-dropdown-top">
                        <button onClick={this.toggleDropdownTransportePublico}>
                            <div className="elements-button-dropdown-top">
                                <img className="icons" src={transportePublicoIcon} alt="Icone da Transporte Público"></img>
                                <h2>Transporte Público</h2>
                            </div>
                        </button>
                    </div>
                    {
                        this.renderDropdownElementTransportePublico()
                    }
                    <div className={setaTransportePublico}>
                        <button onClick={this.toggleDropdownTransportePublico}>
                            <div className="elements-button-dropdown-bottom">
                                <img className="icons" src={setaIcon} alt="Seta"></img>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="descarteLixo" className="element-container">
                    <div className="button-dropdown-top">
                        <button onClick={this.toggleDropdownDescarteLixo}>
                            <div className="elements-button-dropdown-top">
                                <img className="icons" src={descarteLixoIcon} alt="Icone da Descarte de Lixo"></img>
                                <h2>Descarte de Lixo</h2>
                            </div>
                        </button>
                    </div>
                    {
                        this.renderDropdownElementDescarteLixo()
                    }
                    <div className={setaDescarteLixo}>
                        <button onClick={this.toggleDropdownDescarteLixo}>
                            <div className="elements-button-dropdown-bottom">
                                <img className="icons" src={setaIcon} alt="Seta"></img>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="emissaoTotal">
                    <div className="grid">
                        <div className="item1">
                            <h2>Emissão Total</h2>
                        </div>
                        <div className="item2">
                            <hr />
                        </div>
                        <div className="box-center">
                            <div className="item3">
                                <p>Energia Elétrica</p>
                                <p>Glp</p>
                                <p>Alimentação</p>
                                <p>Transporte Aéreo</p>
                                <p>Transporte Particular</p>
                                <p>Transporte Público</p>
                                <p>Descarte de Lixo</p>
                            </div>
                            <div className="item4">
                                <p>{parseFloat(this.state.valorEnergiaEletrica).toFixed(2)}</p>
                                <p>{parseFloat(this.state.valorGlp).toFixed(2)}</p>
                                <p>{parseFloat(this.state.valorAlimentacao).toFixed(2)}</p>
                                <p>{parseFloat(this.state.valorTransporteAereo).toFixed(2)}</p>
                                <p>{parseFloat(this.state.valorTransporteParticular).toFixed(2)}</p>
                                <p>{parseFloat(this.state.valorTransportePublico).toFixed(2)}</p>
                                <p>{parseFloat(this.state.valorDescarteLixo).toFixed(2)}</p>
                            </div>
                            <div className="item5">
                                <hr />
                            </div>
                            <div className="item6">
                                <strong><p>Sua pegada de carbono anual em tCO2eq é:</p> </strong>
                                <strong><p>{parseFloat(this.state.emissaoTotal).toFixed(2)}</p></strong>
                            </div>
                        </div>
                        <div className="item7">
                            {
                                this.renderShowElementArvores()
                            }
                            {
                                this.renderShowElementHabito()
                            }
                        </div>
                        <div className="item8">
                            <a href="#dicas"><button onClick={this.clickDicas}>Conferir dicas!</button></a>
                        </div>
                        <div className="item9">
                            <a href="#casa"><button>Calcular novamente!</button></a>
                        </div>
                    </div>
                </div>
                {
                    this.state.showElementDicas &&
                    this.renderShowElementDicas()
                }
            </div>

        )
    }
}

export default Calculos;