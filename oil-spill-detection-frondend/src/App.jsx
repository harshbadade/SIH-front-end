import { useState } from "react";
import "./App.css";
import DashboardHeader from "./components/DashboardHeader";
import Metrics from "./components/Metrics";
import LiveMap from "./components/LiveMap";
import IncidentList from "./components/IncidentList";
import CandidateCard from "./components/CandidateCard";
import { metrics, incidents, vessels } from "./data/maritime";
export default function App() {
  const [selectedIncident, setIncident] = useState(incidents[0]),
    [selectedVessel, setVessel] = useState(vessels[0]);
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <b>�w^~)�v</b> TIDE<span>WATCH</span>
          <small>OIL-SPILL INTELLIGENCE</small>
        </div>
        <p>MONITOR</p>
        {[
          "Dashboard",
          "Live monitoring map",
          "Spill incidents",
          "Vessel intelligence",
          "Satellite archive",
        ].map((item, i) => (
          <button className={i ? "nav" : "nav active"} key={item}>
            {item}
            {i === 2 && <b>3</b>}
          </button>
        ))}
        <div className="sidebar-foot">
          <b>DEMO MODE</b>
          <span>Static coordinates based on Mumbai Arabian Sea sector.</span>
        </div>
      </aside>
      <main>
        <DashboardHeader />
        <Metrics items={metrics} />
        <section className="operations">
          <LiveMap
            vessels={vessels}
            incident={selectedIncident}
            onSelectVessel={setVessel}
          />
          <IncidentList incidents={incidents} onSelect={setIncident} />
        </section>
        <section className="lower">
          <CandidateCard vessel={selectedVessel} />
          <article className="panel activity">
            <div className="panel-head">
              <div>
                <h2>Detection activity</h2>
                <p>Last 7 days</p>
              </div>
              <span>Detections / Confirmed</span>
            </div>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop stopColor="#2fd8ec" stopOpacity=".30" />
                  <stop offset="1" stopColor="#2fd8ec" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#g)"
                d="M0 112L70 88 142 108 214 56 286 80 358 22 430 65 500 36V150H0Z"
              />
              <path
                className="chart-line"
                d="M0 112L70 88 142 108 214 56 286 80 358 22 430 65 500 36"
              />
              <path
                className="chart-line pale"
                d="M0 130L70 113 142 124 214 94 286 105 358 65 430 98 500 76"
              />
            </svg>
            <div className="dates">
              20 Aug <span>21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
              <span>25</span>
              <span>Today</span>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
