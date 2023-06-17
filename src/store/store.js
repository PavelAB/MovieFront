import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movie.reducer";
import testReducer from "./reducers/test.reducer";
import tokenReducer from "./reducers/token.reducer";

const store = configureStore({

    reducer:{
        movie:movieReducer,
        test:testReducer,
        token: tokenReducer
    },


})
export default store