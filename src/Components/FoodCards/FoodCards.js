import React from 'react';
import { BASE_URL } from '../../App';

function FoodCards({ data }) {
    return (
        <div className="foodCardContainer">
            <div className="foodCards">
                {
                    data?.map(({name, image, text, price}) => (
                        <div className='foodCard' key={name}>

                            <div className="image">
                                <img src={BASE_URL + image} alt={name} />
                            </div>

                            <div className="food_info">
                                <div className="info">
                                    <h3>{name}</h3>
                                    <p>{text}</p>
                                </div>
                                <button>${price.toFixed(2)}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FoodCards;
