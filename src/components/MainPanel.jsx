import "./style/mainpanel.css";
import diamond from "../assests/svgs/diamond.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MainPanel() {
  const navigate = useNavigate();
  const [setNavigate, setisNavigate] = useState(null);
  const [setNewgamedisplay, isNewgamedisplay] = useState(null);

  useEffect(() => {
    const Days = localStorage.getItem("Day");

    //if a level exist it will hide the "new game" button
    if (Days) {
      isNewgamedisplay(true);
    }

    //this code handles the progess function
    if (Days === "1") {
      setisNavigate("/Day1");
    } else if (Days === "2") {
      setisNavigate("/Day2");
    }
  }, [navigate]);

  //start  a new game
  const newgame = () => {
    navigate("/Day1");
  };

  //continue the level of the player
  const continuegame = () => {
    navigate(setNavigate);
  };

  return (
    <>
      <div className="panel-container">
        <button
          style={{ display: setNewgamedisplay ? "none" : "flex" }}
          onClick={newgame}
        >
          <img src={diamond}></img>New Game
        </button>
        <button
          style={{ display: setNewgamedisplay ? "flex" : "none" }}
          onClick={continuegame}
        >
          <img src={diamond}></img>Continue
        </button>
        <button>
          <img src={diamond}></img>Settings
        </button>
        <button>
          <img src={diamond}></img>Credits
        </button>
      </div>
    </>
  );
}
export default MainPanel;
