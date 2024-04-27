import { CgClose } from "react-icons/cg";

export default function MenuNavbar({displayMenuNavbar, setDisplayMenuNavbar}: {
  displayMenuNavbar: boolean;
  setDisplayMenuNavbar: any;
}): JSX.Element {
  return (
    <>
    <div className={displayMenuNavbar ? "fixed top-0 left-0 w-full h-full bg-slate-100 -z-10 " : ""}></div>
    <nav className={displayMenuNavbar ? "fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-full bg-slate-100 border-r border-gray-500 ease-out duration-300" : "fixed left-[-100%] top-0 w-[40%] h-full bg-gray-300 border-r border-gray-500 ease-in duration-300"}>
      <CgClose size={25} className="absolute right-3 top-3 cursor-pointer" onClick={() => setDisplayMenuNavbar(!displayMenuNavbar)}/>
      <div className="p-5">
        <img
          src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/site-logo-free-img-1.png"
          alt="HDX Prints Logo"
        />
        <ul className="flex flex-col gap-2 mt-5 font-semibold text-2xl">
          <li className="hover:text-[#f2295b] cursor-pointer">Página Inicial</li>
          <li className="hover:text-[#f2295b] cursor-pointer">Sobre nós</li>
          <li className="hover:text-[#f2295b] cursor-pointer">Fale Conosco</li>
        </ul>
      </div>
    </nav>
    </>
  );
}
