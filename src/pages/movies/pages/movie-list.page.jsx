import { useState } from "react"
import { useEffect } from "react"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



//FIXME Rajoute une petite couverture pour chaque élément, ajoutez la fonctionnalité de notation (rate) et utilise des classes CSS pour une présentation plus propre. 
const MovieBody = ({ ID_Movie, title, Actors, Writers, Director, Ratings, Comments, release_date, onDetail }) => (
    <a className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/5 transition-all hover:bg-black/10 flex flex-col items-stretch justify-start gap-2"
        onClick={() => onDetail(ID_Movie)}>
        <h2 className="font-mono font-bold text-lg">{title}</h2>
        <p className="text-xs">Director : {Director ? `${Director.first_name} ${Director.last_name}`  : 'No Information'}</p>
        <p className=" flex felx-row justify-start ">
            <span className="mr-3">{Comments ? "Comments : " + Comments.length : 0}</span>
            <span>Rate : {(Ratings && Ratings.length > 0) ? Ratings.reduce((acc, currVal) => acc + currVal.rate_picture, 0) / Ratings.length : 'N/A'}</span>
        </p>
    </a>
)



const MovieListPage = () => {


    const { loading, result, error } = useSelector(state => state.movie)
    const messageFromMovieSearch = useSelector(state => state.test.searchResult)

    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (!result) { return; }

        setMovies(
            result?.data.values.filter((m) => {
                return m.title.toLowerCase().includes(messageFromMovieSearch.toLowerCase())
            })
        )

        console.log("input", messageFromMovieSearch);
        console.log("setMovies", movies);
    }, [messageFromMovieSearch, result])


    const navigate = useNavigate()

    const handleDetail = useCallback((detailsId) => {
        navigate('/movie/' + detailsId)
    })


    useEffect(() => {
        console.log('Render');
    })


    if (!result) {
        return (
            <div>
                <p>Pas de resultat</p>
            </div>
        )
    }

    return (
        <>
            <div className="w-screen p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {movies.map((movie) => (
                        <MovieBody {...movie} key = {movie.Movie_ID}
                            onDetail = {handleDetail} />
                    ))

                    }
                </div>

            </div>
        </>

    )
}
export default MovieListPage