import { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import day1Image from "../assests/backgrounds/day1.png";
import Stats from "../components/Stats";
import "./style/one.css";

function Dayone() {
  const navigate = useNavigate();

  useEffect(() => {
    const progress = localStorage.getItem("Day");

    if (progress === null) {
      localStorage.setItem("Day", "1");
    }

    if (progress > 0 && progress != 1) {
      navigate("/");
    }
  }, []);

  return (
    <div className="day-one-container">
      <Header />
      <div className="main-container">
        <div className="stats">
          <Stats />
        </div>
        <div className="game-play">
          <div
            className="img-container"
            style={{ backgroundImage: `url(${day1Image})` }}
          ></div>
          <div className="actions"> actions</div>
        </div>
      </div>
    </div>
  );
}

export default Dayone;
