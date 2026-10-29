import { configureStore } from "@reduxjs/toolkit";
import educationReducer from '../slices/index'

const store = configureStore({
    reducer: {
        education: educationReducer,
    },
});

export default store