import styled from "styled-components";
import { useNavigate } from "react-router-dom"

export default function Sucesso({ client, setClient, sessao, setSessao, assento, setAssento }) {
  const navigate = useNavigate()
  function home() {
    setAssento([])
    setClient({})
    navigate("/")
  }

  return (
    <>
      <Select>
        <p>Pedido feito com sucesso!</p>
      </Select>

      <Text data-test="movie-info">
        <p>Filme e sessão</p>
        <h1>{assento.movie.title} </h1>
        <h1>{assento.day.date}  {assento.name} </h1>
      </Text>

      <Text>
        <p>Ingressos</p>
        <Text data-test="seats-info">
          {client.ids.map(a => (<h1 key={a}> Assento {a} </h1>
          ))}
        </Text>
      </Text>

      <Text data-test="client-info">
        <p>Comprador</p>
        <h1> Nome: {client.name}</h1>
        <h1> CPF:{client.cpf}</h1>
      </Text>

      <SaveButton data-test="go-home-btn" onClick={home}><h1>Voltar pra Home </h1></SaveButton>
    </>
  );
}


const Select = styled.div`
width: 374px;
height: 110px;
left: 0px;
top: 67px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
p{
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
}`

const Text = styled.div`
width: 374px;
height: auto;
margin-left: 28px;
background: #FFFFFF;
display: flex;
flex-direction: column;
  p{
  margin-left: 28px;
  font - family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #293845;
  }
  h1{
  margin-left: 28px;
  font - family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #293845;
}`

const SaveButton = styled.button`
width: 225px;
height: 42px;
left: 72px;
top: 688px;
background: #E8833A;
border-radius: 3px;
border: 0;
cursor: pointer;
h1{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #FFFFFF;
}
  &:hover {
    filter: brightness(0.9);
}
  &:disabled {
    opacity: 0.6;
  cursor: not-allowed;
}`