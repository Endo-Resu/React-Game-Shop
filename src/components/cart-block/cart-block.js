import React, {useCallback, useState} from 'react';
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import './cart-block.css'


export const CartBlock = () => {
    const [isCartMenuVisible, setCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        setCartMenuVisible(false);
        navigate("/order");
    }, [navigate]);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt
                size={30}
                className="cart-block__icon"
                onClick={() => setCartMenuVisible(!isCartMenuVisible)}
            />
            { totalPrice > 0 ? <span className="cart-block__total-price"> { totalPrice } руб.</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    )
}