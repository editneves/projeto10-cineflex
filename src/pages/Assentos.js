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

  return (
    <>
      <Select>
        <h1>Selecione o horário</h1>
      </Select>


      <Assent>
        {assento.seats.map(function (numero) {
          return (
            <Numeros
              key={numero.id}>
              <h1>{numero.name} - {numero.isAvailable} </h1>
            </Numeros>
          )
        })}
      </Assent>



      {/* <FilmeEscolhido>
        
        <img src={sessao.posterURL} alt={sessao.title} />
        
        <h1>{sessao.title}</h1>
      </FilmeEscolhido>*/}
    </>

  )
}

const Assent = styled.div`
width: 300px;
height: 300px;
}`

const Numeros = styled.div`
box-sizing: border-box;
width: 26px;
height: 26px;
left: 24px;
top: 158px;
background: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
h1{
  width: 13px;
  height: 9px;
  left: 64px;
  top: 167px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #000000;
}`


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