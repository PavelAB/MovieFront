import App from "../App";
import AboutPage from "../pages/about/about.page";
import AdminPage from "../pages/admin/admin.page";
import LoginPage from "../pages/auth/login.page";
import RegistrationPage from "../pages/auth/registration.page";
import AwardsPage from "../pages/awards/awards.page";
import NotFoundPage from "../pages/errors/not-found/not-found.page";
import HomePage from "../pages/home/home.page";
import MoviePage from "../pages/movies/movie.page";
import MovieDetailsPage from "../pages/movies/pages/movie-details.page";
import MovieListPage from "../pages/movies/pages/movie-list.page";
import PersonneDetailsPage from "../pages/personnes/pages/personne-details";
import PersonnesPage from "../pages/personnes/personnes.page";

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
            path: 'admin',
            element: <AdminPage />,
            children: [

            ]
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
            path: 'login',
            element: <LoginPage />
        },
        {
            path: 'registration',
            element: <RegistrationPage />
        },
        {
            path: 'stars',
            element: <PersonnesPage/>
        },
        {
            path: 'stars/:detailsId',
            element: <PersonneDetailsPage/>
        },
        {
            path: 'users'
        },
        {
            path: 'awards',
            element: <AwardsPage />
        },
        {
            path: '*',
            element: <NotFoundPage />
        }
    ]        
},

]