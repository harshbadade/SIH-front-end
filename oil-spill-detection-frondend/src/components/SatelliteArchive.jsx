export default function SatelliteArchive({ scenes }) {
  return (
    <section className="view-page">
      <div className="view-heading">
        <div>
          <p>SENTINEL-1 SAR ARCHIVE</p>
          <h2>Satellite archive</h2>
          <span>
            Radar acquisitions available for spill verification and comparison
          </span>
        </div>
        <button className="action">Request new scene</button>
      </div>
      <section className="scene-grid">
        {scenes.map((scene, i) => (
          <article className="scene-card" key={scene.id}>
            <div className={"radar radar-" + i}>
              <span>
                {scene.result === "Oil anomaly" ? "OIL SLICK" : "SAR"}
              </span>
            </div>
            <div className="scene-body">
              <b>{scene.result}</b>
              <p>{scene.time}</p>
              <small>{scene.area}</small>
              <code>{scene.id}</code>
              <div>
                <span
                  className={
                    scene.result === "Oil anomaly" ? "anomaly" : "clear"
                  }
                >
                  {scene.confidence === "--"
                    ? "NO CLASSIFICATION"
                    : scene.confidence + " CONFIDENCE"}
                </span>
                <button>Inspect &gt;</button>
              </div>
            </div>
          </article>
        ))}
      </section>
      <article className="panel archive-note">
        <b>Archive note</b>
        <span>
          Sentinel-1 scenes shown are representative static records for the
          project demo. Connect your SAR processing service to replace these
          with operational products.
        </span>
      </article>
    </section>
  );
}
