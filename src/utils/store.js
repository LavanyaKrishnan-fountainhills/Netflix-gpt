import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import movieReducer from "../utils/movieSlice"


export const store = configureStore({
    reducer: {
        user:userReducer,
        movie:movieReducer
    },
})