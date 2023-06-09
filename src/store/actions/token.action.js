import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const tokenActionCreate = createAction(
    'token/fetch',
    (value) => {
        return {
            payload: {
                roleResult: value
            }
        }
    }
)