import React, { useEffect, useState } from 'react';
import { readAllData } from '../functions/crud'; // Adjust the import path accordingly
import RestaurantCard from '../components/RestaurantCard'; // Adjust the import path accordingly

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await readAllData('restaurants');
            setRestaurants(data || []); // Ensure data is an array or fallback to empty array
        };
        
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Restaurants</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurants.length > 0 ? (
                    restaurants.map((restaurant, index) => (
                        <RestaurantCard key={index} restaurant={restaurant} />
                    ))
                ) : (
                    <p>No restaurants available.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
