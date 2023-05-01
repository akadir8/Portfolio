import React from "react";
import Logo from "./unnamed.png"

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-5 bg-gradient-to-r from-emerald-400 from-30% to-sky-500">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="ml-8" src={Logo} height={40} width={40}/>
        <span className="font-semibold text-xl tracking-tight ml-8">Abdulkadir Biçki</span>
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
          <button className="inline-block bg-gradient-to-r from-sky-500 from-30% to-emerald-400 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 hover:shadow-md">Benimle çalışmak ister misin?</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
