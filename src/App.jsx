import { useEffect, useState } from "react";
import { Link } from "react-router"
import { Body, Nav, Content, NavButton, AppContent, H1, Button, StyledLink, P } from "./styled/AppStyled";
import "./css/App.css";

function App() {

  return (<Body>
    <Nav>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/">Home</Link></NavButton>
      <NavButton> <Link to="shop">Shop</Link></NavButton>
      <NavButton> <Link to="cart">Cart</Link></NavButton>
    </Nav>
    <Content>
      <AppContent>
        <H1>Welcome to IDK shop, enjoy shopping</H1>
          <Button>
            <StyledLink to="Shop"><P>Start Shopping</P></StyledLink>
          </Button>
      </AppContent>
    </Content>
  </Body>);
}

export default App;
