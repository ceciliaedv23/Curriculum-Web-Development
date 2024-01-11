// Komponent för varje kurs

import React from "react";

function Course(props) {
  // Funktionalitet för status för varje kurs
  let statusText = "Genomförd";
  if (props.course.donestatus === 0) {
    statusText = "Pågående";
  }

  // Öppna och stäng varje kurs
  function toggleCourse() {
    let courseEl = document.getElementById(props.course.key);

    // CSS kopplas in
    let style = window.getComputedStyle(courseEl);

    // Öppna om den tidigare var stängd, respektive motsatsen
    if (style.display === "none") {
      courseEl.style.display = "block";
    } else {
      courseEl.style.display = "none";
    }
  }

  return (
    // Struktur
    <div className="courseSection">
      <div className="course" onClick={toggleCourse}>
        <h3>
          {props.course.name} <br></br>
          <span>Kurskod {props.course.code}</span>
        </h3>
      </div>
      <div className="course-info" id={props.course.key}>
        <img src={props.course.img} alt=""></img>
        <div className="status">
          <p>{statusText}</p>
        </div>

        <div className="desc">
          <p>{props.course.description}</p>
          <a href={props.course.syllable} target="_blank" rel="noreferrer">
            Se aktuell kursplan
          </a>
        </div>
        <div className="desc">
          <p>
            <em>{props.course.review}</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;
