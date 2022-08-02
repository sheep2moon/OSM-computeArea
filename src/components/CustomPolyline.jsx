import { Polyline } from "react-leaflet";
import React from "react";
import DraggableMarker from "./DraggableMarker.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changePolylineMarkerPosition, deletePolylineMarker } from "../redux/polylinesSlice.js";

const CustomPolyline = ({ polyline, polylineIndex }) => {
    const dispatch = useDispatch();
    const { currentPolyline } = useSelector(store => store.polylines);

    const eventHandlers = {
        click: e => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            console.log("polyline click");
        }
    };

    const handleDeleteMarker = markerIndex => {
        dispatch(deletePolylineMarker({ polylineIndex, markerIndex }));
    };

    const handleMove = (markerIndex, position) => {
        dispatch(changePolylineMarkerPosition({ polylineIndex, markerIndex, position }));
    };

    return (
        <>
            {polyline.markers.map((marker, index) => (
                <DraggableMarker position={marker} deleteMarker={handleDeleteMarker} handleMove={handleMove} markerIndex={index} key={marker[0] + index}></DraggableMarker>
            ))}
            <Polyline pathOptions={{ color: currentPolyline === polylineIndex ? "#D61C4E" : "#100720" }} positions={polyline.markers} eventHandlers={eventHandlers} />
        </>
    );
};

export default CustomPolyline;
