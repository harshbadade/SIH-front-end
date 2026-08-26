export default function DashboardHeader() {
  return (
    <header className="topbar">
      <div>
        <p>MARITIME INTELLIGENCE / INDIAN WEST COAST</p>
        <h1>
          TIDEWATCH <span>Command Center</span>
        </h1>
      </div>
      <div className="top-actions">
        <span className="live">
          <i /> SENTINEL-1 FEED LIVE
        </span>
        <button className="icon-button">
          bell <b>5</b>
        </button>
        <div className="avatar">NT</div>
      </div>
    </header>
  );
}
