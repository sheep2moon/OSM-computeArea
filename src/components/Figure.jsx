import React, { useEffect } from "react";
import { Polygon, Polyline } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { deleteMarker, moveMarker, selectFigure } from "../redux/figuresSlice.js";
import DraggableMarker from "./DraggableMarker.jsx";

const Figure = ({ figure, figureIndex }) => {
    const dispatch = useDispatch();
    const { selected } = useSelector(store => store.figures);

    const eventHandlers = {
        click: e => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            dispatch(selectFigure(figureIndex));
        }
    };

    const handleMarkerDelete = markerIndex => {
        dispatch(deleteMarker({ figureIndex, markerIndex }));
    };

    const handleMarkerMove = (markerIndex, markerPosition) => {
        dispatch(moveMarker({ figureIndex, markerIndex, markerPosition }));
    };

    const handleMarkerSelect = () => {
        dispatch(selectFigure(figureIndex));
    };

    const markerProps = {
        handleDelete: handleMarkerDelete,
        handleMove: handleMarkerMove,
        handleSelect: handleMarkerSelect
    };

    const figureProps = {
        eventHandlers: eventHandlers,
        positions: figure.markers
    };

    return (
        <>
            {figure.type === "polygon" && <Polygon pathOptions={{ color: selected === figureIndex ? "#D61C4E" : "#100720", weight: 2 }} {...figureProps} />}
            {figure.type === "polyline" && <Polyline pathOptions={{ color: selected === figureIndex ? "#D61C4E" : "#100720", weight: 6 }} {...figureProps} />}
            {figure.markers.map((marker, index) => (
                <DraggableMarker key={`marker${figureIndex}-${index}`} position={marker} markerIndex={index} {...markerProps} />
            ))}
        </>
    );
};

export default Figure;
