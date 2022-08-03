import { createSlice } from "@reduxjs/toolkit";

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
            state.figures.push({
                name: action.payload.name,
                type: action.payload.type,
                markers: [action.payload.markerPosition],
                area: 0,
                distance: 0
            });
            state.selected = state.figures.length - 1;
        },
        deleteFigure: (state, action) => {
            if (state.selected === action.payload.figureIndex) state.selected = null;
            state.figures.splice(action.payload.figureIndex, 1);
        },
        addMarker: (state, action) => {
            state.figures[state.selected].markers.push(action.payload.markerPosition);
        },
        deleteMarker: (state, action) => {
            state.figures[action.payload.figureIndex].markers.splice(action.payload.markerIndex, 1);
        },
        moveMarker: (state, action) => {
            state.figures[action.payload.figureIndex].markers[action.payload.markerIndex] = action.payload.markerPosition;
        },
        selectFigure: (state, action) => {
            state.selected = action.payload;
        },
        toggleMarkersVisibility: (state, _) => {
            console.log("sw");
            state.isMarkersVisible = !state.isMarkersVisible;
        }
    }
});

export const { addFigure, deleteFigure, addMarker, deleteMarker, moveMarker, selectFigure, toggleMarkersVisibility } = figuresSlice.actions;
export default figuresSlice.reducer;
