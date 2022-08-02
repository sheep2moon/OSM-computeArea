import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPolyline: null,
    polylines: []
};

const polylinesSlice = createSlice({
    name: "tools",
    initialState,
    reducers: {
        addPolyline: (state, action) => {
            state.polylines.push({ distance: 0, markers: [action.payload] });
            state.currentPolyline = state.polylines.length - 1;
        },
        addPolylineMarker: (state, action) => {
            state.polylines[state.currentPolyline].markers.push(action.payload);
        },
        movePolylineMarker: (state, action) => {
            state.polylines[action.payload.polylineIndex].markers[action.payload.markerIndex] = action.payload.position;
        },
        deletePolylineMarker: (state, action) => {
            if (state.polylines[action.payload.polylineIndex].markers.length === 1) {
                state.polylines.splice(action.payload.polylineIndex, 1);
            } else {
                state.polylines[action.payload.polylineIndex].markers.splice(action.payload.markerIndex, 1);
            }
        },
        changePolylineMarkerPosition: (state, action) => {
            state.polylines[action.payload.polylineIndex].markers[action.payload.markerIndex] = action.payload.position;
        }
    }
});

export const { addPolyline, addPolylineMarker, movePolylineMarker, deletePolylineMarker, changePolylineMarkerPosition } = polylinesSlice.actions;
export default polylinesSlice.reducer;
