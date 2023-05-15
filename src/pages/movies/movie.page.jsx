import { useSelector } from "react-redux"

const MoviePage = () => {

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
            <h2>MoviePage</h2>
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
export default MoviePage