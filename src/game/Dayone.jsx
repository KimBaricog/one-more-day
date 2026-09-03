import { useEffect, useState } from "react";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import day1Image from "../assests/backgrounds/Daybackground/fog-day1.png";
import Stats from "../components/Stats";
import "./style/one.css";
import LoadingScreen from "../components/LoadingScreen";
import Actions from "../components/Actions";

function Dayone() {
  const navigate = useNavigate();
  const [displayLoading, setDisplayLoading] = useState(true);

  useEffect(() => {
    const progress = localStorage.getItem("Day");

    if (progress === null) {
      localStorage.setItem("Day", "1");
    }

    if (progress > 0 && progress != 1) {
      navigate("/");
    }
  }, [navigate]);

  const removeLoading = () => {
    setTimeout(() => {
      setDisplayLoading(false);
    }, 5000);
  };

  // Preload the background image
  useEffect(() => {
    const img = new Image();

    img.onload = removeLoading;
    img.onerror = removeLoading; // Remove loading screen even if image fails

    img.src = day1Image;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className="day-one-container">
      {displayLoading && <LoadingScreen text="CHAPTER 1 — THE FOG " />}

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

          <div className="actions">
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dayone;
