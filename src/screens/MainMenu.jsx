import "./style/mainmenu.css";
import MainPanel from "../components/MainPanel";
import LoadingScreen from "../components/LoadingScreen";
import Background from "./../assests/backgrounds/backg.mp4";
import Rainy from "./../assests/audio/rainy.mp3";

import { useEffect, useRef, useState } from "react";

function MainMenu() {
  const rainy = useRef(null);

  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  };

  useEffect(() => {
    const audio = rainy.current;

    if (audio) {
      audio.volume = 0.5;
      audio.loop = true;
      audio.play();
    }
  }, []);

  return (
    <div className="mainmenu-container">
      {loading && <LoadingScreen />}
      <audio ref={rainy} src={Rainy} />

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
