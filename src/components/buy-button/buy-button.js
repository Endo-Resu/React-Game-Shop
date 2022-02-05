import React from 'react';
import classNames from 'classnames';
import './buy-button.css';

export const BuyButton = ({
                              onClick,
                              type,
                              children,
                              size = 's'
                          }) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': size === 'small',
        'btn--medium': size === 'medium',
    })
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}