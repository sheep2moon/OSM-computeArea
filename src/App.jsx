import styled from "styled-components";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";

import FiguresContainer from "./components/FiguresContainer.jsx";
import FiguresSidebar from "./components/FiguresSidebar/index.jsx";
import Toolbar from "./components/Toolbar/index.jsx";
import TopBar from "./components/TopBar/index.jsx";
import { useSelector } from "react-redux";
import MobileToolbar from "./components/MobileToolbar/index.jsx";
import { useEffect } from "react";
import { useMemo } from "react";

function App() {
    const { isMobileToolbarOpen } = useSelector(store => store.tools);

    useEffect(() => {
        console.log(isMobileToolbarOpen);
    }, [isMobileToolbarOpen]);

    const borderParams = useMemo(() => {
        return {
            WIDTH: window.innerWidth,
            HEIGHT: window.innerHeight,
            FORMAT: "image/png"
        };
    }, []);
    const planParams = useMemo(() => {
        return {
            WIDTH: window.innerWidth,
            HEIGHT: window.innerHeight,
            FORMAT: "image/png"
        };
    }, []);

    return (
        <AppContainer>
            {isMobileToolbarOpen && <MobileToolbar />}
            <Toolbar />
            <FiguresSidebar />
            <TopBar />
            <MapWrapper>
                <MapContainer center={[51.41006810573438, 22.386360168457035]} zoom={13} maxZoom={22} scrollWheelZoom={true}>
                    <TileLayer maxNativeZoom={19} maxZoom={22} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <WMSTileLayer transparent={true} layers="dzialki" params={borderParams} url="https://integracja01.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow?" maxZoom={22} />
                    {/* <WMSTileLayer transparent={true} layers="przewod_wodociagowy" params={planParams} url="https://integracja01.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow?" maxZoom={22} /> */}

                    <FiguresContainer />
                </MapContainer>
            </MapWrapper>
        </AppContainer>
    );
}

// https://integracja01.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow?&service=WMS&request=GetMap&layers=&styles=&format=image%2Fjpeg&transparent=false&version=1.1.1&VERSION=1.3.0&SERVICE=WMS&REQUEST=GetMap&SRS=EPSG%3A2180&WIDTH=1120&HEIGHT=605&TRANSPARENT=TRUE&FORMAT=image%2Fpng&BBOX=659944.766407799%2C486467.44840687%2C660557.657032805%2C486824.870281908&LAYERS=dzialki&width=256&height=256&srs=EPSG%3A3857&bbox=2480228.6937973993,6697106.670234004,2485120.6636076504,6701998.640044253

// https://mapy.geoportal.gov.pl/wss/ext/KrajowaIntegracjaMiejscowychPlanowZagospodarowaniaPrzestrzennego?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetFeatureInfo&LAYERS=granice,raster,wektor-str,wektor-lzb,wektor-lin,wektor-pow,wektor-pkt&QUERY_LAYERS=granice,raster,wektor-str,wektor-lzb,wektor-lin,wektor-pow,wektor-pkt&SRS=EPSG:2180&WIDTH=1570&HEIGHT=916&X=458&Y=785&TRANSPARENT=TRUE&FORMAT=image/png&BBOX=659944.766407799,486467.44840687,660557.657032805,486824.870281908&INFO_FORMAT=text/html

// https://integracja01.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&LAYERS=dzialki,numery_dzialek,budynki&SRS=EPSG:2180&WIDTH=1570&HEIGHT=916&TRANSPARENT=TRUE&FORMAT=image/png&BBOX=659944.766407799,486467.44840687,660557.657032805,486824.870281908

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
