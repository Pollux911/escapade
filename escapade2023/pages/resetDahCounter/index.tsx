import React from "react";
import nextURL from '..'

export default  function CounterUpdate() {
    const resetCounter = async (e: any) => {
        e.preventDefault();
        console.log(  `${nextURL}/api/resetCounter`)
         await fetch(`${nextURL}/api/resetCounter`, {
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
