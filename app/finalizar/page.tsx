'use client';
import { useSearchParams } from 'next/navigation';
import { Item } from '../components/ItemList';
import Link from 'next/link';
import { Suspense } from 'react';

export default function CheckoutPage(): JSX.Element {
    return (
        <Suspense fallback={<p>Caradoisajdio</p>}>
            <Checkout />
        </Suspense>
    )
}

function Checkout(): JSX.Element {
  const searchParams = useSearchParams();
  const itensAComprar: Item[] = JSON.parse(searchParams.get('stateCartItems')!);

  return (
    <Suspense fallback={<p>Carregando página de finalização...</p>}>
      <div id="checkout" className="mx-auto">
        <h1 className="text-3xl font-bold">Finalização</h1>
        <p>Lista de produtos:</p>
        <ul>
          {itensAComprar.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <Link
          className="block w-[200px] text-center cursor-pointer bg-[#f2295b] rounded-xl py-2 px-4 mt-5"
          href={{
            pathname: '/',
            query: {
              stateCartItems: searchParams.get('stateCartItems'),
            },
          }}
        >
          Voltar ao Catálogo
        </Link>
      </div>
    </Suspense>
  );
}
