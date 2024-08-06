// Komponenten Footer

import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer id="footer" className="bg-black text-white">
      <div className="flex flex-row p-6 gap-6">
        <div className="flex flex-row items-center">
          <i
            className="fa-solid fa-lg fa-house px-2"
            style={{ color: "#ffffff" }}
          ></i>
          <p>
            <a href="https://ceciliaedv.netlify.app/">Min webbplats</a>
          </p>
        </div>
        <div className="flex flex-row items-center">
          <i
            className="fa-solid fa-lg fa-envelope px-2"
            style={{ color: "#ffffff" }}
          ></i>
          <p>
            <a href="mailto:ceciliaedv23@gmail.com">Maila mig</a>
          </p>
        </div>
      </div>
      <p className="pt-2 pb-6 px-8">&#169; Cecilia Edvardsson {year}</p>
    </footer>
  );
}

export default Footer;
