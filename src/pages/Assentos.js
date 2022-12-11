import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

export default function Assentos() {
  const { idSessao } = useParams()
  const [assento, setAssento] = useState(undefined)

  useEffect(() => {
    const URL = (`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
    const promise = axios.get(URL)
    promise.then(res => setAssento(res.data))              // requisição deu certo
    promise.catch(err => console.log(err.response.data)) // requisição deu errado
  }, [])

  if (assento === undefined) {
    return <div>Carregando...</div>
  }
  console.log(assento)
  return (
    <>
      <Select>
        <h1>Selecione o(s) assento(s)</h1>
      </Select>
      <Assent>
        {assento.seats.map(function (numero) {
          return (
            <Numeros
              key={numero.id}>
              {numero.name}
            </Numeros>
          )
        })}
      </Assent>
      <Cores>
        <Cor>
          <NumerosSelecionado >
          </NumerosSelecionado>
          <h1>Selecionado</h1>
        </Cor>
        <div>
          <Numeros>
          </Numeros>
          <h1>Disponível </h1>
        </div>
        <div>
          <NumerosIndisponivel >
          </NumerosIndisponivel>
          <h1>Indisponível </h1>
        </div>
      </Cores>


      <FilmeEscolhido>
        <FilmeEs>
          <img src={assento.movie.posterURL} alt={assento.movie.title} />
        </FilmeEs>
        <h1>{assento.movie.title}</h1>
      </FilmeEscolhido>
    </>

  )
}
//style={{backgroundColor: "#1AAE9E",border: "1px solid #0E7D71"}}
//style={{backgroundColor: "#FBE192" ,border: "1px solid #F7C52B"}}
const Select = styled.div`
width: 375px;
height: 67px;
left: 0px;
top: 0px;
background: #FFFFFF;
display: flex;
align-items: center;
text-align: center;
justify-content: space-around;
h1{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #293845;
}
`
const Assent = styled.div`
width: 330px;
height: 220px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: space-around;
align-items: center;
}`

const Numeros = styled.div`
box-sizing: border-box;
width: 26px;
height: 26px;
margin-left: 7px;
background: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
`
const NumerosSelecionado = styled.div`
box-sizing: border-box;
width: 26px;
height: 26px;
margin-left: 7px;
background-color: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 12px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
`
const NumerosIndisponivel = styled.div`
box-sizing: border-box;
width: 26px;
height: 26px;
margin-left: 7px;
background-color: #FBE192;
border: 1px solid #F7C52B;
border-radius: 12px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
`
const Cores = styled.div`
width: 330px;
margin-top:10px;
margin-bottom:10px;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: nowrap;
h1{
  height: 28px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.013em;
  color: #4E5A65;}
}`
const Cor = styled.div`
display: flex;
flex-direction: column;
align-items: center;
}`

const FilmeEscolhido = styled.div`
width: 375px;
height: 117px;
margin-top:4px;
margin-left: 0px;
margin-bottom: 0px;
background: #DFE6ED;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
h1{
  width: 200px;
  margin-left: 24px;
  bottom: 39px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #293845;
}
`
const FilmeEs = styled.div`
width: 64px;
height: 89px;
margin-left: 10px;
bottom: 14px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
align-items: center;
justify-content: space-around;
img{
  width: 48px;
  height: 72px;
  left: 18px;
  bottom: 23px;
}
`