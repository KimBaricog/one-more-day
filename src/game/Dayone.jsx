import { useEffect } from "react";
import Header from "../components/Header";
import "./style/one.css";

function Dayone() {
  useEffect(() => {
    const progress = localStorage.getItem("Day");

    if (progress === null) {
      localStorage.setItem("Day", "1");
    }
  }, []);

  return (
    <div className="day-one-container">
      <Header />
      <div className="main-container">
        <div className="stats">stats</div>
        <div className="game-play">
          <div className="img-container"> img </div>
          <div className="actions"> actions</div>
        </div>
      </div>
    </div>
  );
}

export default Dayone;
