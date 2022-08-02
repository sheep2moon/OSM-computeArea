import { computeLength, LatLng } from "spherical-geometry-js";

export const calcDistance = markers => {
    const LatLngs = markers.map(marker => new LatLng(marker[0], marker[1]));
    const distance = computeLength(LatLngs);
    console.log(distance);
};
