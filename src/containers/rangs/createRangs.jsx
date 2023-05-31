import { useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { newRate } from "../../api/movie.api"

const CreateRangs = () => {
    const { register, handleSubmit, reset } = useForm()
    

    const [topValue, setTopValue] = useState(5)
    const [rightValue, setRightValue] = useState(5)
    const [bottomValue, setBottomValue] = useState(5)
    const [leftValue, setLeftValue] = useState(5)

    const { detailsId } = useParams()
    const id = parseInt(detailsId)

    

    // Calcul des coordonnées
    const centerX = 300;
    const centerY = 300;
    const maxHeight = 250;

    const topX = centerX;
    const topY = centerY - (topValue * maxHeight / 10);

    const rightX = centerX + (rightValue * maxHeight / 10);
    const rightY = centerY;

    const bottomX = centerX;
    const bottomY = centerY + (bottomValue * maxHeight / 10);

    const leftX = centerX - (leftValue * maxHeight / 10);
    const leftY = centerY;


    console.log("topValue", topValue);
    console.log("Coordonnées du losange :");
    console.log(`Sommet supérieur : (${topX}, ${topY})`);
    console.log(`Sommet droit : (${rightX}, ${rightY})`);
    console.log(`Sommet inférieur : (${bottomX}, ${bottomY})`);
    console.log(`Sommet gauche : (${leftX}, ${leftY})`);



    const onSubmit = async (data) => {
        Object.assign(data, {ID_Movie : id, ID_User : localStorage.getItem('ID_User')})
        console.log(data);
        await newRate(data)
        
        //await dispatch(movieActionFetch())

        reset()
    }

    return (



        <>
            <div className="flex flex-row">
                {/* <div className="border border-gray-900"> */}
                <div>
                    {/* Un graphique en forme d'un hexagone a 4 sommets, chaque sommet represent une note particulier(varie entre 1 et 10) la surface represent la note globale pour le film SVG q */}
                    <svg height="600" width="600">
                        <line x1="300" y1="550" x2="300" y2="50" class="stroke-gray-600 stroke-1" />
                        <line x1="50" y1="300" x2="550" y2="300" class="stroke-gray-600 stroke-1" />
                        <polygon points={`${topX},${topY} ${rightX},${rightY} ${bottomX},${bottomY} ${leftX},${leftY}`} class="fill-transparent stroke-black stroke-2" />
                        <circle cx={topX} cy={topY} r="2" stroke="black" stroke-width="3" fill="black" />
                        <circle cx={rightX} cy={rightY} r="2" stroke="black" stroke-width="3" fill="black" />
                        <circle cx={bottomX} cy={bottomY} r="2" stroke="black" stroke-width="3" fill="black" />
                        <circle cx={leftX} cy={leftY} r="2" stroke="black" stroke-width="3" fill="black" />
                        <text x="260" y="20" font-family="Verdana" font-size="20" fill="black">Actor's Performance</text>
                        <text x="25" y="350" font-family="Verdana" font-size="20" transform="rotate(-90 25,350)" fill="black">Scenario Quality</text>
                        <text x="575" y="250" font-family="Verdana" font-size="20" transform="rotate(90 575,250)" fill="black">Cinematic Quality</text>
                        <text x="240" y="580" font-family="Verdana" font-size="20" fill="black">Sound Quality</text>

                    </svg>



                </div>

                <div className=" min-h-screen flex flex-grow">
                    <div className="flex-grow">

                        <form  className="" onSubmit={handleSubmit(onSubmit)}>
                            {/* formulaire pour evoluer le film selon 4 critere */}
                            <div className="">
                                <label for="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actor's Performance : <span className="text-lg">{topValue}</span></label>
                                <input {...register("rate_actor_game")} id="steps-range" type="range" min="1" value={topValue} onChange={e => setTopValue(e.target.value)} max="10" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
                            </div>
                            <div className="">
                                <label for="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cinematic Quality : <span className="text-lg">{rightValue}</span></label>
                                <input {...register("rate_cinematography")} id="steps-range" type="range" min="1" value={rightValue} onChange={e => setRightValue(e.target.value)} max="10" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>

                            </div>
                            <div>
                                <label for="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sound Quality : <span className="text-lg">{bottomValue}</span></label>
                                <input {...register("rate_sound")} id="steps-range" type="range" min="1" value={bottomValue} onChange={e => setBottomValue(e.target.value)} max="10" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
                            </div>
                            <div>
                                <label for="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scenario Quality : <span className="text-lg">{leftValue}</span></label>
                                <input {...register("rate_writing")} id="steps-range" type="range" min="1" value={leftValue} onChange={e => setLeftValue(e.target.value)} max="10" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
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
        </>
    )
}
export default CreateRangs