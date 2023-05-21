import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import SearchBar from "../../components/search-bar/search-bar"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { testActionCreate } from "../../store/actions/test.action"
import { useEffect } from "react"
import { movieActionFetch } from "../../store/actions/movie.action"
import { useState } from "react"

const MoviePage = () => {

    const dispatch = useDispatch()
    const [ isOk, setIsOk ] = useState(false)

    useEffect(() => {
        console.log("OnMounted");
        const fetchData = async () => {
            dispatch(movieActionFetch())
        }
        fetchData()
            .then(setIsOk(true))
            .catch(console.error)
    },[])

    console.log(isOk);

    const handleMovieSearch = useCallback( (test) => {
        console.log(test);
        //navigate('/movie/1')
        dispatch(testActionCreate(test))
    })


    return(
        <>
            <div >
                <SearchBar label='Votre text' onSearch={handleMovieSearch}></SearchBar>
            </div>
            
            <div className="flex">
                 <Outlet />
            </div>
            
        </>
    )
} 
export default MoviePage