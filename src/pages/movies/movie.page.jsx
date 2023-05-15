import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import SearchBar from "../../components/search-bar/search-bar"
import { useCallback } from "react"

const MoviePage = () => {

    const handleMovieSearch = useCallback( (test) => {
        console.log(test);
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