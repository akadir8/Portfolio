import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-5">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight ml-8">My App</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow ml-24">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Ana Sayfa
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Projeler
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Hakkında
          </a>
        </div>
        <div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Benimle çalışmak ister misin?</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
