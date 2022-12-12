import styled from "styled-components";
import { useNavigate } from "react-router-dom"

export default function Sucesso({client, setClient, sessao, setSessao,assento, setAssento}) {
  const navigate = useNavigate()
  function home() {
    navigate("/")
  }

  console.log('asdasdasdasdas ' + JSON.stringify(client))
  console.log('asdasdasdasdas ' + JSON.stringify(assento))

  return (
    <>
      <Select>
        <h1>Pedido feito com sucesso!</h1>
      </Select>
      <Text>
        <h1>Pedido feito com sucesso!</h1>
        <h2 data-test="movie-info">
          
           {assento.movie.title}  

           
           {assento.name} - {assento.day.weekday} 
        </h2>
      </Text>
      <Text>
        <h1>Ingressos</h1>
        <h2 data-test="seats-info" >Assento {client.ids}</h2>
      </Text>
      <Text>
        <h1>Pedido feito com sucesso!</h1>
        <h2 data-test="client-info">{client.name}</h2>
        <h2 data-test="client-info">{client.cpf}</h2>
      </Text>

      <SaveButton data-test="go-home-btn" onClick={home}>Voltar pra Home</SaveButton>
    </>
  );
}

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
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
  }
  `
const Text = styled.div`
  width: 374px;
  height: 110px;
  left: 28px;
  top: 202px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  margin-bottom = 30px;
  h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
  `
const SaveButton = styled.button`

width: 225px;
height: 42px;
left: 72px;
top: 688px;
background: #E8833A;
border-radius: 3px;
border: 0;
cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`