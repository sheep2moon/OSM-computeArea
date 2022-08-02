import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSlice.js";
import polylinesReducer from "./polylinesSlice.js";
import toolsReducer from "./toolsSlice.js";

export default configureStore({
    reducer: {
        map: mapReducer,
        tools: toolsReducer,
        polylines: polylinesReducer
    }
});
