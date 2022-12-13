import styled from "styled-components";
import Rota from "./Components/Rota"
import Sessoes from "./pages/Sessoes"
import Assentos from "./pages/Assentos"
import Sucesso from "./pages/Sucesso"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"

export default function App() {
  const [client, setClient] = useState({})
  const [sessao, setSessao] = useState(undefined)
  const [assento, setAssento] = useState(undefined)
  return (
    <BrowserRouter>
      <Container>
        <Cineflex>
          <h1>CINEFLEX </h1>
        </Cineflex>
        <Routes>
          <Route path="/" element={<Rota/>} /> 
          <Route path="/sessoes/:filmeId" element={<Sessoes sessao={sessao} setSessao={setSessao} />} />
          <Route path="/assentos/:idSessao" element={<Assentos client={client} setClient={setClient} assento={assento}
              setAssento={setAssento}/>} />
          <Route
            path="/sucesso"
            element={<Sucesso
              client={client}
              setClient={setClient}
              sessao={sessao}
              setSessao={setSessao}
              assento={assento}
              setAssento={setAssento}
            />}
          />
        </Routes>  

      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
background: #FFFFFF;
width: 375px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-content: space-around;
justify-content: space-between;
align-items: center;
`
const Cineflex = styled.div`
width: 375px;
height: 67px;
left: 0px;
top: 0px;
background: #C3CFD9;
display: flex;
align-items: center;
justify-content: space-around;
h1{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #E8833A;
}
`

