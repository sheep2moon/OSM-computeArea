import { configureStore } from "@reduxjs/toolkit";
import figuresReducer from "./figuresSlice.js";
import toolsReducer from "./toolsSlice.js";

export default configureStore({
    reducer: {
        tools: toolsReducer,
        figures: figuresReducer
    }
});
