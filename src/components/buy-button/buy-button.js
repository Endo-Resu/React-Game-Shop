import React from 'react';
import './buy-button.css';

export const BuyButton = ({
                              onClick,
                              type,
                              children,
                              size = 's'
                          }) => {
    return (
        <button>
            {children}
        </button>
    )
}