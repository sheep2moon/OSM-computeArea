import styled from "styled-components";
import { MapContainer, Polygon, TileLayer, useMapEvent } from "react-leaflet";
import { useEffect, useState } from "react";
import { DraggableMarker } from "./components/DraggableMarker";
import { computeArea, LatLng } from "spherical-geometry-js";

function App() {
  const [area, setArea] = useState(0);

  return (
    <AppContainer className="App">
      <h1>{area.toFixed(2)}m2</h1>

      <MapContainer
        center={[51.41006810573438, 22.386360168457035]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapDescend setArea={setArea} />
      </MapContainer>
    </AppContainer>
  );
}

export default App;

const MapDescend = ({ setArea }) => {
  const [markers, setMarkers] = useState([]);

  const map = useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    console.log(lat, lng);
    setMarkers([...markers, [lat, lng]]);
  });

  const handleSetPosition = (position, index) => {
    let newMarkers = [...markers];
    newMarkers[index] = [position.lat, position.lng];
    setMarkers(newMarkers);
  };
  const handleDeleteMarker = (e, index) => {
    e.stopPropagation();
    let newMarkers = [...markers];
    newMarkers.splice(index, 1);
    setMarkers(newMarkers);
  };

  useEffect(() => {
    if (markers.length > 2) {
      const LatLngs = markers.map((marker) => new LatLng(marker[0], marker[1]));
      const computedArea = computeArea(LatLngs);
      if (computedArea) {
        setArea(computedArea);
      }
    } else {
      setArea(0);
    }
  }, [markers]);

  return (
    <>
      {markers.map((marker, index) => (
        <DraggableMarker
          position={marker}
          setPosition={handleSetPosition}
          deleteMarker={handleDeleteMarker}
          index={index}
          key={marker[0] + index}
        />
      ))}
      <Polygon positions={markers} />
    </>
  );
};

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
