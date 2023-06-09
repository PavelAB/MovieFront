import { useState } from "react"
import { useParams } from "react-router-dom"

const DetailRow = ({ description, definition }) => (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">{description}</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{definition}</dd>
    </div>
)

const FilmForActorRow = ({ movie }) => (
    <li className="flex items-center justify-between py-2 border-b border-gray-300">
        <div className="flex items-center">
            <span className="text-lg font-semibold mr-4">{movie.ID_Iter}</span>
            {/* <img src="https://via.placeholder.com/48" alt="User Avatar" className="w-8 h-8 rounded-full mr-4"> */}
            <span className="text-gray-800 font-semibold">{movie.title} ( {movie.year} ) </span>
        </div>
        <span className={movie.rate >=5 ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>{movie.rate}</span>
    </li>
)


const PersonneDetailsPage = () => {
    const [thatPerson, setThatPerson] = useState()
    const { detailsId } = useParams()
    const id = parseInt(detailsId)

    // const personne = async(id) => {
    //     const personData = await fetchPersonne(id) 
    //     return personData.data
    // }

    const personne = {
        ID_Personne: 1,
        first_name: "Moi",
        last_name: "Actor",
        birth_date: "1996/2/22",
        job: "Actor",
        picture: 'test'
    }
    const films = [{
        title: 'Test',
        year: 2021,
        rate: 8,

    }, {
        title: 'S_Test2',
        year: 2005,
        rate: 3,

    }, {
        title: 'P_Test3',
        year: 1999,
        rate: 4,

    }]


    return (
        <>
            <div className="w-2/3 m-auto my-10">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{personne.first_name} {personne.last_name}</h3>
                    {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"> Movie description. </p> */}
                </div>

                <div className="mt-6 border-t border-gray-100 flex flex-row gap-10 items-center">
                    <img src={"http://localhost:8080" + personne.picture} className="h-96 w-72 object-contain" />
                    <dl className="divide-y divide-gray-100 flex-grow">
                        <DetailRow description='Job' definition={personne.job === null ? 'No information' : personne.job} />
                        <DetailRow description='Birth date' definition={new Date(personne.birth_date).toLocaleDateString()} />
                        <DetailRow description='Total Films' definition={personne.movies > 0 ? ".length" : 0 } />

                    </dl>
                </div>

                <div className=" bg-white shadow-md rounded-md p-4 mx-auto max-w-sm mt-16">
                    <div className="text-xl flex justify-center mb-4">
                        <button className="ButtonsForm">Year</button>
                        <button className="ButtonsForm">Title</button>
                        <button className="ButtonsForm">Rate</button>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">All Films</h2>
                    <ul>
                        {
                            films && films.map((item, index) => {
                                Object.assign(item, { ID_Iter : index + 1 })
                                return <FilmForActorRow movie = {item} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )

}
export default PersonneDetailsPage