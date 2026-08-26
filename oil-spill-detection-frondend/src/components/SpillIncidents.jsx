import { useState } from "react";
export default function SpillIncidents({ records }) {
  const [search, setSearch] = useState("");
  const filtered = records.filter((r) =>
    (r.id + r.location + r.status).toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="view-page">
      <div className="view-heading">
        <div>
          <p>INCIDENT MANAGEMENT</p>
          <h2>Spill incident register</h2>
          <span>Detected and analyst-reviewed SAR anomalies</span>
        </div>
        <button className="action">+ Create incident</button>
      </div>
      <div className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search incident ID or region"
        />
        <button className="filter active">All records</button>
        <button className="filter">Active</button>
        <button className="filter">Review</button>
        <button className="filter">Closed</button>
      </div>
      <article className="panel table-panel">
        <table>
          <thead>
            <tr>
              <th>Incident ID</th>
              <th>Location</th>
              <th>Detected</th>
              <th>Oil spread</th>
              <th>Confidence</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id}>
                <td className="id">{r.id}</td>
                <td>
                  {r.location}
                  <small className="coord">{r.position.join(", ")}</small>
                </td>
                <td>{r.detected}</td>
                <td>{r.area}</td>
                <td>
                  <div className="confidence">
                    <i style={{ width: r.confidence + "%" }} />
                    {r.confidence}%
                  </div>
                </td>
                <td>
                  <span className={"status " + r.status.toLowerCase()}>
                    {r.status}
                  </span>
                </td>
                <td>
                  <button className="row-button">Open &gt;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
