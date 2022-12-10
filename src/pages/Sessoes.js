import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

export default function Sessoes() {
  const { filmeId } = useParams()
  const [sessao, setSessao] = useState(undefined)
  
  useEffect(() => {
    const URL = (`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`)

    const promise = axios.get(URL)
    promise.then(res => setSessao(res.data.days))              // requisição deu certo
    promise.catch(err => console.log(err.response.data))

    // requisição deu errado
  }, [])
  if (sessao === undefined) {
    return <div>Carregando...</div>
  }
  console.log(sessao)
  return (
    <>
      <Select>
        <h1>Selecione o horário</h1>
      </Select>

      {sessao.map(function (days) {
        return (
          <Days

            key={days.id}>
            <h1>{days.weekday} - {days.date} </h1>

            <Horarios>
              {days.showtimes.map(function (hora) {
                return (
                  
                  <Hour key={hora.id}>
                    <Link style={{ textDecoration: 'none',color:"white" }} to={`/assentos/${hora.id}`}>
                    {hora.name}
                    </Link>
                  </Hour>
                )
              })}
            </Horarios>

          </Days>
        )
      })}
    </>
  )
}

const Days = styled.div`
width: 241px;
background: #FFFFFF;
display: flex;
flex-direction: column;
h1{
  width: 241px;
  height: 35px;
  left: 24px;
  top: 170px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #293845;
}`

const Hour = styled.div`
width: 83px;
height: 43px;
top: 227px;
background: #E8833A;
border-radius: 3px;
display: flex;
justify-content: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;
color: #293845;
`
const Horarios = styled.div`
width: 241px;
display: flex;
align-items: center;
text-align: center;
justify-content: space-around;
`
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
