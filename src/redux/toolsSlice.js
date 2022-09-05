import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTool: "select",
    isMobileToolbarOpen: false,
    isFiguresSidebarOpen: false
};

const toolsSlice = createSlice({
    name: "tools",
    initialState,
    reducers: {
        setActiveTool: (state, action) => {
            state.activeTool = action.payload;
        },
        openFiguresSidebar: state => {
            state.isFiguresSidebarOpen = true;
        },
        closeFiguresSidebar: state => {
            state.isFiguresSidebarOpen = false;
        },
        openToolbar: state => {
            state.isMobileToolbarOpen = true;
        },
        closeToolbar: state => {
            state.isMobileToolbarOpen = false;
        }
    }
});

export const { setActiveTool, isMobileToolbarOpen, isFiguresSidebarOpen, openFiguresSidebar, closeFiguresSidebar, openToolbar, closeToolbar } = toolsSlice.actions;
export default toolsSlice.reducer;
