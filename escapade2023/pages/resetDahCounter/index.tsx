import React from "react";
import {NEXT_URL} from "../../lib/VercelURL"

export default  function CounterUpdate() {
    const resetCounter = async (e: any) => {
        e.preventDefault();
         await fetch(`escapade-pollux911.vercel.app/api/resetCounter`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             }
         })
    }

    return (
        <div>
            <button onClick={resetCounter}>
                Oopsie, back to 0
            </button>
        </div>
);
}
