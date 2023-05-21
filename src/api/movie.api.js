import axios from 'axios'

const MOVIE_URL = import.meta.env.VITE__MOVIES_API_URL 

export const fetchMovie = async (  ) => {
    return axios
        .get(MOVIE_URL + '/movies')
        .then(({data}) => {
            console.log('API data', data);
            return {
                data
            }
        })
}

export const newComment = ({body, ID_Movie}) => {
    return axios
        .post(MOVIE_URL + '/comments',{
            body : body,
            like_comment : 0,
            dislike_comment : 0,
            Movies : ID_Movie
    })
        .then(console.log("OK"))
        .catch(console.log("NotOK"))
}

export const getMovieById = async (id) => {
    console.log("id", id);
    console.log(MOVIE_URL + '/movies/' + id);
    return axios
        .get( MOVIE_URL + '/movies/' + id )
        .then(({data}) => {
            console.log('API data', data);
            return {
                data
            }
        })
        
} 

