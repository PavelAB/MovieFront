import { useDispatch } from "react-redux"
import { movieActionFetch } from "../../store/actions/movie.action"
import fetchMovie from "../../api/movie.api"

const AboutPage = () => {

    const dispath = useDispatch()

    const handleSearchSubmit = ((e) => {
        e.preventDefault()
        dispath(movieActionFetch())
    })


    return (
        <>
            <h1>About</h1>
            <form onSubmit={handleSearchSubmit}>
                <button type="sunbmit">GO !</button>
            </form>
        </>
    )
}
export default AboutPage