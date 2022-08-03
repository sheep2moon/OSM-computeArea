import React from "react";
import { useMapEvent } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { addFigure, addMarker, deleteMarker, moveMarker } from "../redux/figuresSlice.js";
import { setActiveTool } from "../redux/toolsSlice.js";
import Figure from "./Figure.jsx";

const FiguresContainer = () => {
    const { figures } = useSelector(store => store.figures);
    const { activeTool } = useSelector(store => store.tools);
    const dispatch = useDispatch();

    useMapEvent("click", e => {
        const { lat, lng } = e.latlng;
        const markerPosition = [lat, lng];
        if (activeTool === "add-polygon") {
            dispatch(
                addFigure({
                    name: `polygon${figures.length}`,
                    type: "polygon",
                    markerPosition
                })
            );
            dispatch(setActiveTool("add-marker"));
        }
        if (activeTool === "add-polyline") {
            dispatch(
                addFigure({
                    name: `polyline${figures.length}`,
                    type: "polyline",
                    markerPosition
                })
            );
            dispatch(setActiveTool("add-marker"));
        }
        if (activeTool === "add-marker") {
            dispatch(addMarker({ markerPosition }));
        }
    });

    return (
        <>
            {figures.map((figure, index) => (
                <Figure key={figure.type + index} figure={figure} figureIndex={index} />
            ))}
        </>
    );
};

export default FiguresContainer;
