import React from "react";
import Course from "./Course.js";
import courselist from "./courselist.js";

function MainContent() {
  const course2list = courselist.map((course) => {
    return <Course course={course} />;
  });

  return (
    <div className="allt">
      <div className="grid1">
        <h2>Om webbplatsen</h2>
        <div className="intro">
          <p>
            Här beskrivs de kurser som ingår i programmet Webbutveckling hos
            Mittuniversitetet under läsperioden HT 2022 - VT 2024. Fler kurser
            läggs till efterhand de läses.
            <br />
            <br />
            Jag som skapare av webbplatsen heter
            <strong> Cecilia Edvardsson</strong> och är själv student på
            programmet under denna tidsperiod.
            <br />
            <br />
            Webbplatsen är skapad med React. Information om kurserna och bilder
            är hämtade från en array i en fristående JavaScript-fil och inlagda
            på sidan via props och metoden map().
            <br /> Webbplatsens filer kan ses på Github&nbsp;
            <a href="https://github.com/cecedvportfolio/kurser">här</a>.
            <br />
            <br />
            <em className="mobile-only">
              Klicka på den kurs du vill läsa mer om.
            </em>
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="grid2">{course2list}</div>
      <br />
      <br />
      <div className="sticky">
        <a href="#top">
          <em
            className="fa-solid fa-2xl fa-arrow-up"
            style={{ color: "#000000" }}
          ></em>
        </a>
      </div>
      <br />
    </div>
  );
}

export default MainContent;
