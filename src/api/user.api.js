import axios from "axios";

const MOVIE_URL = import.meta.env.VITE__MOVIES_API_URL 

export const login = async (data) => {
    return axios
        .post(MOVIE_URL + '/auth/login', {
            login : data.login,
            password : data.password
        })
        .then(({data}) => {
            console.log('API data', data);
            return {
                data
            }
        })
        
}
export const regis = async (data) => {
    return axios
        .post(MOVIE_URL + '/auth/register', {
            first_name: data.first_name,
	        last_name: data.last_name,
	        birth_date: data.birth_date,
	        login: data.login,
	        email: data.email,
	        password: data.password
        })
        .then(({data}) => {
            console.log('API data', data);
            return {
                data
            }
        })
        
}