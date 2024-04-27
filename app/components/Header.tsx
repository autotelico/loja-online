'use client';
import { IoMenu } from 'react-icons/io5';
import { Item } from './ItemList';
import { FaShoppingBasket } from 'react-icons/fa';

export default function Header({
  showNavbar,
  setShowNavbar,
  cartItems,
  menuNavbar,
  setMenuNavbar,
}: {
  showNavbar: boolean;
  setShowNavbar: any;
  cartItems: Item[];
  menuNavbar: boolean;
  setMenuNavbar: any;
}): JSX.Element {
  return (
    <header className="flex justify-between items-center text-2xl py-4 px-16 sm:px-32">
      <div className="text-4xl">
        <img
          src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/site-logo-free-img-1.png"
          alt=""
        />
      </div>

      <div className="flex gap-10 sm:gap-20">
        <ul className="hidden lg:flex gap-10">
          <li className="hover:text-[#f2295b] cursor-pointer">Página Inicial</li>
          <li className="hover:text-[#f2295b] cursor-pointer">Sobre nós</li>
          <li className="hover:text-[#f2295b] cursor-pointer">Fale Conosco</li>
        </ul>
        <IoMenu className='lg:hidden cursor-pointer' onClick={() => setMenuNavbar(!menuNavbar)} />
        <div
          onClick={() => setShowNavbar(!showNavbar)}
          id='cart-icon'
          className="relative cursor-pointer"
        >
          <div className="absolute right-[-10px] top-[-15px] text-white text-sm font-semibold bg-[#f2295b] flex items-center justify-center rounded-full size-[20px]">
            {cartItems.length}
          </div>
          <FaShoppingBasket color="#f2295b" />
        </div>
      </div>
    </header>
  );
}
