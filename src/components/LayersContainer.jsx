import { useMapEvent } from "react-leaflet";
import { useDispatch } from "react-redux";
import { addMarker, addPolygon, setCurrentPolygon } from "../redux/mapSlice.js";
import { useSelector } from "react-redux";
import CustomPolygon from "./CustomPolygon.jsx";
import { useState } from "react";
import { setActiveTool } from "../redux/toolsSlice.js";
import CustomPolyline from "./CustomPolyline.jsx";
import { addPolyline, addPolylineMarker } from "../redux/polylinesSlice.js";

const LayersContainer = () => {
    const { polygons, currentPolygon } = useSelector(store => store.map);
    const { polylines, currentPolyline } = useSelector(store => store.polylines);
    const { activeTool } = useSelector(store => store.tools);
    const dispatch = useDispatch();

    const map = useMapEvent("click", e => {
        const { lat, lng } = e.latlng;
        const markerPos = [lat, lng];
        if (activeTool === "add-marker-to-polygon") {
            if (currentPolygon >= 0) {
                dispatch(addMarker(markerPosition));
            }
        }
        if (activeTool === "add-marker-to-polyline") {
            if (currentPolyline >= 0) {
                dispatch(addPolylineMarker(markerPos));
            }
        }
        if (activeTool === "add-path") {
            dispatch(addPolyline(markerPos));
            dispatch(setActiveTool("add-marker-to-polyline"));
        }
        if (activeTool === "new-polygon") {
            dispatch(addPolygon(markerPosition));
            dispatch(setActiveTool("add-marker-to-polygon"));
        }
        if (activeTool === "select") {
            dispatch(setCurrentPolygon(-1));
        }
    });

    return (
        <>
            {polygons.map((polygon, index) => (
                <CustomPolygon key={"polygon" + index} polygon={polygon} polygonIndex={index} />
            ))}
            {polylines.map((polyline, index) => (
                <CustomPolyline key={"polyline" + index} polyline={polyline} polylineIndex={index} />
            ))}
        </>
    );
};

export default LayersContainer;
