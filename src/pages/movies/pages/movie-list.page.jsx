import { useSelector } from "react-redux"



//FIXME Rajoute une petite couverture pour chaque élément, ajoutez la fonctionnalité de notation (rate) et utilise des classes CSS pour une présentation plus propre. 
const MovieBody = ({title, Actors, Writers, Director, Ratings, Comments, release_date}) => (
    <a className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/5 transition-all hover:bg-black/10 flex flex-col items-stretch justify-start gap-2">
        <h2 className="font-mono font-bold text-lg">{title}</h2>
        <p className="text-xs">Director : {Director}</p>
        <span>{ Comments ? "Comments : " + Comments.length : 0}</span>
    </a>
)



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
            <div className="w-screen p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    { result.data.values.map( (test) => (
                        <MovieBody {...test} key={test.Movie_ID}/>
                    ))

                    }
                </div>
                
            </div>
        </>

    )
}
export default MovieListPage