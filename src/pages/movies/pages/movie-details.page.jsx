import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {

    const {detailsId} = useParams()
    const id = parseInt(detailsId)

    console.log(detailsId);

    const movie = useSelector((state) => state.movie.result.data.values.find((p) => {
        return p.ID_Movie === id}))

    return (
        <h1>MovieDetailsPage</h1>
    )
}
export default MovieDetailsPage