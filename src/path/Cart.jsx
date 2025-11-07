import "../css/App.css";
import { Link } from "react-router"
import { Body, Nav, Content, NavButton, } from "../styled/AppStyled";

function Cart() {
  return (<Body>
    <Nav>
      <NavButton> <Link to="/">Home</Link></NavButton>
      <NavButton> <Link to="/shop">Shop</Link></NavButton>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/cart">Cart</Link></NavButton>
    </Nav>
    <Content></Content>
  </Body>);
}

export default Cart;
