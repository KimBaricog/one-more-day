import "./style/loadingscreen.css";
import { useState, useEffect } from "react";

function LoadingScreen() {
  const [display, setisdisplay] = useState(true);
  const [fadeout, setisfadeout] = useState(false);

  const changeScene = () => {
    setisfadeout(true);
    setTimeout(() => {
      setisdisplay(false);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => {
      changeScene();
    }, 5000);
  }, []);

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
            <div className="loader"></div>
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoadingScreen;
