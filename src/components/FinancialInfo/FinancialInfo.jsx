import React from 'react';
import { useState } from "react";

function FinancialInformation() {
    const [investment, setInvestment] = useState("");
    const [profit, setProfit] = useState("");
    const [returnTime, setReturnTime] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            investment,
            profit,
            returnTime,
            
        });
        // TODO: Submit form data to backend
    };

    return (
        <div className="container mx-auto mt-8 mb-20">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <h1 className="text-xl text-df678c font-md text-center mb-4">Financial Information</h1>
                <div className="mb-4">

                    <input
                        placeholder='Investment amount'
                        type="number"
                        name="investment"
                        value={investment}
                        onChange={(event) => setInvestment(event.target.value)}
                        className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                    />
                </div>
                <div className="mb-4">
                    <input
                        placeholder='Profit on Investment in percentage'
                        type="number"
                        name="profit"
                        value={profit}
                        onChange={(event) => setProfit(event.target.value)}
                        className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                    />
                </div>                
                <div className="mb-4">
                    <input
                        placeholder='Return Time'
                        type="text"
                        name="returnTime"
                        value={returnTime}
                        onChange={(event) => setReturnTime(event.target.value)}
                        className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                    />
                </div>
            </form>
        </div>
    )
}
export default FinancialInformation;