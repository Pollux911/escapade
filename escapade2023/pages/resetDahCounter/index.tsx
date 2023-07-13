import React from "react";

export default  function CounterUpdate() {
    const resetCounter = async (e: any) => {
        e.preventDefault();
         await fetch('https://escapade.vercel.app/api/resetCounter', {
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
