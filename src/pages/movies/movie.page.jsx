import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import SearchBar from "../../components/search-bar/search-bar"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { testActionCreate } from "../../store/actions/test.action"

const MoviePage = () => {

    const navigate = useNavigate() 
    const dispath = useDispatch()


    const handleMovieSearch = useCallback( (test) => {
        console.log(test);
        //navigate('/movie/1')
        dispath(testActionCreate(test))
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