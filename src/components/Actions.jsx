import "./style/actions.css";
import Backtobed from "../assests/svgs/backtobed.svg";

function Actions() {
  const actions = [
    {
      id: 1,
      label: "Get out of bed",
      icon: Backtobed,
    },
    {
      id: 2,

      label: "Take a shower",
    },
    {
      id: 3,

      label: "Write in journal",
    },
    {
      id: 4,

      label: "Go back to sleep",
    },
  ];

  const handleAction = (action) => {
    console.log("Selected:", action.label);
  };

  return (
    <div className="actions-container">
      <h2>What do you want to do?</h2>

      <div className="actions-list">
        {actions.map((action) => (
          <button
            key={action.id}
            className="action-button"
            onClick={() => handleAction(action)}
          >
            <img className="action-icon" src={action.icon}></img>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Actions;
