import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Rota() {
    const [filmes, setFilmes] = useState(undefined)

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then(res => setFilmes(res.data))              // requisição deu certo
        promise.catch(err => console.log(err.response.data))  // requisição deu errado
    }, [])
    if (filmes === undefined) {
        return <div>Carregando...</div>
    }
   
    return (
        <>
            <Select>
                <h1>Selecione o filme</h1>
            </Select>

            <Filmes>
                {filmes.map(filme => (
                    <Filme key={filme.id}>
                        <Link to={`/sessoes/${filme.id}`}>
                        <img src={filme.posterURL} alt={filme.title} />
                        </Link>
                    </Filme>
                ))}
            </Filmes>
        </>
    );
}

const Filmes = styled.div`
width: 319px;
height: 708px;
background: #FFFFFF;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Filme = styled.div`
width: 145px;
height: 209px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 11px;
img{
    width: 129px;
    height: 193px;}
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
