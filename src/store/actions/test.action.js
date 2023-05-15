import { createAction } from "@reduxjs/toolkit";

export const testActionCreate = createAction('test/create',(value) => {
    return {
        payload: {
            searchResult: value
        }
    }
})