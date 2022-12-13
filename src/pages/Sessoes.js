import styled from "styled-components";
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

export default function Sessoes({ sessao, setSessao }) {
  const { filmeId } = useParams()

  useEffect(() => {
    const URL = (`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`)

    const promise = axios.get(URL)
    promise.then(res => setSessao(res.data))
    promise.catch(err => console.log(err.response.data))
  }, [])

  if (sessao === undefined) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Select>
        <h1>Selecione o horário</h1>
      </Select>

      {sessao.days.map(function (days) {
        return (

          <Days
            data-test="movie-day"
            key={days.id}>
            <h1>{days.weekday} - {days.date} </h1>

            <Horarios>
              {days.showtimes.map(function (hora) {
                return (
                  <Hour key={hora.id} data-test="showtime">
                    <Link style={{ textDecoration: 'none', color: "white" }} to={`/assentos/${hora.id}`}>
                      {hora.name}
                    </Link>
                  </Hour>
                )
              })}
            </Horarios>

          </Days>
        )
      })}

      <FilmeEscolhido>
        <FilmeEs data-test="footer">
          <img src={sessao.posterURL} alt={sessao.title} />
        </FilmeEs>
        <h1>{sessao.title}</h1>
      </FilmeEscolhido>
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