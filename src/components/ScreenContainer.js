import styled from "styled-components"
import Cabecalho from "./Cabecalho.js"
import Deck from "./Deck.js"
import Rodape from "./Rodape.js"
import iconeCerto from "./img/icone_certo.png"
import iconeErro from "./img/icone_erro.png"
import iconeQuase from "./img/icone_quase.png"
import iconePlay from "./img/seta_play.png"
import iconeVirar from "./img/seta_virar.png"
import React from "react"
import questions from './questions.js';


export default function ScreenContainer() {

    const cores = {
        verde: "#2FBE34",
        amarelo: "#ff922e",
        vermelho: "#ff3030",
        preto: "#333333"
    }

    const icones = {
        certo: iconeCerto,
        erro: iconeErro,
        quase: iconeQuase,
        play: iconePlay,
        virar: iconeVirar
    }


    //estados das cartas
    const [perguntasClicadas, setPerguntasClicadas] = React.useState([])
    const [perguntasViradas, setPerguntasViradas] = React.useState([])
    const [perguntasRespondidas, setPerguntasRespondidas] = React.useState([])

    return (
        <Screen>
            <Cabecalho />
            <Deck questions={questions}
                cores={cores}
                icones={icones}
                perguntasClicadas={perguntasClicadas}
                setPerguntasClicadas={setPerguntasClicadas}
                perguntasViradas={perguntasViradas}
                setPerguntasViradas={setPerguntasViradas}
                perguntasRespondidas={perguntasRespondidas}
                setPerguntasRespondidas={setPerguntasRespondidas}
            />
            <Rodape
                cores={cores}
                icones={icones}
                perguntasRespondidas={perguntasRespondidas}
                setPerguntasRespondidas={setPerguntasRespondidas}
            />
        </Screen>
    )
}


const Screen = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`