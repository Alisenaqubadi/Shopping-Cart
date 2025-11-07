import styled from "styled-components";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Nav = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    `

const Content = styled.div`
    flex: 8;
`

const NavButton = styled.div`
    width: calc(100%/5);
    font-size: 200%;
    text-align: center;
    padding-top: 1rem;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border-radius: 0 0 ${props => props.color === "black" ? "0" : "100%"} ${props => props.color === "black" ? "0" : "100%"} ;
`

export {
    Body,
    Nav,
    Content,
    NavButton,
}