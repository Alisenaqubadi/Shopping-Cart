import styled from "styled-components";
import { Link } from "react-router";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const Nav = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    `

export const Content = styled.div`
    flex: 8;
`

export const NavButton = styled.div`
    width: calc(100%/5);
    font-size: 200%;
    text-align: center;
    padding-top: 1rem;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border-radius: 0 0 ${props => props.color === "black" ? "0" : "100%"} ${props => props.color === "black" ? "0" : "100%"} ;
`

export const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

export const H1 = styled.h1`
    text-align: center;
    position: relative;
    bottom: 3%;
`
export const StyledLink = styled(Link)`
    flex-direction: column;
    justify-content: center;
`

export const P = styled.p`
    
    transition: all 0.3s ease;

    &:hover {
        color: black;
    }
`

export const Button = styled.button`
    width: 25%;
    margin: 0 auto;
    height: 9%;
    font-size: 150%;
    background-color: inherit;
    border-radius: 1rem;
    border: solid;
    transition: all 0.3s ease;
    position: relative;


    &:hover{
        background-color: antiquewhite;
        color: black;
        border: solid antiquewhite;
    }
`