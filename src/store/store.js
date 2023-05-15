import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movie.reducer";

const store = configureStore({

    reducer:{
        movie:movieReducer
    },


})
export default store