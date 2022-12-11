import styled from "styled-components";
//import { useNavigate } from "react-router-dom"

export default function Sucesso() {
  // const navigate = useNavigate()
  // function addPicture() {
  // navigate("/")
  // }

    return (
      <>
       sucesso


       <SaveButton>Voltar pra Home</SaveButton>
      </>
    );
  }

const Container = styled.div`
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