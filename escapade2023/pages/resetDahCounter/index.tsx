import React, { useState } from "react";

export default  function CounterUpdate() {
    const resetCounter = async (e: any) => {
        e.preventDefault();
         await fetch('http://localhost:3000/api/resetCounter', {
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
