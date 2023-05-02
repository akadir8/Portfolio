import React from "react";
import Logo from "./unnamed.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-5 bg-gradient-to-r from-emerald-400 from-30% to-sky-500">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="ml-8" src={Logo} height={40} width={40} />
        <span className="font-semibold text-xl tracking-tight ml-8">
          Abdulkadir Biçki
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow mr-8">
          <a
            href="#"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Ana Sayfa
          </a>
          <a
            href="#"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Hakkında
          </a>
          <a
            href="#"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Projeler
          </a>
          <a
            href="#"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            İletişim
          </a>
        </div>
        <div>
          <button class="transition border rounded py-2 px-3 text-xs font-bold tracking-wider text-white ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300 ...">
            Benimle çalışmak ister misin ?
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
