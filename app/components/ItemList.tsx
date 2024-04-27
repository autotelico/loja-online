import { Suspense } from 'react';
import { useRouter } from 'next/navigation';

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
    <div id="item-list" className="px-32">
      <h2 className="text-3xl font-bold my-11 text-center sm:text-start">Catálogo</h2>
      <div className="grid gap-20 sm:grid-cols-2 md:grid-cols-3">
        <Suspense fallback={<p>Carregando catálogo...</p>}>
          {storeItems?.map((item: Item) => (
            <ItemUnit key={item.id} itemInfo={item} addToCart={addItemToCart} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

function ItemUnit({
  itemInfo,
  addToCart,
}: {
  itemInfo: any;
  addToCart: any;
}): JSX.Element {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-bold">{itemInfo.title}</p>
      <img src={itemInfo.image} alt={itemInfo.title} className="h-[100px]" />
      <button onClick={() => router.push(`products/${itemInfo.title}`)} >Ver detalhes</button>
      <button className="bg-[#f2295b] py-3 px-6 mt-3 rounded-xl font-semibold" onClick={() => addToCart(itemInfo)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export async function getItems(): Promise<any> {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(data);
  return data;
}
