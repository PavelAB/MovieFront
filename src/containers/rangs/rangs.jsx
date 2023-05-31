import { useEffect } from "react";
import { useState } from "react";

const Rangs = (props) => {


    const [topValue, setTopValue] = useState(1)
    const [rightValue, setRightValue] = useState(1)
    const [bottomValue, setBottomValue] = useState(1)
    const [leftValue, setLeftValue] = useState(1)

   
    useEffect(() => {
        if( props.rangs.length !== 0 ){
            setTopValue(props.rangs.reduce( (acc, currVal) => acc + currVal.rate_actor_game, 0 ) / props.rangs.length)
            setRightValue(props.rangs.reduce( (acc, currVal) => acc + currVal.rate_cinematography, 0 ) / props.rangs.length)
            setBottomValue(props.rangs.reduce( (acc, currVal) => acc + currVal.rate_sound, 0 ) / props.rangs.length)
            setLeftValue(props.rangs.reduce( (acc, currVal) => acc + currVal.rate_writing, 0 ) / props.rangs.length)
        }
    },[])
    console.log("data",props.rangs);

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


    return (



        <>
            <div className="flex justify-center">
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
                        <text x="260" y="20" font-family="Verdana" font-size="20" fill="black">TopValue</text>
                        <text x="25" y="350" font-family="Verdana" font-size="20" transform="rotate(-90 25,350)" fill="black">LeftValue</text>
                        <text x="575" y="250" font-family="Verdana" font-size="20" transform="rotate(90 575,250)" fill="black">RightValue</text>
                        <text x="240" y="580" font-family="Verdana" font-size="20" fill="black">BottomValue</text>

                    </svg>



                </div>

                
            </div>
        </>
    )
}
export default Rangs