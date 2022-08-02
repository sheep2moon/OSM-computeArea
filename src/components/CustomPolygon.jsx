import { Polygon } from "react-leaflet";
import React from "react";
import DraggableMarker from "./DraggableMarker.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changePolygonMarkerPosition, deletePolygonMarker, setCurrentPolygon } from "../redux/mapSlice.js";

const CustomPolygon = ({ polygon, polygonIndex }) => {
    const dispatch = useDispatch();
    const { currentPolygon } = useSelector(store => store.map);

    const eventHandlers = {
        click: e => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            dispatch(setCurrentPolygon(polygonIndex));
        }
    };

    const handleDeleteMarker = markerIndex => {
        dispatch(deletePolygonMarker({ polygonIndex, markerIndex }));
    };

    const handleMove = (markerIndex, position) => {
        dispatch(changePolygonMarkerPosition({ polygonIndex, markerIndex, position }));
    };

    return (
        <>
            {polygon.markers.map((marker, index) => (
                <DraggableMarker position={marker} deleteMarker={handleDeleteMarker} handleMove={handleMove} markerIndex={index} key={marker[0] + index}></DraggableMarker>
            ))}
            <Polygon pathOptions={{ color: currentPolygon === polygonIndex ? "#D61C4E" : "#100720" }} positions={polygon.markers} eventHandlers={eventHandlers} />
        </>
    );
};

export default CustomPolygon;
