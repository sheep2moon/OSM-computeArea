import { useMapEvent } from "react-leaflet";
import { useDispatch } from "react-redux";
import { addPolygonMarker, addPolygon, deletePolygonMarker } from "../redux/polygonsSlice.js";
import { useSelector } from "react-redux";
import CustomPolygon from "./CustomPolygon.jsx";
import { setActiveTool } from "../redux/toolsSlice.js";
import CustomPolyline from "./CustomPolyline.jsx";
import { addPolyline, addPolylineMarker } from "../redux/polylinesSlice.js";
import { selectLayer } from "../redux/selectSlice.js";
import { useEffect } from "react";

const LayersContainer = () => {
    const { polygons } = useSelector(store => store.polygons);
    const { polylines } = useSelector(store => store.polylines);
    const { activeTool } = useSelector(store => store.tools);
    const { selected } = useSelector(store => store.select);
    const dispatch = useDispatch();

    const map = useMapEvent("click", e => {
        const { lat, lng } = e.latlng;
        const markerPosition = [lat, lng];
        if (activeTool === "add-marker-to-polygon") {
            if (selected.type === "polygon") {
                dispatch(addPolygonMarker({ polygonIndex: selected.index, markerPosition }));
            } else {
                //TODO DISPLAY MESSAGE "SELECT POLYGON FIRST"
            }
        }
        if (activeTool === "add-marker-to-polyline") {
            if (selected.type === "polyline") {
                dispatch(addPolylineMarker({ polylineIndex: selected.index, markerPosition }));
            } else {
                //TODO DISPLAY MESSAGE "SELECT POLYLINE FIRST"
            }
        }
        if (activeTool === "add-polyline") {
            dispatch(addPolyline(markerPosition));
            dispatch(selectLayer({ type: "polyline", index: polylines.length }));
            dispatch(setActiveTool("add-marker-to-polyline"));
        }
        if (activeTool === "add-polygon") {
            dispatch(addPolygon(markerPosition));
            dispatch(selectLayer({ type: "polygon", index: polygons.length }));
            dispatch(setActiveTool("add-marker-to-polygon"));
        }
    });

    useEffect(() => {
        if (selected.type === "polygon") {
            if (polygons[selected.index].markers.length === 0) {
                dispatch(selectLayer({ type: "", index: null }));
            }
        }
        if (selected.type === "polyline") {
            if (polylines[selected.index].markers.length === 0) {
                dispatch(selectLayer({ type: "", index: null }));
            }
        }
    }, [polygons, polylines]);

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
