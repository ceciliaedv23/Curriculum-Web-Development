// Komponent för varje kurs

import React from "react";

function Course(props) {
  return (
    // Struktur
    <div className="max-w-md mb-0 lg:mb-6 px-8 lg:px-2 py-2">
      <div className="course p-6 text-center rounded-lg mb-2">
        <h3 className="font-bold text-2xl">
          {props.course.name} <br></br>
          <span className="span text-lg">Kurskod {props.course.code}</span>
        </h3>
      </div>
      <div
        className="bg-gray-300 p-4 shadow-md shadow-gray-500 rounded-lg"
        id={props.course.key}
      >
        <img src={props.course.img} alt="" className="rounded-md"></img>
        <br />
        <div className="">
          <p>
            <span className="font-semibold">Innehåll:</span> &nbsp;
            {props.course.description}
            <br />
            <br />
            Se aktuell&nbsp;
            <a
              className="italic font-semibold underline"
              href={props.course.syllable}
              target="_blank"
              rel="noreferrer"
            >
              kursplan
            </a>
          </p>
        </div>
        <br />
        <div className="pb-2">
          <p>
            <span className="font-semibold">Mina synpunkter:</span>{" "}
            <em>{props.course.review}</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;
