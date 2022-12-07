import styled from "styled-components";
import Rota from "./Components/Rota"
import Sessoes from "./Components/Sessoes"
import Assentos from "./Components/Assentos"
import Sucesso from "./Components/Sucesso"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  //const [select, setSelect] = useState("Selecione o filme")

  return (
    <BrowserRouter>
      <Container>
        <Cineflex>
          <h1>CINEFLEX </h1>
        </Cineflex>
        <Select>
          <h1>Selecione o filme</h1>
        </Select>
        <Routes>
          <Route path="/" element={<Rota />} />
          <Route path="/features" element={<Sessoes />} />
          <Route path="/services" element={<Assentos />} />
          <Route path="/Portfolio" element={<PortfolioSection />} />
          <Route path="/testimonials" element={<Sucesso />} />
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
