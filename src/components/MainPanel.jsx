import "./style/mainpanel.css";
import diamond from "../assests/svgs/diamond.svg";

function MainPanel() {
  return (
    <>
      <div className="panel-container">
        <button>
          <img src={diamond}></img>New Game
        </button>
        <button>
          {" "}
          <img src={diamond}></img>Continue
        </button>
        <button>
          {" "}
          <img src={diamond}></img>Settings
        </button>
        <button>
          {" "}
          <img src={diamond}></img>Credits
        </button>
      </div>
    </>
  );
}
export default MainPanel;
