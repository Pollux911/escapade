import React, { useEffect, useState } from "react";
import _JSXStyle from 'styled-jsx/style'
import {set} from "zod";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

export default function DisplayWinner() {

    const [teamColor, setTeamColor] = useState(null)
    const [teamPosition, setTeamPosition] = useState(null)

    useEffect(() => {
        let colorStored = localStorage.getItem("teamColor")
        setTeamColor(colorStored ? JSON.parse(colorStored) : "red")
        },  []
    );
    useEffect(() => {
            let positionStored = localStorage.getItem("teamPosition")
            setTeamPosition(positionStored ? JSON.parse(positionStored) : "0")
        }, []
    );

    if (teamPosition === 1) {
        return <div className="winner">
            Bravo vous êtes la 1ère équipe à arriver au bout de cette chasse ! Vous êtes officiellement les rois et
            reines de PDB ! La bise à Denise ! Rendez-vous dans le salon pour la surprise !
            <style jsx>{`
              .winner {border:2vw ridge ${teamColor};
                        font-size: 5vw ;
                        color: black;
                        padding: 5vh 5vw;
                        margin: 30vh 5vw;
                        border-radius: 2vh;
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        background: #ffa664;
                        box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .6);`}</style>
                </div>;
    } else if (teamPosition === 2) {
        return <div className="winner">
            Bravo vous êtes la 2ème équipe à finir cette chasse ! C'était pas loin de ramener la coupe à la maison !
            Rendez-vous à la maison pour la surprise !
                 <style jsx>{`.winner {border:2vw ridge ${teamColor};
                    font-size: 5vw ;
                    color: black;
                    padding: 5vh 5vw;
                    margin: 30vh 5vw;
                    border-radius: 2vh;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    background: #ffa664;
                    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .6);
    
                }`}</style>
        </div>;
    } else if (teamPosition === 3) {
        return <div className="winner">
            Félicitations, vous êtes la 3ème équipe à terminer cette chasse ! La prochaine fois passez peut-être moins de
            temps à la buvette... mais on a pas tout perdu ! Rendez-vous à la maison pour la surprise !
            <style jsx>{`.winner {border:2vw ridge ${teamColor};
                font-size: 5vw ;
                color: black;
                padding: 5vh 5vw;
                margin: 30vh 5vw;
                border-radius: 2vh;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: #ffa664;
                box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .6);`}</style>
        </div>;
    }

    return (
            <div className="winner">
                Bravo vous avez triché ! le site est encore cassé, appelez-moi le directeur !
                <style jsx>{`
      body {
      background: url("https://scontent-cdg4-1.xx.fbcdn.net/v/t1.15752-9/333503203_892214975338140_3405717876107985679_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YUxR_NrUq54AX_opzdY&_nc_ht=scontent-cdg4-1.xx&oh=03_AdTnzbNZqieP7eqiQCnHYWIQXmeEkN9u1_bWIc3jFRpO8Q&oe=64D735A9");
      }
      .winner {border:2vw ridge ${teamColor};
                    
                    font-size: 5vw ;
                    color: black;
                    padding: 5vh 5vw;
                    margin: 30vh 5vw;
                    border-radius: 2vh;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    background: #ffa664;
                    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .6);}
    `}</style>

            </div>







    );
}
