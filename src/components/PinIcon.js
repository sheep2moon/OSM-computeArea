import L from "leaflet";
import iconSvg from "../assets/map-pin2.svg";

const PinIcon = new L.Icon({
    iconUrl: iconSvg,
    iconRetinaUrl: iconSvg,
    iconAnchor: [30, 57],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: "leaflet-div-icon"
});

export { PinIcon };
