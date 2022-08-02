import { Polyline } from "react-leaflet";
import React from "react";
import DraggableMarker from "./DraggableMarker.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changePolylineMarkerPosition, deletePolylineMarker } from "../redux/polylinesSlice.js";
import { selectLayer } from "../redux/selectSlice.js";

const CustomPolyline = ({ polyline, polylineIndex }) => {
    const dispatch = useDispatch();
    const { selected } = useSelector(store => store.select);

    const eventHandlers = {
        click: e => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            handleSelect();
        }
    };

    const handleDeleteMarker = markerIndex => {
        dispatch(deletePolylineMarker({ polylineIndex, markerIndex }));
    };

    const handleMove = (markerIndex, position) => {
        dispatch(changePolylineMarkerPosition({ polylineIndex, markerIndex, position }));
    };

    const handleSelect = () => {
        dispatch(selectLayer({ type: "polyline", index: polylineIndex }));
    };

    return (
        <>
            {polyline.markers.map((marker, index) => (
                <DraggableMarker onLayer="polyline" position={marker} deleteMarker={handleDeleteMarker} handleSelect={handleSelect} handleMove={handleMove} markerIndex={index} key={marker[0] + index}></DraggableMarker>
            ))}
            <Polyline pathOptions={{ color: selected.index === polylineIndex && selected.type === "polyline" ? "#D61C4E" : "#100720", weight: 8 }} positions={polyline.markers} eventHandlers={eventHandlers} />
        </>
    );
};

export default CustomPolyline;
