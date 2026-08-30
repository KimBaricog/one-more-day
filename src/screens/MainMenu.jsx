import "./style/mainmenu.css";
import MainPanel from "../components/MainPanel";

import Background from "./../assests/backgrounds/backg.mp4";
import Rainy from "./../assests/audio/rainy.mp3";

import { useEffect, useRef } from "react";

function MainMenu() {
  const rainy = useRef(null);

  useEffect(() => {
    const audio = rainy.current;

    if (audio) {
      audio.volume = 0.5;
      audio.loop = true;

      audio.play().catch((error) => {
        console.log("Audio could not autoplay:", error);
      });
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div className="mainmenu-container">
      <audio ref={rainy} src={Rainy} />

      <video autoPlay muted loop playsInline src={Background} />

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
