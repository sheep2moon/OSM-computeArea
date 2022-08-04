import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
    selected: null,
    figures: [],
    isMarkersVisible: true
};

const figuresSlice = createSlice({
    name: "figures",
    initialState,
    reducers: {
        addFigure: (state, action) => {
            const newId = uuid();
            state.figures.push({
                id: newId,
                name: action.payload.name,
                type: action.payload.type,
                markers: [action.payload.markerPosition],
                area: 0,
                distance: 0
            });
            state.selected = newId;
        },
        deleteFigure: (state, action) => {
            const figureIndex = state.figures.map(figure => figure.id).indexOf(action.payload.figureId);
            if (state.selected === state.figures[figureIndex].id) {
                state.selected = null;
            }
            state.figures.splice(figureIndex, 1);
        },
        addMarker: (state, action) => {
            const figureIndex = state.figures.map(figure => figure.id).indexOf(state.selected);
            state.figures[figureIndex].markers.push(action.payload.markerPosition);
        },
        deleteMarker: (state, action) => {
            const figureIndex = state.figures.map(figure => figure.id).indexOf(action.payload.figureId);
            if (state.figures[figureIndex].markers.length === 1) {
                state.figures.splice(figureIndex, 1);
            } else {
                state.figures[figureIndex].markers.splice(action.payload.markerIndex, 1);
            }
        },
        moveMarker: (state, action) => {
            const figureIndex = state.figures.map(figure => figure.id).indexOf(action.payload.figureId);
            state.figures[figureIndex].markers[action.payload.markerIndex] = action.payload.markerPosition;
        },
        selectFigure: (state, action) => {
            state.selected = action.payload;
        },
        toggleMarkersVisibility: (state, _) => {
            state.isMarkersVisible = !state.isMarkersVisible;
        }
    }
});

export const { addFigure, deleteFigure, addMarker, deleteMarker, moveMarker, selectFigure, toggleMarkersVisibility } = figuresSlice.actions;
export default figuresSlice.reducer;
