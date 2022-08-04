import React, { useEffect } from "react";
import { Polygon, Polyline } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { deleteMarker, moveMarker, selectFigure } from "../redux/figuresSlice.js";
import DraggableMarker from "./DraggableMarker.jsx";

const Figure = ({ figure }) => {
    const dispatch = useDispatch();
    const { selected } = useSelector(store => store.figures);

    const eventHandlers = {
        click: e => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            handleMarkerSelect();
        }
    };

    const handleMarkerDelete = markerIndex => {
        dispatch(deleteMarker({ figureId: figure.id, markerIndex }));
    };

    const handleMarkerMove = (markerIndex, markerPosition) => {
        dispatch(moveMarker({ figureId: figure.id, markerIndex, markerPosition }));
    };

    const handleMarkerSelect = () => {
        dispatch(selectFigure(figure.id));
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

    const poylgonPathOptions = {
        color: selected === figure.id ? "#F8B400" : "#827397",
        weight: 2,
        fillOpacity: 0.4
    };

    return (
        <>
            {figure.type === "polygon" && <Polygon pathOptions={poylgonPathOptions} {...figureProps} />}
            {figure.type === "polyline" && <Polyline pathOptions={{ color: selected === figure.id ? "#F8B400" : "#827397", weight: 4 }} {...figureProps} />}
            {figure.markers.map((marker, index) => (
                <DraggableMarker key={`marker${figure.id}-${index}`} position={marker} markerIndex={index} {...markerProps} />
            ))}
        </>
    );
};

export default Figure;
