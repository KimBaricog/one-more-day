import "./style/loadingscreen.css";
import { useState, useEffect } from "react";
import loaderImg from "../assests/backgrounds/forloadingscreen.png";

function LoadingScreen() {
  const [display, setisdisplay] = useState(true);
  const [fadeout, setisfadeout] = useState(false);

  //this code changes the scene to loading screen
  const changeScene = () => {
    setisfadeout(true);
    setTimeout(() => {
      setisdisplay(false);
    }, 1500);
  };

  //this code waits for the image to load before starting the screen
  const imgload = () => {
    setTimeout(() => {
      changeScene();
    }, 5000);
  };

  return (
    <>
      <div className="loading-container">
        <div
          style={{ display: display ? "flex" : "none" }}
          className={`firstscene ${fadeout ? "fade-out" : ""}`}
        >
          <h1>Every Single Day Counts</h1>
        </div>
        <div
          style={{ display: display ? "none" : "flex" }}
          className="loadingscene"
        >
          <div className="cont">
            <img onLoad={imgload} src={loaderImg}></img>
            <div className="loader"></div>
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoadingScreen;
