export default function IncidentList({ incidents, onSelect }) {
  return (
    <article className="panel incidents">
      <div className="panel-head">
        <div>
          <h2>Priority incidents</h2>
          <p>Requiring analyst review</p>
        </div>
        <button>View all &gt;</button>
      </div>
      {incidents.map((incident, index) => (
        <button
          className={"incident " + (!index ? "selected" : "")}
          onClick={() => onSelect(incident)}
          key={incident.id}
        >
          <i />
          <div>
            <strong>{incident.title}</strong>
            <time>{incident.age}</time>
            <p>
              {incident.id} - {incident.position[0].toFixed(3)} N,{" "}
              {incident.position[1].toFixed(3)} E
            </p>
            <b>{incident.severity}</b>
            <small>{incident.confidence}% confidence</small>
          </div>
          <span>&gt;</span>
        </button>
      ))}
      <button className="queue">Review detection queue &gt;</button>
    </article>
  );
}
