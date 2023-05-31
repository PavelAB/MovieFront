import { createAsyncThunk } from "@reduxjs/toolkit";
import  { fetchMovie }   from '../../api/movie.api'

export const movieActionFetch = createAsyncThunk(
    'movie/fetch',
    async () => {
        return await fetchMovie()
    }
)