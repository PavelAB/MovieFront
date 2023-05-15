import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import SearchBar from "../../components/search-bar/search-bar"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const MoviePage = () => {

    const navigate = useNavigate() 

    const handleMovieSearch = useCallback( (test) => {
        console.log(test);
        navigate('/movie/1')
    })


    return(
        <>
            <div >
                <SearchBar label='Votre text' onSearch={handleMovieSearch}></SearchBar>
            </div>
            <Outlet />
        </>
    )
} 
export default MoviePage