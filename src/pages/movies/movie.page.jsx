import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import SearchBar from "../../components/search-bar/search-bar"
import { useCallback } from "react"
import { testActionCreate } from "../../store/actions/test.action"
import { useEffect } from "react"
import { movieActionFetch } from "../../store/actions/movie.action"
import { useState } from "react"


//FIXME La dimension horizontale n'est pas statique et change en fonction du nombre de films affichés sur la page. C'est un mauvais comportement.

const MoviePage = () => {

    const dispatch = useDispatch()
    const [isOk, setIsOk] = useState(false)

    useEffect(() => {
        console.log("OnMounted");
        const fetchData = async () => {
            dispatch(movieActionFetch())
        }
        fetchData()
            .then(setIsOk(true))
            .catch(console.error)
    }, [])

    console.log(isOk);

    const handleMovieSearch = useCallback((test) => {
        dispatch(testActionCreate(test))
    })


    return (
        <>
            <div className="flex-grow">
                <div>
                    <SearchBar label='Votre text' onSearch={handleMovieSearch}></SearchBar>
                </div>

                <div className="flex">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
export default MoviePage