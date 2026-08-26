export default function CandidateCard({ vessel }) {
  return (
    <article className="panel candidate">
      <div className="panel-head">
        <div>
          <p>SOURCE CORRELATION</p>
          <h2>Candidate vessel</h2>
        </div>
        <b className="risk">HIGH RISK</b>
      </div>
      <div className="vessel-row">
        <div className="ship-block">SHIP</div>
        <div>
          <h3>{vessel.name}</h3>
          <p>
            {vessel.type} - IMO {vessel.imo}
          </p>
          <code>
            {vessel.position[0].toFixed(4)} N &nbsp;{" "}
            {vessel.position[1].toFixed(4)} E
          </code>
        </div>
      </div>
      <div className="facts">
        <div>
          <span>Correlation score</span>
          <b>94%</b>
          <i />
        </div>
        <div>
          <span>Closest approach</span>
          <b>1.3 km</b>
          <small>24 min before detection</small>
        </div>
        <div>
          <span>Course deviation</span>
          <b>18 deg</b>
          <small>Above normal threshold</small>
        </div>
      </div>
      <button className="investigate">Open vessel investigation &gt;</button>
    </article>
  );
}
