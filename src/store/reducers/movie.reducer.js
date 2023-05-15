 import { createReducer } from "@reduxjs/toolkit";
 import { movieActionFetch } from "../actions/movie.action";

 const initialState = {
    loading: false,
    result: null,
    error: null
 }

 const movieReducer = createReducer(initialState, builder => {
    builder
        .addCase(movieActionFetch.pending, (state) => {
            state.loading = true
            state.result = null
            state.error = null
        })
        .addCase(movieActionFetch.fulfilled, ( state, action ) => {
            state.loading = false
            state.result = action.payload
        })
        .addCase(movieActionFetch.rejected, ( state, action ) => {
            state.loading = false
            state.error = action.error
        })
 })
 export default movieReducer