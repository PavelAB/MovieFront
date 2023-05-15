import App from "../App";
import AboutPage from "../pages/about/about.page";
import HomePage from "../pages/home/home.page";
import MoviePage from "../pages/movies/movie.page";
import MovieListPage from "../pages/movies/pages/movie-list.page";

export const route = [{
    path: '',
    element: <App/>,
    children: [         
        {
            index: true,
            element: <HomePage />
        },
        {
            path: 'about',
            element: <AboutPage />
        },
        {
            path: 'movie',
            element: <MoviePage />,
            children : [
                {
                    index: true,
                    element: <MovieListPage />
                }
            ]
        },
        {
            path: 'personne'
        },
        {
            path: 'users'
        },
        {
            path: 'awards'
        },
        {
            path: ''
        }
    ]        
},

]