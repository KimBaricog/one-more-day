import "./style/mainmenu.css";
import MainPanel from "../components/MainPanel";
import LoadingScreen from "../components/LoadingScreen";
import Background from "./../assests/backgrounds/backg.mp4";
import Rainy from "./../assests/audio/rainy.mp3";

import { useEffect, useRef, useState } from "react";

function MainMenu() {
  const rainy = useRef(null);

  const [loading, setLoading] = useState(true);

  const playerProgress = localStorage.getItem("Day");

  //this code handle the loading screen, when the image loaded the main lobby will load
  const handleLoaded = () => {
    if (playerProgress) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 8000);
    }
  };

  //this code controls the audio function
  useEffect(() => {
    rainy.current.play();
  }, [handleLoaded]);

  return (
    <div className="mainmenu-container">
      <audio ref={rainy} src={Rainy} type="audio/mpeg" />
      {loading && <LoadingScreen text="Every Single Day Counts" />}

      <video
        onLoadedData={handleLoaded}
        autoPlay
        muted
        loop
        playsInline
        src={Background}
      />

      <div className="top">
        <span>
          <h1>one more day</h1>
        </span>

        <span>
          <p>a game about getting through the hard days</p>
        </span>
      </div>

      <div className="bottom">
        <MainPanel />
      </div>
    </div>
  );
}

export default MainMenu;
