import { createReducer } from "@reduxjs/toolkit"
import { tokenActionCreate } from "../actions/token.action"



const initialState = {
    roleResult: ""
}

const tokenReducer = createReducer(initialState, (builder) => {
    builder 
        .addCase(tokenActionCreate, (state, action) => {
            state.roleResult = action.payload.roleResult
        })
})

export default tokenReducer