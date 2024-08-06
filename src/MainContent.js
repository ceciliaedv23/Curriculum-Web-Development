import React, { useState } from "react";
import Course from "./Course.js";
import courselist from "./courselist.js";
import About from "./About.js";

function MainContent() {
  const sortedEarliest = [...courselist];
  const sortedLatest = [...courselist].reverse();

  const [currentList, setCurrentList] = useState(sortedEarliest);
  const [latestActive, setLatestActive] = useState(false);

  function sortLatest() {
    setCurrentList(sortedLatest);
    setLatestActive(true);
  }

  function sortEarliest() {
    setCurrentList(sortedEarliest);
    setLatestActive(false);
  }

  return (
    <div className="bg-gray-100">
      <div className="mb-8 lg:mb-14 pl-8 pt-6 lg:pt-12 flex flex-col md:flex-row gap-4 bg-gray-100">
        <p className="text-xl lg:text-2xl font-semibold">Sortera efter</p>
        <p
          onClick={sortEarliest}
          className={`w-40 text-center rounded-lg font-medium p-2 cursor-pointer ${
            latestActive ? "bg-blue-200" : "bg-blue-400"
          }`}
        >
          Tidigast genomförd
        </p>
        <p
          onClick={sortLatest}
          className={`w-40 text-center rounded-lg font-medium p-2 cursor-pointer ${
            latestActive ? "bg-blue-400" : "bg-blue-200"
          }`}
        >
          Senast genomförd
        </p>
      </div>
      <div className="">
        <div className="flex flex-row gap-4 lg:gap-10 flex-wrap justify-center">
          {currentList.map((course) => {
            return <Course key={course.key} course={course} />;
          })}
        </div>
        <br />
        <br />
        <p className="w-40 bg-blue-800 m-auto text-center p-2 rounded-lg shadow-lg font-semibold text-white hover:bg-blue-700">
          <a href="#top">Till sidans topp</a>
        </p>

        <About />
      </div>
    </div>
  );
}

export default MainContent;
