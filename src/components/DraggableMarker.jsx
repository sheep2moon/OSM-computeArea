import { useEffect, useRef } from "react";
import { Marker } from "react-leaflet";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { PinIcon } from "./PinIcon.js";

const DraggableMarker = ({ position, markerIndex, deleteMarker, handleMove }) => {
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
                deleteMarker(markerIndex);
            }
        }
    };

    useEffect(() => {
        console.log(markerRef);
        markerRef.current.setIcon(PinIcon);
    }, []);

    return <Marker draggable={activeTool === "move-marker" ? true : false} eventHandlers={eventHandlers} position={position} ref={markerRef}></Marker>;
};

export default DraggableMarker;

const DelBtn = styled.button`
    padding: 1rem;
`;
