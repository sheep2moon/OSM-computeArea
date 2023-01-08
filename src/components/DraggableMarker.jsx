import { useEffect, useRef } from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import MarkerIcon from "./MarkerIcon.jsx";
import { renderToString } from "react-dom/server";
import { addFigure, addMarker } from "../redux/figuresSlice.js";
import { openFiguresSidebar, setActiveTool } from "../redux/toolsSlice.js";

const DraggableMarker = ({ position, markerIndex, handleMove, handleDelete, handleSelect }) => {
    const markerRef = useRef(null);
    const { activeTool } = useSelector(store => store.tools);
    const { isMarkersVisible } = useSelector(store => store.figures);
    const dispatch = useDispatch();

    const eventHandlers = {
        dragend: () => {
            const marker = markerRef.current;
            if (marker != null) {
                const { lat, lng } = marker.getLatLng();
                const newPosition = [lat, lng];
                handleMove(markerIndex, newPosition);
            }
        },
        click: () => {
            if (activeTool === "delete-marker") {
                handleDelete(markerIndex);
            } else if (activeTool === "select") {
                handleSelect();
            } else if (activeTool === "add-marker") {
                dispatch(addMarker({ markerPosition: position }));
            } else if (activeTool === "add-polygon") {
                dispatch(
                    addFigure({
                        type: "polygon",
                        markerPosition: position
                    })
                );
                dispatch(setActiveTool("add-marker"));
                dispatch(openFiguresSidebar());
            } else if (activeTool === "add-polyline") {
                dispatch(
                    addFigure({
                        type: "polyline",
                        markerPosition: position
                    })
                );
                dispatch(openFiguresSidebar());
                dispatch(setActiveTool("add-marker"));
            }
        }
    };

    useEffect(() => {
        const html = renderToString(<MarkerIcon isMarkerVisible={isMarkersVisible} />);
        const CustomIcon = new L.DivIcon({ html, iconAnchor: [13, 13], iconSize: [22, 22] });
        markerRef.current.setIcon(CustomIcon);
    }, [isMarkersVisible]);

    return <Marker style={{ visibility: "hidden" }} draggable={activeTool === "move-marker" ? true : false} eventHandlers={eventHandlers} position={position} ref={markerRef}></Marker>;
};

export default DraggableMarker;
