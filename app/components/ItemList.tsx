import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export interface Item {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export default function ItemList({
  itemsInCart,
  addItemToCart,
  removeItemFromCart,
  storeItems,
  setStoreItems,
}: {
  itemsInCart: Item[];
  addItemToCart: any;
  removeItemFromCart: any;
  storeItems: Item[];
  setStoreItems: any;
}): JSX.Element {

  return (
    <div id="item-list" className="px-10 sm:px-32">
      <h2 className="text-3xl font-bold my-11 text-center sm:text-start">Catálogo</h2>
      <div className="grid gap-20 sm:grid-cols-2 md:grid-cols-3">
        <Suspense fallback={<p>Carregando catálogo...</p>}>
          {storeItems?.map((item: Item) => (
            <ItemUnit key={item.id} itemInfo={item} addToCart={addItemToCart} cartItems={itemsInCart} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

function ItemUnit({
  itemInfo,
  addToCart,
  cartItems,
}: {
  itemInfo: any;
  addToCart: any;
  cartItems: Item[];
}): JSX.Element {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-w-[180px] text-center bg-white rounded-xl py-3 px-10 hover:scale-110 duration-300">
      <p className="font-bold">{itemInfo.title}</p>
      <img src={itemInfo.image} alt={itemInfo.title} title={itemInfo.title} className="h-[100px]" />
      <Link href={{
        pathname: `/products/${itemInfo.title}`,
        query: {...itemInfo, rate: itemInfo.rating.rate, count: itemInfo.rating.count, stateCartItems: JSON.stringify(cartItems), item: JSON.stringify(itemInfo)},
      }} className='bg-[#f2295b] w-[150px] py-3 px-6 mt-3 rounded-xl font-semibold hover:bg-[#be2148f8] duration-300'>Ver mais</Link>
    </div>
  );
}

export async function getItems(): Promise<any> {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(data);
  return data;
}
