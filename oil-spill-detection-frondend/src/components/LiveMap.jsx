import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Polyline,
  Circle,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const icon = (color) =>
  L.divIcon({
    className: "ship-marker",
    html: '<div style="--ship-color:' + color + '">�w^~)�v</div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
export default function LiveMap({ vessels, incident, onSelectVessel }) {
  const spill = [
    [18.49, 72.77],
    [18.47, 72.8],
    [18.455, 72.79],
    [18.44, 72.815],
    [18.43, 72.84],
    [18.445, 72.86],
    [18.46, 72.855],
    [18.47, 72.83],
    [18.485, 72.8],
  ];
  return (
    <article className="panel map-panel">
      <div className="panel-head">
        <div>
          <h2>Live monitoring map</h2>
          <p>AIS vessel tracks + SAR anomaly fusion</p>
        </div>
        <span className="map-tag">STATIC COORDINATES</span>
      </div>
      <div className="map-wrap">
        <MapContainer
          center={incident.position}
          zoom={9}
          scrollWheelZoom
          className="leaflet-map"
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Dark maritime">
              <TileLayer
                attribution="OpenStreetMap, CARTO"
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Street">
              <TileLayer
                attribution="OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          <Polygon
            positions={spill}
            pathOptions={{
              color: "#f0475a",
              fillColor: "#f0475a",
              fillOpacity: 0.34,
              weight: 2,
            }}
          >
            <Popup>
              <b>{incident.id}</b>
              <br />
              Oil anomaly: {incident.area}
              <br />
              {incident.confidence}% confidence
            </Popup>
          </Polygon>
          <Circle
            center={incident.position}
            radius={20000}
            pathOptions={{
              color: "#2fd8ec",
              dashArray: "4 7",
              fillOpacity: 0.03,
            }}
          />
          {vessels.map((v) => (
            <span key={v.imo}>
              <Polyline
                positions={v.track}
                pathOptions={{ color: v.color, dashArray: "3 7", weight: 2 }}
              />
              <Marker
                position={v.position}
                icon={icon(v.color)}
                eventHandlers={{ click: () => onSelectVessel(v) }}
              >
                <Popup>
                  <b>{v.name}</b>
                  <br />
                  IMO {v.imo}
                  <br />
                  {v.speed} kn
                </Popup>
              </Marker>
            </span>
          ))}
        </MapContainer>
        <div className="map-overlay">
          <b>
            <i /> LIVE
          </b>
          <span>{incident.id}</span>
          <small>SAR detection zone</small>
        </div>
        <div className="map-legend">
          <span>
            <i className="cyan" /> Vessel track
          </span>
          <span>
            <i className="red" /> Spill area
          </span>
        </div>
      </div>
      <footer>
        <span>
          <i /> AIS stream refresh: 30 sec
        </span>
        <span>Tiles: OpenStreetMap / CARTO</span>
      </footer>
    </article>
  );
}
