import { useGameStore } from "../store/Gamestore";
import "./style/stats.css";

function Stats() {
  const { energy, hope, connection, stress } = useGameStore();

  const stats = [
    { name: "Energy", value: energy, className: "progress-energy" },
    { name: "Connection", value: connection, className: "progress-connection" },
    { name: "Hope", value: hope, className: "progress-hope" },
    { name: "Stress", value: stress, className: "progress-stress" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat) => (
        <div className="progress-stats" key={stat.name}>
          <span className="stat-info">
            <h2>{stat.name}</h2>

            <div className="progress-bar">
              <div
                className={stat.className}
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </span>

          <span className="stat-value">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}

export default Stats;
