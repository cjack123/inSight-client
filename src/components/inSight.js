import React from "react"
import { GCard } from "./GiftCard/GCard"
import "./inSight.css"

export const Insight = () => {
    
    return (
        <>
            <h2> Welcome to inSight!</h2>
                <p> Enter your gift cards and transactions</p>
                <p> Then, we'll keep log of your transactions and calculate the new balance.</p>

            <h2>Gift Cards</h2>
                <article className="giftCards">
                <GCard />
                </article>
        </>
    )
} 