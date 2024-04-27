import { CgClose } from 'react-icons/cg';
import { Item } from './ItemList';

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
            ? 'fixed right-0 top-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-full bg-slate-100 border-l border-gray-500 ease-in-out duration-500'
            : 'fixed right-[-100%] top-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-full bg-slate-100 border-l border-gray-500 ease-in-out duration-500'
        }
      >
        <CgClose
          size={25}
          onClick={() => setDisplayNavbar(!displayNavbar)}
          id="close-navbar-button"
          className="absolute right-1 md:right-3 top-3 rounded-full flex items-center justify-center cursor-pointer"
        />
        <div className="flex flex-col gap-5 py-8 px-4">
          <h1 className="text-4xl font-bold">Sua Loja</h1>
          {cartItemList.map((cartItem) => (
            <CartItemUnit
              key={cartItem.id}
              cartItem={cartItem}
              removeItem={handleRemove}
            />
          ))}
        </div>
      </nav>
      {/* <div
        id="darkener"
        className="fixed top-0 left-0 bg-slate-800 opacity-40 h-full w-full -z-10"
      ></div> */}
    </>
  );
}

function CartItemUnit({
  cartItem,
  removeItem,
}: {
  cartItem: Item;
  removeItem: any;
}): JSX.Element {
  return (
    <div>
      <p>{cartItem.title}</p>
      <p>${cartItem.price}</p>
    </div>
  );
}
