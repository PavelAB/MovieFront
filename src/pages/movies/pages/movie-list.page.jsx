import { useSelector } from "react-redux"

const MovieListPage = () => {
    const { loading, result, error } = useSelector( state => state.movie )

    if(!result){
        return(
            <div>
                <p>Pas de resultat</p>
            </div>
        )
    }


    return (
        <>
            <div>
                <ul>
                    { result.data.values.map( (test) => (
                        <li>{ test.title }</li>
                    ))

                    }
                </ul>
            </div>
        </>

    )
}
export default MovieListPage