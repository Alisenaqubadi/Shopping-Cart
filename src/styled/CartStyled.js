import styled from "styled-components"; 

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemInContainer = styled.div`
    height: 7vh;
    border: solid;
    margin: 1rem 1rem 0 1rem ;
    padding: 0.5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
`

export const Image = styled.img`
    height: 100%;

`

export const H3 = styled.h3`
    width: 30%;
    text-align: center;
    margin: auto 0;
`

export const Price = styled.h3`
    text-align: center;
    margin: auto 0;
    margin-right: 1rem;
`
export const Total = styled.div`
    height: 7vh;
    border: solid;
    margin: 1rem 1rem 0 1rem ;
    padding: 0.5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
`