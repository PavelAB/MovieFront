import axios from 'axios'

const MOVIE_URL = import.meta.env.VITE__MOVIES_API_URL 

export const fetchPersonne = async (  ) => {
    return axios
        .get(MOVIE_URL + '/personnes/ID_Personne')
        .then(({data}) => {
            console.log('API data.personne', data);
            return {
                data
            }
        })
}