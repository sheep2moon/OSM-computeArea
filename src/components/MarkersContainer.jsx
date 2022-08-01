import { useEffect, useState } from "react";
import { Polygon, useMapEvent } from "react-leaflet";
import { computeArea, LatLng } from "spherical-geometry-js";
import DraggableMarker from "./DraggableMarker.jsx";

const MarkersContainer = ({ setArea }) => {
    const [markers, setMarkers] = useState([]);

    const map = useMapEvent("click", e => {
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
            const LatLngs = markers.map(marker => new LatLng(marker[0], marker[1]));
            const computedArea = computeArea(LatLngs);
            if (computedArea) {
                setArea(computedArea.toFixed(2));
            }
        } else {
            setArea(0);
        }
    }, [markers]);

    return (
        <>
            {markers.map((marker, index) => (
                <DraggableMarker position={marker} setPosition={handleSetPosition} deleteMarker={handleDeleteMarker} index={index} key={marker[0] + index} />
            ))}
            <Polygon positions={markers} />
        </>
    );
};

export default MarkersContainer;
