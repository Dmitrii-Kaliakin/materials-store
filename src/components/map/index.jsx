import "./styles.css";

export function MapComponent() {
  return (
    <div className="map-container">
      <div className="map-wrapper">
        <iframe
          title="Map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=53.19974%2C56.82745%2C53.21209%2C56.83191&layer=mapnik&marker=56.82968%2C53.20542`}
          style={{ border: 0 }}
        ></iframe>
      </div>
      <div className="address-container">
        <p></p>
      </div>
    </div>
  );
}
