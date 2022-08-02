import { configureStore } from "@reduxjs/toolkit";
import polygonsReducer from "./polygonsSlice.js";
import polylinesReducer from "./polylinesSlice.js";
import selectReducer from "./selectSlice.js";
import toolsReducer from "./toolsSlice.js";

export default configureStore({
    reducer: {
        tools: toolsReducer,
        polygons: polygonsReducer,
        polylines: polylinesReducer,
        select: selectReducer
    }
});
