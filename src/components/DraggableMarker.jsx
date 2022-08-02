import { useMemo, useRef } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import { RiDeleteBin2Line } from "react-icons/ri";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeMarkerPosition } from "../redux/mapSlice.js";

const DraggableMarker = ({ position, index, deleteMarker }) => {
    const markerRef = useRef(null);
    const dispatch = useDispatch();

    const eventHandlers = {
        dragend: () => {
            const marker = markerRef.current;
            if (marker != null) {
                const { lat, lng } = marker.getLatLng();
                dispatch(changeMarkerPosition({ index, position: [lat, lng] }));
            }
        }
    };

    return (
        <Marker draggable={true} eventHandlers={eventHandlers} position={position} ref={markerRef}>
            <Popup>
                <DelBtn onClick={e => deleteMarker(e, index)}>
                    <RiDeleteBin2Line />
                </DelBtn>
            </Popup>
        </Marker>
    );
};

export default DraggableMarker;

const DelBtn = styled.button`
    padding: 1rem;
`;
