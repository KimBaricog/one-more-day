import { useEffect, useRef, useState } from "react";

function DayTwo() {
  useEffect(() => {
    const progress = localStorage.getItem("Day");

    if (progress === null) {
      localStorage.setItem("Day", "2");
    }
  }, []);

  return (
    <>
      <div className="day-one-container">
        <h1>hello 2</h1>
      </div>
    </>
  );
}
export default DayTwo;
