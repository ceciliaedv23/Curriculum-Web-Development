// Komponenten About som beskriver sidan

import React from "react";

function About() {
  return (
    <div id="about" className="px-8 py-16 md:py-20">
      <div className="max-w-md lg:max-w-xl m-auto">
        <h2 className="text-4xl md:text-5xl text-center py-6">Om sidan</h2>
        <p>
          Här beskrivs de kurser som ingick i Webbutvecklingsprogrammet hos
          Mittuniversitetet under läsperioden HT 2022 - VT 2024.
          <br />
          <br />
          Jag som skapat denna sida heter
          <strong> Cecilia Edvardsson</strong> och var student på programmet
          under denna tidsperiod.
          <br />
          <br />
          Sidan är skapad med React. Information om kurserna och bilder är
          hämtade från en array i en fristående JavaScript-fil och inlagda på
          sidan via props och metoden map(). Hooken useState används för att
          kunna växla sorteringen av kurser.
        </p>
      </div>
    </div>
  );
}

export default About;
