import { createSlice } from "@reduxjs/toolkit";
import { calcArea } from "../utils/calculateArea.js";

const initialState = {
    currentPolygon: -1,
    polygons: []
};

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        addPolygon: (state, action) => {
            state.polygons = [...state.polygons, { area: 0, markers: [action.payload] }];
            state.currentPolygon = state.polygons.length - 1;
        },
        setCurrentPolygon: (state, action) => {
            state.currentPolygon = action.payload;
        },
        addMarker: (state, action) => {
            state.polygons[state.currentPolygon].markers.push(action.payload);
            state.polygons[state.currentPolygon].area = calcArea(state.polygons[state.currentPolygon].markers);
        },
        deletePolygonMarker: (state, action) => {
            if (state.polygons[action.payload.polygonIndex].markers.length === 1) {
                state.polygons.splice(action.payload.polygonIndex, 1);
                state.currentPolygon = -1;
            } else {
                state.polygons[action.payload.polygonIndex].markers.splice(action.payload.markerIndex, 1);
                state.polygons[state.currentPolygon].area = calcArea(state.polygons[state.currentPolygon].markers);
            }
        },
        changePolygonMarkerPosition: (state, action) => {
            state.polygons[action.payload.polygonIndex].markers[action.payload.markerIndex] = action.payload.position;
            state.polygons[action.payload.polygonIndex].area = calcArea(state.polygons[state.currentPolygon].markers);
        },
        resetAll: (state, _) => {
            state.currentPolygon = -1;
            state.polygons = [];
        }
    }
});

export const { addPolygon, addMarker, deletePolygonMarker, changePolygonMarkerPosition, setCurrentPolygon, resetAll } = mapSlice.actions;
export default mapSlice.reducer;
