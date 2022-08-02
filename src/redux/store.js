import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSlice.js";

export default configureStore({
    reducer: {
        map: mapReducer
    }
});
