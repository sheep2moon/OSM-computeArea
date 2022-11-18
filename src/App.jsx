import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";

import FiguresContainer from "./components/FiguresContainer.jsx";
import FiguresSidebar from "./components/FiguresSidebar/index.jsx";
import Toolbar from "./components/Toolbar/index.jsx";
import TopBar from "./components/TopBar/index.jsx";
import { useSelector } from "react-redux";
import MobileToolbar from "./components/MobileToolbar/index.jsx";
import { useEffect } from "react";

function App() {
    const { isMobileToolbarOpen } = useSelector(store => store.tools);

    useEffect(() => {
        console.log(isMobileToolbarOpen);
    }, [isMobileToolbarOpen]);

    return (
        <AppContainer>
            {isMobileToolbarOpen && <MobileToolbar />}
            <Toolbar />
            <FiguresSidebar />
            <TopBar />
            <MapWrapper>
                <MapContainer center={[51.41006810573438, 22.386360168457035]} zoom={13} maxZoom={22} scrollWheelZoom={true}>
                    <TileLayer maxNativeZoom={19} maxZoom={22} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <FiguresContainer />
                </MapContainer>
            </MapWrapper>
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

const MapWrapper = styled.div`
    margin-top: 4rem;
    width: 100vw;
    height: calc(100vh - 4rem);
    @media screen and (min-width: 768px) {
        margin-left: 4rem;
        width: calc(100vw - 4rem);
    }
`;
