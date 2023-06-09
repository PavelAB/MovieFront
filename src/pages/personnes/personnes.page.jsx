
const TitleCard = ({ title }) => (
    <div class="bg-gray-100 py-2 px-4">
        <h2 class="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
)
const RowCard = ({ star }) => (
    <li class="flex items-center py-4 px-6">
        <span class="text-gray-700 text-lg font-medium mr-4">{star.iter}</span>
        {/* <img class="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/women/72.jpg" */}
        {/* alt="User avatar"> */}
        <div class="flex-1">
            <h3 class="text-lg font-medium text-gray-800">{star.first_name} {star.last_name}</h3>
            <p class="text-gray-600 text-base">1234 points</p>
        </div>
    </li>
)


const PersonnesPage = () => {


    const personne = [{
        first_name: 'firstName1',
        last_name: 'lastName1'
    }, {
        first_name: 'firstName2',
        last_name: 'lastName2'
    }, {
        first_name: 'firstName3',
        last_name: 'lastName3'
    }, {
        first_name: 'firstName4',
        last_name: 'lastName4'
    }, {
        first_name: 'firstName5',
        last_name: 'lastName5'
    }]


    return (
        <>
            <div className="flex items-center  justify-between">
                <div className="grid gap-8 w-full my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div class="w-2/3 bg-white shadow-md rounded-md overflow-hidden  mx-auto mt-16">
                        <TitleCard title={"Most Films All times"} />
                        <ul class="divide-y divide-gray-200">
                            {
                                personne && personne.map((item, index) => {
                                    Object.assign(item, { iter: index + 1 })
                                    return <RowCard star={item} />
                                })
                            }
                        </ul>
                    </div>

                    <div class="w-2/3 bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
                        <TitleCard title={"Most Films last 10 years"} />
                        <ul class="divide-y divide-gray-200">
                            {
                                personne && personne.map((item, index) => {
                                    Object.assign(item, { iter: index + 1 })
                                    return <RowCard star={item} />
                                })
                            }
                        </ul>
                    </div>
                    <div class="w-2/3 bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
                        <TitleCard title={"Most popular"} />
                        <ul class="divide-y divide-gray-200">
                            {
                                personne && personne.map((item, index) => {
                                    Object.assign(item, { iter: index + 1 })
                                    return <RowCard star={item} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonnesPage