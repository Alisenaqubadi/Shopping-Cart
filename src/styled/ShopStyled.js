import styled from "styled-components";

export const ItemsContainer = styled.div`
    margin: 3rem auto 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, min(100%, 290px));
    grid-template-rows: repeat(auto-fill, 400px);
    gap: 1rem;
    justify-content: center;
`

export const ItemContainer = styled.div`
    height: 400px;
    border: solid;
    border-radius: 2rem;
`

export const Image = styled.img`
    height: 60%;
    width: 90%;
    margin: 10px;
    padding-bottom: 1rem;
    border-bottom: solid;
`

export const P = styled.p`
    text-align: center;
`

export const H3 = styled.h3`
    text-align: center;
`

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    width: 10%;
    background: inherit;
    border: solid 1px;
    border-radius: 3px;
    margin: 0 1rem;
`

export const ButtonsP = styled.p`
font-size: large;
`