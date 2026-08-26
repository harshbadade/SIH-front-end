import { useState } from "react";
export default function VesselIntelligence({ records }) {
  const [selected, setSelected] = useState(records[0]);
  return (
    <section className="view-page">
      <div className="view-heading">
        <div>
          <p>AIS VESSEL TRACKING</p>
          <h2>Vessel intelligence</h2>
          <span>
            Candidate vessels within a 20 km spill-origin search radius
          </span>
        </div>
        <button className="action">Export AIS evidence</button>
      </div>
      <div className="vessel-layout">
        <article className="panel vessel-list">
          <div className="panel-head">
            <h2>Tracked vessels</h2>
            <span>{records.length} records</span>
          </div>
          {records.map((v) => (
            <button
              onClick={() => setSelected(v)}
              className={
                "vessel-item " + (selected.mmsi === v.mmsi ? "active" : "")
              }
              key={v.mmsi}
            >
              <div>
                <b>{v.name}</b>
                <small>
                  MMSI {v.mmsi} - {v.type}
                </small>
              </div>
              <span className={v.risk.toLowerCase()}>{v.distance}</span>
            </button>
          ))}
        </article>
        <article className="panel vessel-profile">
          <div className="profile-top">
            <div className="large-ship">SHIP</div>
            <div>
              <p>SELECTED VESSEL</p>
              <h2>{selected.name}</h2>
              <span>
                MMSI {selected.mmsi} - {selected.flag}
              </span>
            </div>
            <b className={"status " + selected.risk.toLowerCase()}>
              {selected.risk} RISK
            </b>
          </div>
          <div className="profile-stats">
            <div>
              <span>Speed</span>
              <b>{selected.speed}</b>
            </div>
            <div>
              <span>Heading</span>
              <b>{selected.heading}</b>
            </div>
            <div>
              <span>Spill distance</span>
              <b>{selected.distance}</b>
            </div>
            <div>
              <span>Correlation</span>
              <b>94%</b>
            </div>
          </div>
          <div className="evidence-box">
            <h3>Correlation evidence</h3>
            <ul>
              <li>AIS track intersects estimated spill origin zone.</li>
              <li>Speed reduction observed 24 minutes before detection.</li>
              <li>Course deviation exceeds vessel historical route pattern.</li>
              <li>
                Position: {selected.position[0].toFixed(4)} N,{" "}
                {selected.position[1].toFixed(4)} E
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
