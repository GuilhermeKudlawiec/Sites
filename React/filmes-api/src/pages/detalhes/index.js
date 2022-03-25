import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { APIkey } from "../../config/Key"
import { Container } from "./styles"

function Detalhes () {

    const { id } = useParams()
    console.log(id)

    const [filmes, setfilmes] = useState({})
    const url_img = 'https://image.tmdb.org/t/p/w500' 

    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US&page=1`)
            .then((resposta) => resposta.json())
            .then((dados) => {
                const info_filmes = {
                    id,
                    lancamento: dados.release_date,
                    sinopse: dados.overview,
                    titulo: dados.title,
                    imagem: dados.poster_path
                }
                setfilmes(info_filmes)
            })
    }, [id])

    return (
        <Container>
            <img src={`${url_img}${filmes.imagem}`} alt={filmes.titulo}/>
            <div className="sinopse">
                <h1>{filmes.titulo}</h1>
                <p>Sinopse: {filmes.sinopse}</p>
                <span>Data de lançamento: {filmes.lancamento}</span>
                <Link to='/'>
                    <button>Voltar</button>
                </Link>
            </div>
        </Container>
    )
}

export default Detalhes