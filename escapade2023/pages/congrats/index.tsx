import React, { useEffect, useState } from "react";
import _JSXStyle from 'styled-jsx/style'
import {set} from "zod";

export default function DisplayWinner() {

    const [teamColor, setTeamColor] = useState(null)
    const [teamPosition, setTeamPosition] = useState(null)

    useEffect(() => {
        let colorStored = localStorage.getItem("teamColor")
        setTeamColor(colorStored ? JSON.parse(colorStored) : "red")
        },  []
    );
    console.log(teamColor, "whats teamcolooor")
    useEffect(() => {
            let positionStored = localStorage.getItem("teamPosition")
            setTeamPosition(positionStored ? JSON.parse(positionStored) : "0")
        }, []
    );

    console.log(teamPosition, "POSITION")
    if (teamPosition === 1) {
        return <div>
            Bravo vous êtes la 1ère équipe à arriver au bout de cette chasse ! Vous êtes officiellement les rois et
            reines
            de PDB ! La bise à Denise !
            <style jsx>{`
      div {color: ${teamColor};}`}</style>
        </div>;
    } else if (teamPosition === 2) {
        return <div>
            Bravo vous êtes la 2ème équipe à finir cette chasse ! C'était pas loin de ramener la coupe à la maison !
            <style jsx>{`div {color: ${teamColor};}`}</style>
        </div>;
    } else if (teamPosition === 3) {
        return <div>
            Félicitations, vous êtes la 3ème équipe à terminer cette chasse ! La prochaine fois passé peut être moins de
            temps à la buvette...
            <style jsx>{`div {color: ${teamColor};}`}</style>
        </div>;
    }

    return (
            <div>
                Bravo vous avez triché ! le site est encore cassé, appelez-moi le directeur !
                <style jsx>{`
      div {
        color: ${teamColor};
      }
    `}</style>
            </div>


    );
}
