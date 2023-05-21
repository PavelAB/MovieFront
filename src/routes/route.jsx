import App from "../App";
import AboutPage from "../pages/about/about.page";
import NotFoundPage from "../pages/errors/not-found/not-found.page";
import HomePage from "../pages/home/home.page";
import MoviePage from "../pages/movies/movie.page";
import MovieDetailsPage from "../pages/movies/pages/movie-details.page";
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
                },
            ]
        },
        {
            path: 'movie/:detailsId',
            element: <MovieDetailsPage />
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
            path: '*',
            element: <NotFoundPage />
        }
    ]        
},

]