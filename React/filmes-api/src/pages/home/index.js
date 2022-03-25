import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { APIkey } from "../../config/Key"
import { Container, ListaFilmes, Filme } from "./styles"

function Home () {

    const [filmes, setfilmes] = useState([])
    const url_img = 'https://image.tmdb.org/t/p/w500' 

    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`)
            .then((resposta) => resposta.json())
            .then((dados) => setfilmes(dados.results))
    }, [])

    return (
        <Container>
            <h1>Filmes</h1>
            <ListaFilmes>
                {filmes.map( filme => {
                    return (
                        <Filme key={filme.id}>
                            <Link to={`/detalhes/${filme.id}`}>
                                <img 
                                src={`${url_img}${filme.poster_path}`} 
                                alt={filme.title}
                                />
                            </Link>
                            <span>{filme.title}</span>
                        </Filme>
                    )
                })}
            </ListaFilmes>
        </Container>
    )
}

export default Home