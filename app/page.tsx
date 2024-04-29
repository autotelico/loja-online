'use client';
import { useState, useEffect, Suspense } from 'react';
import ItemList, { Item, getItems } from './components/ItemList';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MenuNavbar from './components/MenuNavbar';
import { useSearchParams } from 'next/navigation';

export default function MainPage(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="fixed top-0 left-0 w-full h-full bg-red-500">
          Carregando catálogo...
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

function Home() {
  const [storeItems, setStoreItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [menuNavbar, setMenuNavbar] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('stateCartItems')) {
      const prevCartItems: Item[] = JSON.parse(
        searchParams.get('stateCartItems')!
      );
      setCartItems(prevCartItems);
    }
  }, []);

  if (!storeItems.length) {
    try {
      getItems().then((data) => setStoreItems(data));
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }

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
      <Header
        showNavbar={navbar}
        setShowNavbar={setNavbar}
        cartItems={cartItems}
        menuNavbar={menuNavbar}
        setMenuNavbar={setMenuNavbar}
      />
      <MenuNavbar
        displayMenuNavbar={menuNavbar}
        setDisplayMenuNavbar={setMenuNavbar}
      />
      <Navbar
        displayNavbar={navbar}
        setDisplayNavbar={setNavbar}
        cartItemList={cartItems}
        handleRemove={removeFromCart}
      />
      <ItemList
        itemsInCart={cartItems}
        addItemToCart={addToCart}
        removeItemFromCart={removeFromCart}
        storeItems={storeItems}
        setStoreItems={setStoreItems}
      />
    </>
  );
}
