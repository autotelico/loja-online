import { Item } from './ItemList';
import { FaWindowClose } from 'react-icons/fa';

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
    <nav
      className={
        displayNavbar
          ? 'fixed right-0 top-0 w-[30%] h-full bg-slate-300 border-l-4 border-gray-500 ease-in-out duration-500'
          : 'fixed right-[-100%] top-0 w-[30%] h-full bg-slate-300 border-l-4 border-gray-500 ease-in-out duration-500'
      }
    >
      <FaWindowClose size={25}
        onClick={() => setDisplayNavbar(!displayNavbar)}
        id="close-navbar-button"
        className="absolute right-5 top-5 rounded-full flex items-center justify-center cursor-pointer"
      />
      <div className="flex flex-col gap-5 py-8 px-4">
        <h1 className="text-4xl font-bold">Sua Loja</h1>
        {cartItemList.map((cartItem) => (
          <CartItemUnit cartItem={cartItem} removeItem={handleRemove} />
        ))}
        {/* <div id="darkener" className="fixed top-0 left-0 bg-slate-800 opacity-40 h-full w-full"></div> */}
      </div>
    </nav>
  );
}

function CartItemUnit({
  cartItem,
  removeItem,
}: {
  cartItem: Item;
  removeItem: any;
}): JSX.Element {
  return <div>sss</div>;
}
