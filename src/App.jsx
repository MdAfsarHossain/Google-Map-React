import GoogleMapReact from 'google-map-react';
import "./App.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const defaultProps = {
    center: {
      lat: 22.341900,
      lng: 91.815536
    },
    zoom: 11
  };

  return (
    <>
      <h1>Google Map + React</h1>
      <div style={{ height: '900px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={22.341900}
          lng={91.815536}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </>
  );
}

export default App;
