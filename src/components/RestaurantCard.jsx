import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    return (
        <>
            <div className="container bg-blue-100 shadow-md rounded-lg p-4 mb-4 flex flex-col items-center">
            {/* className="container mx-auto p-6 flex flex-col items-center" */}
                <h2 className="text-2xl font-extrabold mb-6 text-gray-800">{restaurant.name}</h2>
                
                <p className="text-gray-800 font-bold mb-2">Cuisine: {restaurant.cuisine}</p>
                <p className="text-gray-800 font-bold mb-2">Borough: {restaurant.borough}</p>
                <Link to={`/reviews/${restaurant.rid}/${restaurant.name}`}>
                    <button class="block rounded-md bg-blue-700 px-3 py-2 text-base font-medium text-white mx-40 hover:bg-gray-700">
                        View Reviews
                    </button>
                </Link>
            </div>
        </>
    );
};

export default RestaurantCard;
