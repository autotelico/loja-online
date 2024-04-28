'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Item } from '../../components/ItemList';

export default function ProductPage({
  params,
}: {
  params: { productTitle: string };
}): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div id="product">
        <h1 className='font-bold'>{searchParams.get('title')!}</h1>
        <img className='h-[400px]' src={searchParams.get('image')!} alt="" />
        <div id="texto-detalhes">
          <p>R$ {searchParams.get('price')?.includes('.') ? searchParams.get('price')?.replace('.', ',') : searchParams.get('price')}</p>
          <p>Avaliações feitas: {searchParams.get('count')}</p>
          <p>Nota média: {searchParams.get('rate')}</p>
        </div>
        <button className='bg-[#f2295b] w-[200px] my-4 text-center rounded-lg text-xl cursor-pointer'>Adicionar ao Carrinho</button>
      <div className='bg-[#f2295b] w-[100px] text-center rounded-lg text-lg cursor-pointer' onClick={() => router.back()}>Voltar</div>
      
    </div>
  );
}