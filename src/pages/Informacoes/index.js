/**
 * /src/pages/Informacoes/index.js
 */
import React, { Component } from 'react';
import infoIcon from '../../icons/infoIcon.svg'

import './style.css';

class Informacoes extends Component {
    render() {
        return (
            <div id="informacoes">
                <div className="component-header">
                    <img className="icons" src={infoIcon} alt="Icone Informações"></img>
                    <h1>Informações</h1>
                </div>
                <div className="subtitle">
                    <p>Aqui você encontra informações sobre os cálculos utilizados na calculadora. As fórmulas detalhadas estão disponíveis no pdf que pode ser baixado <a target="blank" href="https://ponteducacional.com.br/tcc/calculos-e-fatores-tcc.pdf"><strong>clicando aqui</strong></a>.
                    </p>
                </div>
                <div className="informacoes-content">
                    <p>A pegada de carbono (PC) individual pode ser definida como um método de medir os impactos causados pela emissão de gases do efeito estufa (GEE), derivada de atividades humanas,
                        no planeta, e portanto ela tem forte relação com as mudanças climáticas. Sendo assim, seu objetivo é quantificar o total de emissões de GEE que são causadas direta ou
                        indiretamente por determinada atividade humana ou ao longo do estágio de vida de um produto.
                    </p>
                    <p>
                        O processo para calcular a pegada de carbono individual ainda não possui um padrão estabelecido, pois envolve muitas variáveis relativamente complexas.
                        Então, a calculadora aqui presente fornece uma estimativa da sua pegada de carbono individual ou emissão individual de GEE provenientes
                        de atividades diárias, tendo como objetivos mostrar que: atividades comuns do dia-a-dia têm impacto significativo no meio ambiente;
                        e pequenas mudanças em alguns hábitos podem fazer uma grande diferença à longo prazo.
                    </p>
                    <p>
                        De forma geral, o cálculo da pegada de carbono individual é constituído pela soma da quantidade de emissões de
                        GEE provenientes de algumas atividades do dia-a-dia de uma pessoa, que chamamos de categorias,
                        e no caso desta calculadora, são: alimentação; consumo de energia elétrica; consumo de gás liquefeito do petróleo (GLP);
                        viagens aéreas; uso de veículos particular; uso de transporte público; e quantidade de lixo descartado.
                    </p>
                    <p>
                        Cada uma dessas categorias é calculada individualmente, tendo como fórmula base a multiplicação da entrada
                        de cada uma por seu fator de emissão. Essa entrada varia de acordo com a categoria, para alimentação, por
                        exemplo, a entrada é o consumo de alimento em um determinado período; para transporte a entrada é a distância
                        percorrida em determinado período de tempo. Sendo assim, a unidade e o formato dessas entradas dependem da 
                        categoria. Por isso, para que o resultado seja dado em toneladas de CO2 equivalente por ano (tCO2eq/ano) foram
                        feitas conversões e adaptações.
                    </p>
                    <p>
                        O fator de emissão para cada categoria é o elemento chave dos cálculos, é ele que determina a quantidade de emissão de GEE por unidade de entrada de cada categoria. 
                        De forma simplificada existem alguns gases do
                        efeito estufa que compõem a pegada de carbono, esta calculadora leva em consideração o CO2, o CH4 e o N2O, cada um possui
                        seu fator de emissão, e todos são convertidos para CO2eq para a realização do cálculo total, unidade com a qual a PC trabalha. Quando consumimos algo ou
                        realizamos algumas atividades como andar de carro, de alguma forma “emitimos esses gases”, por exemplo: ao andar de carro,
                        a queima de combustível está emitindo esses gases; ao se alimentar você está consumindo um produto que no processo da sua
                        produção passou por etapas onde foram emitidos esses gases. Então, direta ou indiretamente, muitas atividades do dia a dia
                        influenciam nessas emissões.
                    </p>
                    <p>
                        Para a categoria de alimentação, foram utilizados os fatores de emissão encontrados na <a target="blank" href="http://www.fao.org/home/en/"><strong> FAO</strong></a> (Food and Agriculture Organization of the United Nations).
                        Já para as demais categoria, os fatores de emissão foram retirados da <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd28GUG1Kc8wXj8JNRAFhMRh32r24Wome4RBuEdsnEb3OLB0Q/viewform"><strong>ferramenta de cálculo do Programa Brasileiro GHG
                        Protocol</strong></a>.
                    </p>
                    <p>
                        O cálculo da quantidade de árvores necessárias para compensar a pegada de carbono é aproximado, uma vez que tanto a quantificação quanto os tipos florestais podem variar bastante.
                        <a target="blank" href="http://esalqlastrop.com.br/capa.asp?pi=calculadora_emissoes"><strong> Clicando aqui</strong></a> você pode conferir como essa estimativa foi feita.
                    </p>
                    <p>
                        Todos os cálculos detalhados e fatores de emissão utilizados podem ser baixados <a target="blank" href="https://ponteducacional.com.br/tcc/calculos-e-fatores-tcc.pdf"><strong>clicando aqui</strong></a>.
                    </p>
                </div>
            </div>
        )
    }
}

export default Informacoes;