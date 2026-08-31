import "./style/header.css";

function Header() {
  const Dayscalendar = localStorage.getItem("Day");
  return (
    <>
      <div className="header-container">
        <div className="left-side">
          <div className="day-container">Day {Dayscalendar}</div>
          <h3>Monday</h3>
        </div>
      </div>
    </>
  );
}
export default Header;
