import { Link } from "react-router-dom"
import { Body, Nav, Content, NavButton, CartP } from "../styled/AppStyled";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { CartContainer, ItemInContainer, Image, H3, Price, Total } from "../styled/CartStyled";
import "../css/App.css";

function PrintCart({cartItems}) {
  return(
  <>
    {cartItems.map(item => (
      <ItemInContainer key={item.id}>
        <Image src={item.image}></Image>
        <H3>{item.title}</H3>
        <Price>${item.price}</Price>
      </ItemInContainer>
    ))}
  </>
  )
}

function TotalValue( { cartItems } ) {
  let counter = 0;
  for (let i = 0; i < cartItems.length; i++) {
    counter = counter + cartItems[i].price
  }

  return(
    <Price> ${counter.toFixed(2)}</Price>
  )
}

function Cart() {

  const {cartItems,setCartItems} = useContext(GlobalContext)

  

  return (<Body>
    <Nav>
      <NavButton> <Link to="/">Home</Link></NavButton>
      <NavButton> <Link to="/shop">Shop</Link></NavButton>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/cart">Cart { cartItems.length !== 0 && <CartP>{cartItems.length}</CartP>}</Link></NavButton>
    </Nav>
    <Content>
      <CartContainer>
        <PrintCart cartItems={cartItems}/>
      </CartContainer>
      <Total><Price> Total:</Price><TotalValue cartItems={cartItems} /></Total>
    </Content>
  </Body>);
}

export default Cart;
