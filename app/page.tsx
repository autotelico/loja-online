'use client';
import { useState, useEffect } from 'react';
import ItemList, { Item, getItems } from './components/ItemList';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MenuNavbar from './components/MenuNavbar';

export default function Home() {
  const [storeItems, setStoreItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [menuNavbar, setMenuNavbar] = useState<boolean>(false)

  useEffect(() => {
    if (!storeItems.length) {
      getItems().then((data) => setStoreItems(data));
    }
  }, []);

  const addToCart = (itemToAdd: Item): void => {
    setCartItems([...cartItems, itemToAdd]);
  };

  const removeFromCart = (itemToRemove: Item): void => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
    );
  };

  return (
    <>
      <Header showNavbar={navbar} setShowNavbar={setNavbar} cartItems={cartItems} menuNavbar={menuNavbar} setMenuNavbar={setMenuNavbar}/>
      <MenuNavbar displayMenuNavbar={menuNavbar} setDisplayMenuNavbar={setMenuNavbar}/>
      <Navbar displayNavbar={navbar} setDisplayNavbar={setNavbar} cartItemList={cartItems} handleRemove={removeFromCart}/>
      <ItemList itemsInCart={cartItems} addItemToCart={addToCart} removeItemFromCart={removeFromCart} storeItems={storeItems} setStoreItems={setStoreItems} />
    </>
  );
}
