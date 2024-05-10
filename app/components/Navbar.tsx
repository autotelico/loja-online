import { CgClose } from 'react-icons/cg';
import { Item } from './ItemList';
import Link from 'next/link';
import { Reducer, useReducer } from 'react';

interface State {
  amount: number;
}

interface Action {
  type: string;
}

export default function Navbar({
  displayNavbar,
  setDisplayNavbar,
  cartItemList,
  handleRemove,
}: {
  displayNavbar: boolean;
  setDisplayNavbar: any;
  cartItemList: Item[];
  handleRemove: any;
}): JSX.Element {
  return (
    <>
      <nav
        className={
          displayNavbar
            ? 'fixed right-0 top-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-full bg-slate-100 border-l border-gray-500 ease-in-out duration-500 z-20'
            : 'fixed right-[-100%] top-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-full bg-slate-100 border-l border-gray-500 ease-in-out duration-500'
        }
      >
        <CgClose
          size={25}
          title="Fechar"
          onClick={() => setDisplayNavbar(!displayNavbar)}
          id="close-navbar-button"
          className="absolute right-1 md:right-3 top-3 rounded-full flex items-center justify-center cursor-pointer"
        />
        <div className="flex flex-col gap-5 py-8 px-4">
          <h1 className="text-4xl font-bold">Seu Carrinho</h1>
          {!!cartItemList.length ? (
            cartItemList.map((cartItem) => (
              <CartItemUnit
                key={cartItem.id}
                cartItem={cartItem}
                handleRemove={handleRemove}
              />
            ))
          ) : (
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-400 select-none">
              Nenhum item no carrinho ainda.
            </p>
          )}
        </div>
        {!!cartItemList.length && (
          <Link
            href={{
              pathname: '/finalizar',
              query: {
                stateCartItems: JSON.stringify(cartItemList),
              },
            }}
            className="block w-[200px] text-center bg-[#f2295b] font-bold py-2 px-4 rounded-xl mx-auto"
          >
            Finalizar Compra
          </Link>
        )}
      </nav>
      <div
        id="darkener"
        className={
          displayNavbar
            ? 'fixed top-0 left-0 bg-slate-800 opacity-40 h-full w-full z-10'
            : 'hidden'
        }
      ></div>
    </>
  );
}

function CartItemUnit({
  cartItem,
  handleRemove,
}: {
  cartItem: Item;
  handleRemove: any;
}): JSX.Element {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'increase': {
        const newAmount = state.amount + 1;
        return {
          ...state,
          amount: newAmount > 10 ? state.amount : newAmount,
        };
      }
      case 'decrease': {
        const newAmount = state.amount - 1;
        return {
          ...state,
          amount: newAmount < 0 ? state.amount : newAmount,
        };
      }
    }
  };

  const [amountState, dispatchAmount] = useReducer(reducer, { amount: 0 });

  console.log(amountState);

  const valueInReais: string = String(cartItem.price).includes('.')
    ? String(cartItem.price).replace('.', ',')
    : String(cartItem.price);

  return (
    <div className="bg-[#f2295b] p-3 rounded-lg">
      <p>{cartItem.title}</p>
      <p>R$ {valueInReais}</p>
      <button onClick={() => dispatchAmount({ type: 'decrease' })}>-</button>
      <p>Quantidade: {amountState.amount}</p>
      <button onClick={() => dispatchAmount({ type: 'increase' })}>+</button>
      <button
        className="text-sm font-semibold bg-[#de1144] py-2 px-4 rounded-xl cursor-pointer"
        onClick={() => handleRemove(cartItem)}
      >
        Remover
      </button>
    </div>
  );
}
