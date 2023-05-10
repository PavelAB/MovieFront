import axios from 'axios'

const MOVIE_URL = import.meta.env.VITE__MOVIES_API_URL 

const FetchMovie = (  ) => {
    axios.get(MOVIE_URL + '/movies')
        .then(({data}) => {
            console.log('API data', data);
        })
}
export default FetchMovie