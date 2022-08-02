import { createSlice } from "@reduxjs/toolkit";
import { calcArea } from "../utils/calculateArea.js";

const initialState = {
    polygons: []
};

const polygonsSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        addPolygon: (state, action) => {
            state.polygons = [...state.polygons, { area: 0, markers: [action.payload] }];
        },
        addPolygonMarker: (state, action) => {
            state.polygons[action.payload.polygonIndex].markers.push(action.payload.markerPosition);
            state.polygons[action.payload.polygonIndex].area = calcArea(state.polygons[action.payload.polygonIndex].markers);
        },
        deletePolygonMarker: (state, action) => {
            if (state.polygons[action.payload.polygonIndex].markers.length === 1) {
                state.polygons.splice(action.payload.polygonIndex, 1);
                action.payload.polygonIndex = -1;
            } else {
                state.polygons[action.payload.polygonIndex].markers.splice(action.payload.markerIndex, 1);
                state.polygons[action.payload.polygonIndex].area = calcArea(state.polygons[action.payload.polygonIndex].markers);
            }
        },
        changePolygonMarkerPosition: (state, action) => {
            state.polygons[action.payload.polygonIndex].markers[action.payload.markerIndex] = action.payload.position;
            state.polygons[action.payload.polygonIndex].area = calcArea(state.polygons[action.payload.polygonIndex].markers);
        },
        resetAll: (state, _) => {
            state.polygons = [];
        }
    }
});

export const { addPolygon, addPolygonMarker, deletePolygonMarker, changePolygonMarkerPosition, resetAll } = polygonsSlice.actions;
export default polygonsSlice.reducer;
