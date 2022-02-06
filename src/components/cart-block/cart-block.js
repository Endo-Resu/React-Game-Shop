import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { calcTotalPrice } from "../../utils/utils";
import './cart-block.css'

export const CartBlock = () => {
    const [isCartMenuVisible, setCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className="cart-block">
            <BiCartAlt
                size={30}
                className="cart-block__icon"
                onClick={() => setCartMenuVisible(!isCartMenuVisible)}
            />
            { totalPrice > 0 ? <span className="cart-block__total-price"> { totalPrice } руб.</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={() => null }/>}
        </div>
    )
}