import { Polygon } from "react-leaflet";
import React, { useState } from "react";
import DraggableMarker from "./DraggableMarker.jsx";
import { useDispatch } from "react-redux";
import { deleteMarker, setCurrentPolygon } from "../redux/mapSlice.js";

const CustomPolygon = ({ polygon, index }) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState("#100720");

    const eventHandlers = {
        mouseover: e => {
            setColor("#1C3879");
        },
        mouseout: e => {
            setColor("#100720");
        },
        click: e => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            dispatch(setCurrentPolygon(index));
        }
    };

    const handleDeleteMarker = (e, index) => {
        console.log(e);
        e.stopPropagation();
        dispatch(deleteMarker(index));
    };

    return (
        <>
            {polygon.markers.map((marker, index) => (
                <DraggableMarker position={marker} deleteMarker={handleDeleteMarker} index={index} key={marker[0] + index}></DraggableMarker>
            ))}
            <Polygon pathOptions={{ color }} positions={polygon.markers} eventHandlers={eventHandlers} />
        </>
    );
};

export default CustomPolygon;
