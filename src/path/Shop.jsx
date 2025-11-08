import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { Body, Nav, Content, NavButton, H1, AppContent, CartP } from "../styled/AppStyled";
import { ItemsContainer, ItemContainer, Image, P, H3, Button, ButtonDiv, ButtonsP } from "../styled/ShopStyled";
import { GlobalContext } from "../GlobalContext";
import "../css/App.css";

function PrintItems({ items , cartItems, setCartItems }) {

  function handelRemove(item){
    setCartItems(prev => {
  let removed = false;
  return prev.filter(i => {
    if (!removed && i.id === item.id) {
      removed = true;
      return false;
    }
    return true;
  });
});

  }

  function handelAdd(item){
    setCartItems(prev => [...prev, item])
  }

  function retrieveValue(item) {
  let counter = 0;
  for (let i = 0; i < cartItems.length; i++) {
    if(item.id == cartItems[i].id){
      counter++
    }
  }


  return counter;
  }
  
  return (
    <>
      {items.map(item => (
        <ItemContainer key={item.id}>
          <Image src={item.image} ></Image>
          <P> {item.title} </P>
          <H3> {item.price} $ </H3>
          <ButtonDiv>
          <Button onClick={() => handelRemove(item)}> - </Button> 
          <ButtonsP>{retrieveValue(item)}</ButtonsP>
          <Button onClick={() => handelAdd(item)}> + </Button>
          </ButtonDiv>
        </ItemContainer>
      ))}
    </>
  );
}

function Shop() {

  const [storeItem,setStoreItem] = useState([])
  const [loadError,setLoadError] = useState(null)
  const {cartItems,setCartItems} = useContext(GlobalContext)

  useEffect( ()=>{
    const items = []

    async function fetchAll() {
      const data = Array.from({ length: 20 } , ( _ , i ) => newFetch(i + 1))
      const results = await Promise.all(data);
      setStoreItem(results)
    }

    async function newFetch(id) { 
      try {
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(url,{mode:"cors"})
        return await response.json();
      } catch ( error ) {
        setLoadError(error)
        console.log(error)
      }
    }

    fetchAll();
  } , [])

  if(loadError !== null ) {
    return(<Body>
    <Nav>
      <NavButton> <Link to="/">Home</Link></NavButton>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/shop">Shop</Link></NavButton>
      <NavButton> <Link to="/cart">Cart</Link></NavButton>
    </Nav>
    <Content>
      <AppContent>
        <H1>Network Error</H1>
      </AppContent>
    </Content>
  </Body>)
  }
  if(storeItem.length == 0) {
     return(<Body>
    <Nav>
      <NavButton> <Link to="/">Home</Link></NavButton>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/shop">Shop</Link></NavButton>
      <NavButton> <Link to="/cart">Cart</Link></NavButton>
    </Nav>
    <Content>
      <AppContent>
        <H1>Loading Please Wait...</H1>
      </AppContent>
    </Content>
  </Body>)
  }

  return (<Body>
    <Nav>
      <NavButton> <Link to="/">Home</Link></NavButton>
      <NavButton style={{ background: 'white', color: "black"}}> <Link to="/shop">Shop</Link></NavButton>
      <NavButton> <Link to="/cart">Cart { cartItems.length !== 0 && <CartP>{cartItems.length}</CartP>}</Link></NavButton>
    </Nav>
    <Content>
      <ItemsContainer>
        <PrintItems items={storeItem} cartItems={cartItems} setCartItems={setCartItems}/>
      </ItemsContainer>
    </Content>
  </Body>);
}

export default Shop;
