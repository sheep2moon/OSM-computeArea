import { Polygon } from "react-leaflet";
import React from "react";
import DraggableMarker from "./DraggableMarker.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changePolygonMarkerPosition, deletePolygonMarker } from "../redux/polygonsSlice.js";
import { selectLayer } from "../redux/selectSlice.js";

const CustomPolygon = ({ polygon, polygonIndex }) => {
    const dispatch = useDispatch();
    const { selected } = useSelector(store => store.select);

    const eventHandlers = {
        click: e => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            handleSelect();
        }
    };

    const handleDeleteMarker = markerIndex => {
        dispatch(deletePolygonMarker({ polygonIndex, markerIndex }));
    };

    const handleMove = (markerIndex, position) => {
        dispatch(changePolygonMarkerPosition({ polygonIndex, markerIndex, position }));
    };

    const handleSelect = () => {
        dispatch(selectLayer({ type: "polygon", index: polygonIndex }));
    };

    return (
        <>
            {polygon.markers.map((marker, index) => (
                <DraggableMarker onLayer="polygon" position={marker} deleteMarker={handleDeleteMarker} handleSelect={handleSelect} handleMove={handleMove} markerIndex={index} key={marker[0] + index}></DraggableMarker>
            ))}
            <Polygon pathOptions={{ color: selected.index === polygonIndex && selected.type === "polygon" ? "#D61C4E" : "#100720" }} positions={polygon.markers} eventHandlers={eventHandlers} />
        </>
    );
};

export default CustomPolygon;
