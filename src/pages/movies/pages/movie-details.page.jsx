import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const DetailRow = ({ description, definition }) => (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">{description}</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{definition}</dd>
    </div>
)
const CommentRow = ({ Comments }) => (
    <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-bold">{Comments.ID_User ? Comments.ID_User : 'Unknown'}</h3>
        <p class="text-gray-700 text-sm mb-2">Posted on {new Date(Comments.createdAt).toLocaleDateString()}</p>
        <p class="text-gray-700">{Comments.body}.
        </p>
        <p className="text-gray-700 flex felx-row justify-end"><span><button className="customButtons">{Comments.like_comment}</button><button className="customButtons">{Comments.dislike_comment}</button></span></p>
    </div>
)




const MovieDetailsPage = () => {

    const { detailsId } = useParams()
    const id = parseInt(detailsId)

    console.log(detailsId);

    const movie = useSelector((state) => state.movie.result.data.values.find((p) => {
        return p.ID_Movie === id
    }))
    console.log(movie);
    return (
        <div>

            <div className="w-2/3 m-auto my-10">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{movie.title}</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"> Movie description. </p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <DetailRow description='Director' definition={movie.Director} />
                        <DetailRow description='Actors' definition=' Not implemented.' />
                        <DetailRow description='Genres' definition=' Not implemented.' />
                        <DetailRow description='Companies' definition=' Not implemented.' />
                        <DetailRow description='Awards' definition=' Not implemented.' />
                        <DetailRow description='Release Date' definition={new Date(movie.release_date).toLocaleDateString()} />
                    </dl>
                </div>

                <div class="bg-white p-6">
                    <h2 class="text-lg font-bold mb-4">Comments</h2>
                    <div class="flex flex-col space-y-4">{
                            movie.Comments && movie.Comments.map( c =>
                                <CommentRow Comments={c}/>
                            )
                        }
                        {/* FIXME Remplacer la forme par une balise JSX et réécrire le style dans un fichier séparé. */}
                        <form class="bg-white p-4 rounded-lg shadow-md">
                            <h3 class="text-lg font-bold mb-2">Add a comment</h3>

                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="comment">
                                    Comment
                                </label>
                                <textarea
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="comment" rows="3" placeholder="Enter your comment"></textarea>
                            </div>
                            <button
                                class="ButtonsForm"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetailsPage