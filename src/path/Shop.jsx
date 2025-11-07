import { useState, useEffect } from "react";
import { Link } from "react-router"
import { Body, Nav, Content, NavButton, } from "../styled/AppStyled";
import "../css/App.css";

function Shop() {

  const [storeItem,setStoreItem] = useState([])

  useEffect( ()=>{
    const items = []

    // for()
  })

  return (<Body>
    <Nav>
      <NavButton> <Link to="/">Home</Link></NavButton>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/shop">Shop</Link></NavButton>
      <NavButton> <Link to="/cart">Cart</Link></NavButton>
    </Nav>
    <Content></Content>
  </Body>);
}

export default Shop;
