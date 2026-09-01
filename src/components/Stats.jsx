import { useGameStore } from "../store/Gamestore";
import "./style/stats.css";

function Stats() {
  const energy = useGameStore((state) => state.energy);
  const hope = useGameStore((state) => state.hope);
  const connection = useGameStore((state) => state.connection);

  return (
    <div className="stats-container">
      <div className="progress-stats">
        <span className="stat-info">
          <h2>Energy</h2>

          <div className="progress-bar">
            <div className="progress-energy" style={{ width: `${energy}%` }} />
          </div>
        </span>

        <span className="stat-value">{energy}</span>
      </div>

      <div className="progress-stats">
        <span className="stat-info">
          <h2>Connection</h2>

          <div className="progress-bar">
            <div
              className="progress-connection"
              style={{ width: `${connection}%` }}
            />
          </div>
        </span>

        <span className="stat-value">{connection}</span>
      </div>

      <div className="progress-stats">
        <span className="stat-info">
          <h2>Hope</h2>

          <div className="progress-bar">
            <div className="progress-hope" style={{ width: `${hope}%` }} />
          </div>
        </span>

        <span className="stat-value">{hope}</span>
      </div>
    </div>
  );
}

export default Stats;
