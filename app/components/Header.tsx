'use client';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Navbar from './Navbar';

export default function Header({showNavbar, setShowNavbar}: {
  showNavbar: boolean,
  setShowNavbar: any,
}): JSX.Element {

  return (
    <header className="flex justify-between items-center text-2xl py-4 px-32">
      <div className="text-4xl">
        <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/site-logo-free-img-1.png" alt="" />
      </div>
      <ul className="flex gap-10">
        <li className='hover:text-red-500'>Página Inicial</li>
        <li className='hover:text-red-500'>Sobre nós</li>
        <li className='hover:text-red-500'>Fale Conosco</li>
        <div onClick={() => setShowNavbar(!showNavbar)} className='cursor-pointer'>
         <IoMenu />
        </div>
      </ul>
    </header>
  );
}
