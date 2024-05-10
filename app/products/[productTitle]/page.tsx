'use client';
import { useSearchParams } from 'next/navigation';
import { Item } from '../../components/ItemList';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { MdStarRate } from 'react-icons/md';

export default function ProductPage(): JSX.Element {
  return (
    <Suspense fallback={<p>Carregando detalhes do produto...</p>}>
      <ProductDetails />
    </Suspense>
  );
}

function ProductDetails(): JSX.Element {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [itemAdicionadoMsg, setItemAdicionadoMsg] = useState<any>(null);
  const searchParams = useSearchParams();
  const selectedItem: Item = JSON.parse(searchParams.get('item')!);

  useEffect(() => {
    if (!cartItems.length) {
      setCartItems(JSON.parse(searchParams.get('stateCartItems')!));
      console.log('state: ', searchParams.get('stateCartItems'));
      setItemAdicionadoMsg(document.querySelector('#item-adicionado')!);
    }
  }, []);

  const handleClick = (): void => {
    const cartAlreadyHasItem: boolean = cartItems.some(
      (item) => item.id === selectedItem.id
    );
    if (!cartAlreadyHasItem) {
      setCartItems([...cartItems, selectedItem]);
    } else {
      itemAdicionadoMsg.textContent = 'Item já está no seu carrinho!';
    }
    itemAdicionadoMsg.classList.remove('hidden');
  };

  return (
    <div id="product" className="bg-white px-2 mx-2">
      <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:gap-5 justify-items-center items-center">
        <img className="h-[400px]" src={searchParams.get('image')!} alt="" />
        <div id="right-side" className="relative">
          <div className="flex items-center justify-center gap-5">
            <h1 className="font-bold lg:text-start text-4xl max-w-[400px]">
              {searchParams.get('title')!}
            </h1>
            <div className="flex items-center gap-1">
              <p className="text-2xl mt-1">{searchParams.get('rate')}</p>
              <MdStarRate size={20} />
              <span className="text-xs self-end">
                ({searchParams.get('count')})
              </span>
            </div>
          </div>
          <div
            id="texto-detalhes"
            className="flex flex-col justify-center mt-3"
          >
            <p className="font-semibold text-3xl">
              R${' '}
              {searchParams.get('price')?.includes('.')
                ? searchParams.get('price')?.replace('.', ',')
                : searchParams.get('price')}
            </p>
          </div>
          <button
            className="bg-[#f2295b] w-full py-3 my-4 text-center rounded-lg text-xl font-semibold cursor-pointer"
            onClick={handleClick}
          >
            Adicionar ao Carrinho
          </button>
          <div className="h-[30px] select-none">
            <p
              id="item-adicionado"
              className="hidden text-[#f2295b] relative text-center mx-auto mb-5 left-0 right-0"
            >
              Item adicionado ao carrinho! ☺️
            </p>
          </div>
          <Link
            href={{
              pathname: '/',
              query: {
                stateCartItems: JSON.stringify(cartItems),
              },
            }}
            className="block bg-[#f2295b] w-[100px] text-center rounded-lg text-lg cursor-pointer py-2 px-4 mx-auto"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
