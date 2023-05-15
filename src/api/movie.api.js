import axios from 'axios'

const MOVIE_URL = import.meta.env.VITE__MOVIES_API_URL 

const fetchMovie = (  ) => {
    return axios
        .get(MOVIE_URL + '/movies')
        .then(({data}) => {
            console.log('API data', data);
            return {
                data
            }
        })
}
export default fetchMovie