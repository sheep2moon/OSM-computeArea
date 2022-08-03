import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTool: "select",
    isFiguresSidebarOpen: true
};

const toolsSlice = createSlice({
    name: "tools",
    initialState,
    reducers: {
        setActiveTool: (state, action) => {
            state.activeTool = action.payload;
        }
    }
});

export const { setActiveTool } = toolsSlice.actions;
export default toolsSlice.reducer;
