import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0rem;
    }
`

export const ListaFilmes = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`

export const Filme = styled.li`
    align-items: center;
    display: flex;
    flex-direction: column;

    img {
        border-radius: 1rem;
        margin-bottom: 2rem;
        width: 180px;
    }

    span {
        font-size: 120%;
        font-weight: bold;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`