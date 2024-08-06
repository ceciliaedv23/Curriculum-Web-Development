// Komponenten Header

import React from "react";

function Header() {
  return (
    <header id="top" className="box-shadow mb-2">
      <div className="bg-black p-4 px-6">
        <nav>
          <ul className="flex flex-row justify-end gap-4">
            <li>
              <p className="text-white">
                <a
                  href="#about"
                  className="flex flex-row justify-end items-center"
                >
                  <i
                    className="fa-solid fa-lg fa-circle-info px-2 "
                    style={{ color: "#ffffff" }}
                  ></i>
                  Om sidan
                </a>
              </p>
            </li>
            <li>
              <p className="text-white">
                <a
                  href="#footer"
                  className="flex flex-row justify-end items-center"
                >
                  <i
                    className="fa-regular fa-lg fa-envelope px-2 "
                    style={{ color: "#ffffff" }}
                  ></i>
                  Kontakt
                </a>
              </p>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-8 pb-4 lg:p-10">
        <h1 className="text-4xl lg:text-6xl text-blue-900 text-shadow-black tracking-wide">
          Genomförda kurser
        </h1>
        <p className="text-lg lg:text-xl py-4">
          På Webbutvecklings-programmet 2022-2024, Mittuniversitetet
        </p>
      </div>
    </header>
  );
}

export default Header;
