import { createReducer } from "@reduxjs/toolkit"
import { testActionCreate } from "../actions/test.action"

const initialState = {
    searchResult: ""
}

const testReducer = createReducer(initialState, (builder) => {
    builder 
        .addCase(testActionCreate, (state, action) => {
            state.searchResult = action.payload.searchResult
        })
})

export default testReducer