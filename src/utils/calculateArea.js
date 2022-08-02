import { computeArea, LatLng } from "spherical-geometry-js";

export const calcArea = markers => {
    let newArea = 0;
    if (markers.length > 2) {
        const LatLngs = markers.map(marker => new LatLng(marker[0], marker[1]));
        newArea = computeArea(LatLngs);
    }
    return newArea;
};
