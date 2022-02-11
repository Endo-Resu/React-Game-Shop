import React from "react";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";
import {AiOutlineCloseCircle} from "react-icons/ai";
import './cart-item.css';

export const CartItem = ({
    title,
    price,
    id
                         }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(id))
    }

    return (
        <div className="cart-item">
            <span>{ title }</span>
            <div className="cart-item__price">
                <span>{ price } руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}