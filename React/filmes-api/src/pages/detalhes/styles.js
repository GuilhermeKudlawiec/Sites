import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 90vh;


    .sinopse {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
        margin-left: 4rem;
        max-width: 50%;
    }

    img {
        border-radius: 1rem;
        width: 300px;
    }

    p {
        font-size: 120%;
        line-height: 130%;
    }

    button {
        background-color: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 0.8rem 2rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover {
        background-color: #5848cd;
    }
`