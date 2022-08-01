import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";
import MarkersContainer from "./components/MarkersContainer.jsx";
import Sidebar from "./components/Controls/Sidebar.jsx";
import ResultBar from "./components/ResultBar.jsx";

function App() {
    const [area, setArea] = useState(0);

    return (
        <AppContainer>
            <Sidebar />
            <ResultBar area={area} />
            <h1>{area}</h1>

            <MapContainer center={[51.41006810573438, 22.386360168457035]} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkersContainer setArea={setArea} />
            </MapContainer>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
