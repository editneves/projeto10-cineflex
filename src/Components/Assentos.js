import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"

export default function Assentos() {
    const [showtimes, setShowtimes] = useState(null)

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies/2/showtimes"
        const promise = axios.get(URL)
        promise.then(res => console.log(res.data))              // requisição deu certo
        promise.catch(err => console.log(err.response.data))  // requisição deu errado
    }, [])
    if (showtimes === null){
        return <div>Carregando...</div>
      }
    return (
        <>
            {/* <Images>
                {showtimes.map(showtime => (
                    <Image key={showtime.id}>
                        <img src={showtime.posterURL} alt={showtime.title} />
                    </Image>
                ))}
            </Images> */}
        </>
    );
}

const Images = styled.div`
width: 319px;
height: 708px;
background: #FFFFFF;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Image = styled.div`
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