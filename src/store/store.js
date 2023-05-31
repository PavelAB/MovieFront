import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movie.reducer";
import testReducer from "./reducers/test.reducer";

const store = configureStore({

    reducer:{
        movie:movieReducer,
        test:testReducer
    },


})
export default store