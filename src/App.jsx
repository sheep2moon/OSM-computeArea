import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";
import Sidebar from "./components/Controls/Sidebar.jsx";
import ResultBar from "./components/ResultBar/ResultBar.jsx";
import FiguresContainer from "./components/FiguresContainer.jsx";

function App() {
    return (
        <AppContainer>
            <Sidebar />
            <ResultBar />
            <MapContainer center={[51.41006810573438, 22.386360168457035]} zoom={13} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <FiguresContainer />
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
