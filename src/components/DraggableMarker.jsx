import { useEffect, useRef } from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import { useSelector } from "react-redux";
import MarkerIcon from "./MarkerIcon.jsx";
import { renderToString } from "react-dom/server";

const DraggableMarker = ({ position, markerIndex, handleMove, handleDelete, handleSelect }) => {
    const markerRef = useRef(null);
    const { activeTool } = useSelector(store => store.tools);

    const eventHandlers = {
        dragend: () => {
            const marker = markerRef.current;
            if (marker != null) {
                const { lat, lng } = marker.getLatLng();
                const newPosition = [lat, lng];
                handleMove(markerIndex, newPosition);
            }
        },
        click: () => {
            if (activeTool === "delete-marker") {
                handleDelete(markerIndex);
            }
            if (activeTool === "select") {
                handleSelect();
            }
        }
    };

    useEffect(() => {
        const html = renderToString(<MarkerIcon />);
        const CustomIcon = new L.DivIcon({ html, iconAnchor: [13, 13], iconSize: [22, 22] });
        markerRef.current.setIcon(CustomIcon);
    }, []);

    return <Marker style={{ visibility: "hidden" }} draggable={activeTool === "move-marker" ? true : false} eventHandlers={eventHandlers} position={position} ref={markerRef}></Marker>;
};

export default DraggableMarker;
