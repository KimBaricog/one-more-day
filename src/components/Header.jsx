import "./style/header.css";
import { useEffect, useState } from "react";

function Header() {
  const [displayDay, setDisplay] = useState(null);
  const Dayscalendar = localStorage.getItem("Day");

  useEffect(() => {
    setDisplay(Dayscalendar);
  }, [Dayscalendar]);

  return (
    <>
      <div className="header-container">
        <div className="left-side">
          <div className="day-container">Day {displayDay}</div>
          <h3>Monday</h3>
        </div>
      </div>
    </>
  );
}
export default Header;
