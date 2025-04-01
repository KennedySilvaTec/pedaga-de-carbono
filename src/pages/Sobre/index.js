/**
 * /src/pages/Sobre/index.js
 */
import React, { Component } from 'react';
import logoIcon from '../../icons/logoIcon.svg'

import './style.css';

class Sobre extends Component {
    render() {
        return (
            <div id="sobre">
                <div className="component-header">
                    <img className="icons" src={logoIcon} alt="Icone Sobre"></img>
                    <h1>Sobre</h1>
                </div>
                <div className="subtitle">
                    <p>O que é? Qual o objetivo? Quem são os responsáveis? Confira abaixo!
                    </p>
                </div>
                <div className="sobre-content">
                    <p>O projeto pegada de carbono consistiu no desenvolvimento de uma aplicação Web com uma 
                        calculadora online que faz uma estimativa da pegada de carbono (PC) de um brasileiro. 
                        A pegada de carbono é constituída pela quantidade de gases do efeito estufa (GEE) emitidos por 
                        algumas ações humanas, como viagens aéreas, de automóvel, metrô, alimentação, entre outros.
                    </p>
                    <p>    
                        Para a realização deste projeto foram feitas pesquisas sobre algumas calculadoras de PC já existentes, 
                        buscando entender seu funcionamento, de onde vem seus dados e quais seus pontos fortes e fracos. 
                        Com isso, o projeto tem como objetivos levar informação as mais diversas pessoas, fazendo-as entender como 
                        suas ações podem impactar o futuro do planeta, trazer dicas de como elas podem fazer com que a sua PC diminua 
                        e fornecer as fontes dos dados utilizados para quem quiser saber mais sobre. 
                        Um outro fator relevante no desenvolvimento foi a responsidade e facilidade de acesso, já que atualmente, grande parte 
                        dos usuários da internet estão acessando os sites por meio de seus smartphones.
                    </p>
                    <p>
                        Este projeto foi desenvolvido como Trabalho de Conclusão de Curso, na Universidade Federal da Grande Dourados (UFGD), 
                        pelos alunos Ariel Carlos Peres Viera e Eliton Matheus Freitas da Silva, orientados pela professora Valguima Victoria Viana Aguiar Odakura.
                    </p>
                </div>
                <div className="subtitle">
                    <p>Principais referências utilizadas para o desenvolvimento do projeto.
                    </p>
                </div>
                <div className="sobre-referencias">
                    <ul>
                        <li><a target="blanck" href="https://docs.google.com/forms/d/e/1FAIpQLSd28GUG1Kc8wXj8JNRAFhMRh32r24Wome4RBuEdsnEb3OLB0Q/viewform">Ferramenta de Cálculo do Programa Brasileito GHG Protocol</a></li>
                        <li><a target="blanck" href="https://www.iniciativaverde.org.br/">Iniciativa Verde</a></li>
                        <li><a target="blanck" href="https://idesam.org/calculadora/">Idesam</a></li>
                        <li><a target="blanck" href="https://www.tjpr.jus.br/web/gestao-ambiental/calculadoraco2">Tribunal de Justiça do Estado do Paraná (TJPR)</a></li>
                        <li><a target="blanck" href="https://www.sosma.org.br/calcule-sua-emissao-de-co2/">SOS Mata Atlântica</a></li>
                        <li><a target="blanck" href="https://www.webco2.com.br/static/calculator.php">Sustainable Carbon</a></li>
                    </ul>

                    <p>
                        Além da utilização das calculadoras para estudos e testes, foram utilizados diversos artigos e documentos encontrados nos sites
                        das mesmas.
                    </p>
                </div>
            </div>
        )
    }
}

export default Sobre;