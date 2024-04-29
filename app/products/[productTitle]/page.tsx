'use client';
import { useSearchParams } from 'next/navigation';
import { Item } from '../../components/ItemList';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductPage({
  params,
}: {
  params: { productTitle: string };
}): JSX.Element {
  const [cartItems, setCartItems] = useState<Item[]>([])
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!cartItems.length) {
      setCartItems(JSON.parse(searchParams.get('stateCartItems')!))
      console.log('state: ', searchParams.get('stateCartItems'));
    }
  }, [])

  return (
    <div id="product">
        <h1 className='font-bold'>{searchParams.get('title')!}</h1>
        <img className='h-[400px]' src={searchParams.get('image')!} alt="" />
        <div id="texto-detalhes">
          <p>R$ {searchParams.get('price')?.includes('.') ? searchParams.get('price')?.replace('.', ',') : searchParams.get('price')}</p>
          <p>Avaliações feitas: {searchParams.get('count')}</p>
          <p>Nota média: {searchParams.get('rate')}</p>
        </div>
        <button className='bg-[#f2295b] w-[200px] my-4 text-center rounded-lg text-xl cursor-pointer' onClick={() => setCartItems([...cartItems, ])}>Adicionar ao Carrinho</button>
      <Link href={{
        pathname: '/',
        query: {
          stateCartItems: JSON.stringify(cartItems)
        },
      }} className='bg-[#f2295b] w-[100px] text-center rounded-lg text-lg cursor-pointer'>Voltar</Link>
      
    </div>
  );
}
