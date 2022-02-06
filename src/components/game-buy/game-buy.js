import React from 'react';
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import './game-buy.css';
import {BuyButton} from "../buy-button";

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(game))
    }

    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} руб.</span>
            <BuyButton
                type="primary"
                onClick={handleClick}
            >
                В Корзину
            </BuyButton>
        </div>
    )
}