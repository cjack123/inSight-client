import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { getCards } from "./GCardManager"

export const GCard = ({ card, removeCard }) => {
    const history = useHistory()

    return (
        <>

        <article className="cards">
                    <section key={`card--${card.id}`} className="card">
                        <div className="card__number">Card Number: {card.card_number}</div>
                        <div className="card__type">Card TYpe: {card.card_type}</div>
                        <div className="card__expType">Expiration Date: {card.expiration_date}</div>
                        <div className="card__sCode">Security Code: {card.security_code}</div>
                        <div className="card__secBalance">Initial Balance: {card.start_balance}</div>
                        <div className="card__currBalance">Current Balance: {card.current_balance}</div>
                        <div className="buttons">
                        <button type="button" onClick={() => removeCard(card.id)}>Delete Card</button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                    </section>
        </article>
        </>
    )
}