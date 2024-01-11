// Komponenten Header

import React from "react";

function Header() {
  return (
    <header id="top">
      <div>
        <nav>
          <ul>
            <li>
              <a href="#footer">
                <i
                  class="fa-regular fa-lg fa-envelope"
                  style={{ color: "#ffffff" }}
                ></i>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="title">
        <h1>Kurser</h1>
        <p>Under Webbutvecklings-programmet</p>
      </div>
    </header>
  );
}

export default Header;
