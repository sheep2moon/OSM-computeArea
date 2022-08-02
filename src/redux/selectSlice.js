import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: { type: "", index: null }
};

const selectSlice = createSlice({
    name: "select",
    initialState,
    reducers: {
        selectLayer: (state, action) => {
            state.selected = { type: action.payload.type, index: action.payload.index };
        }
    }
});

export const { selectLayer } = selectSlice.actions;
export default selectSlice.reducer;
