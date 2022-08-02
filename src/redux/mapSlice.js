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
        addPolygon: (state, _) => {
            state.polygons = [...state.polygons, { area: 0, markers: [] }];
            state.currentPolygon = state.polygons.length - 1;
        },
        setCurrentPolygon: (state, action) => {
            state.currentPolygon = action.payload;
        },
        addMarker: (state, action) => {
            state.polygons[state.currentPolygon].markers.push(action.payload);
            state.polygons[state.currentPolygon].area = calcArea(state.polygons[state.currentPolygon].markers);
        },
        deleteMarker: (state, action) => {
            state.polygons[state.currentPolygon].markers.splice(action.payload, 1);
            state.polygons[state.currentPolygon].area = calcArea(state.polygons[state.currentPolygon].markers);
        },
        changeMarkerPosition: (state, action) => {
            state.polygons[state.currentPolygon].markers[action.payload.index] = action.payload.position;
            state.polygons[state.currentPolygon].area = calcArea(state.polygons[state.currentPolygon].markers);
        },
        resetAll: (state, _) => {
            state.currentPolygon = -1;
            state.polygons = [];
        }
    }
});

export const { addPolygon, addMarker, deleteMarker, changeMarkerPosition, setCurrentPolygon, resetAll } = mapSlice.actions;
export default mapSlice.reducer;
