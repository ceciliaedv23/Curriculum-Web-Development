// Komponenten Footer

import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div>
        <i class="fa-solid fa-lg fa-house" style={{ color: "#ffffff" }}></i>
        <p>
          <a href="https://ceciliaedv.netlify.app/">Min webbplats</a>
        </p>
      </div>
      <div>
        <i class="fa-solid fa-lg fa-envelope" style={{ color: "#ffffff" }}></i>
        <p>
          <a href="mailto:ceciliaedv23@gmail.com">Maila mig</a>
        </p>
      </div>
      <br />
      <br />
      <p>&#169; Cecilia Edvardsson 2023</p>
    </footer>
  );
}

export default Footer;
