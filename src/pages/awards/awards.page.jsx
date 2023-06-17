import { useState } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'
import { v4 as uuidv4 } from 'uuid'


const TextZone = ({ text, ajout }) => {
    return (
        <div class="flex items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
            <p onClick={() => {
                ajout(text)}}>{text}</p>
        </div>
        )
}
const TableRowResult = ({ row }) => {
    return (
        <tr class={row.ID_Iter % 2 === 0 ? "bg-gray-100 border-b" : "bg-white border-b"}>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.ID_Iter}</td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {row.type_award}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {row.name_award}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {row.year_award}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {row.ID_Personne}
            </td>
        </tr>
    )
}


const AwardsPage = () => {

    const [typeAwardToBack, setTypeAwardToBack] = useState([])
    const [yearAwardToBack, setYearAwardToBack] = useState([])


    const types = ["test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1"]
    const years = [
        2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
        2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]

    const awPers = [{
        type_award: 'Oscar',
        name_award: 'test_test',
        year_award: 2021,
        ID_Personne: 1
    },
    {
        type_award: 'Oscar',
        name_award: 'test_actor',
        year_award: 2021,
        ID_Personne: 2
    }, {
        type_award: 'Oscar',
        name_award: 'test_director',
        year_award: 2021,
        ID_Personne: 3
    }]

    const handleSubmitYear = (text) => {
        console.log(text);
        setTypeAwardToBack((typeAwardToBack) => [...typeAwardToBack, text])
    }

    const handleSubmitType = (text) => {
        console.log(text);
        setYearAwardToBack((yearAwardToBack) => [...yearAwardToBack, text])
    }

    return (



        <>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                        <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Type Award</h2>

                    </div>

                    <div className=" w-full flex flex-row justify-between overflow-x-auto ">
                        {
                            types && types.map((item) => {
                                return <TextZone key={uuidv4()}
                                    text={item} ajout={handleSubmitType}/>
                            })
                        }


                    </div>
                    <div class="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                        <h2 class="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Type Year</h2>

                    </div>

                    <div className=" w-full flex flex-row justify-between overflow-x-auto ">
                        {
                            types && years.map((item) => {
                                return <TextZone key={uuidv4()}
                                    text={item} ajout={handleSubmitYear} />
                            })
                        }


                    </div>

                </div>
            </div>
            <div>
                <div class="flex flex-col w-2/3 mx-auto">
                    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                                <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Awards Personnes</h2>
                            </div>
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <thead class="bg-white border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                #
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                type_award
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                name_award
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                year_award
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                personne/movie
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            awPers && awPers.map((item, index) => {
                                                Object.assign(item, { ID_Iter: index + 1 })
                                                return <TableRowResult key={uuidv4()}
                                                    row={item} />
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-2/3 mx-auto">
                    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                                <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Awards Movies</h2>
                            </div>
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <thead class="bg-white border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                #
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                type_award
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                name_award
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                year_award
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                personne/movie
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            awPers && awPers.map((item, index) => {
                                                Object.assign(item, { ID_Iter: index + 1 })
                                                return <TableRowResult key={uuidv4()}
                                                    row={item} />
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AwardsPage