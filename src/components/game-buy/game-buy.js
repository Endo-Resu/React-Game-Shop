import React from 'react';
import './game-buy.css';
import {BuyButton} from "../buy-button";

export const GameBuy = ({ game }) => {
    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} руб.</span>
            <BuyButton
                type="primary"
                onClick={ () => null}
            >
                В Корзину
            </BuyButton>
        </div>
    )
}