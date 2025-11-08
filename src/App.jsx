import { useContext } from "react";
import { Link } from "react-router-dom"
import { Body, Nav, Content, NavButton, AppContent, H1, Button, StyledLink, P, CartP } from "./styled/AppStyled";
import { GlobalContext } from "./GlobalContext";
import "./css/App.css";

function App() {

  const {cartItems , setCartItems} = useContext(GlobalContext)

  return (<Body>
    <Nav>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/">Home</Link></NavButton>
      <NavButton> <Link to="shop">Shop</Link></NavButton>
      <NavButton> <Link to="cart">Cart { cartItems.length !== 0 && <CartP>{cartItems.length}</CartP>}</Link></NavButton>
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
