import { useMapEvent } from "react-leaflet";
import { useDispatch } from "react-redux";
import { addMarker } from "../redux/mapSlice.js";
import { useSelector } from "react-redux";
import CustomPolygon from "./CustomPolygon.jsx";

const PolygonsContainer = () => {
    const { polygons, currentPolygon } = useSelector(store => store.map);
    const dispatch = useDispatch();

    const map = useMapEvent("click", e => {
        if (currentPolygon > -1) {
            const { lat, lng } = e.latlng;
            dispatch(addMarker([lat, lng]));
        }
    });

    return (
        <>
            {polygons.map((polygon, index) => (
                <CustomPolygon key={"polygon" + index} polygon={polygon} index={index} />
            ))}
        </>
    );
};

export default PolygonsContainer;
