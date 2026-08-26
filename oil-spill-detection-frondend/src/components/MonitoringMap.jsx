import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const icon = L.divIcon({
  className: "ship-marker",
  html: '<div style="--ship-color:#2fd8ec"?�</div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});
export default function MonitoringMap({ records, spills }) {
  return (
    <section className="view-page">
      <div className="view-heading">
        <div>
          <p>LIVE MONITORING</p>
          <h2>Maritime tracking map</h2>
          <span>Static AIS positions around the Mumbai Arabian Sea sector</span>
        </div>
        <span className="live">
          <i /> AIS SIMULATION ACTIVE
        </span>
      </div>
      <article className="panel full-map">
        <MapContainer center={[18.55, 72.83]} zoom={9} className="leaflet-map">
          <TileLayer
            attribution="OpenStreetMap, CARTO"
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {records.map((v) => (
            <Marker key={v.mmsi} position={v.position} icon={icon}>
              <Popup>
                <b>{v.name}</b>
                <br />
                MMSI {v.mmsi}
                <br />
                {v.speed} / {v.heading}
              </Popup>
            </Marker>
          ))}
          {spills
            .filter((s) => s.location === "Arabian Sea")
            .map((s) => (
              <CircleMarker
                key={s.id}
                center={s.position}
                radius={11}
                pathOptions={{
                  color: "#f0475a",
                  fillColor: "#f0475a",
                  fillOpacity: 0.7,
                }}
              >
                <Popup>
                  <b>{s.id}</b>
                  <br />
                  {s.confidence}% oil anomaly confidence
                </Popup>
              </CircleMarker>
            ))}
        </MapContainer>
        <div className="map-overlay">
          <b>
            <i /> LIVE MONITORING
          </b>
          <span>6 vessel tracks</span>
          <small>2 active spill alerts</small>
        </div>
      </article>
      <div className="map-summary">
        <span>
          <b>6</b> monitored vessels
        </span>
        <span>
          <b>2</b> active spills
        </span>
        <span>
          <b>20 km</b> search radius
        </span>
        <span>
          <b>30 sec</b> refresh interval
        </span>
      </div>
    </section>
  );
}
