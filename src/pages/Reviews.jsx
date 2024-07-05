import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readAllData, createData, deleteData } from '../functions/crud';
import { UserAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner'; // Adjust the import path accordingly

const Reviews = () => {
    const { rid, name } = useParams();
    const { user } = UserAuth();
    const [reviews, setReviews] = useState([]);
    const [userReviews, setUserReviews] = useState([]);
    const [allReviews, setAllReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [newStars, setNewStars] = useState();
    const [uids, setUids] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchReviews = async () => {
            const data = await readAllData('reviews');
            setReviews(data || []);
            setUids(data.map(review => review.uid));
            setLoading(false); // Set loading to false after data is fetched
        };

        fetchReviews();
    }, []);

    useEffect(() => {
        if (reviews.length > 0) {
            setUserReviews(reviews.filter(review => review.uid === user?.uid && review.rid === rid));
            setAllReviews(reviews.filter(review => review.rid === rid));
        }
    }, [reviews, user, rid]);

    const handleAddReview = async () => {
        const reviewData = {
            stars: newStars,
            text: newReview,
            uid: user.uid,
            user_name: user.firstName,
            rid: rid
        };
        await createData('reviews', reviewData);
        setNewReview('');
        setNewStars(0);
        fetchReviews();
    };

    const handleDeleteReview = async (reviewId) => {
        await deleteData('reviews', reviewId);
        fetchReviews();
    };

    const fetchReviews = async () => {
        const data = await readAllData('reviews');
        setReviews(data || []);
    };

    const handleStarsInput = (e) => {
        const value = e.target.value;
        if (value >= 1 && value <= 10) {
            setNewStars(value);
        } else if (value > 10) {
            setNewStars(10);
        } else if (value < 1) {
            setNewStars(1);
        }
    };

    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Reviews for {name}</h1>
            {loading ? (
                <Spinner /> // Show spinner while loading
            ) : (
                user ? (
                    <div className="container flex flex-col items-center">
                        <div className="mb-6 w-full max-w-md">
                            <input 
                                type="number" 
                                placeholder="Rating" 
                                value={newStars}
                                min="1"
                                max="10"
                                onChange={handleStarsInput}
                                className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <input 
                                type="text" 
                                placeholder="New Review" 
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <button 
                                onClick={handleAddReview}
                                className="w-full bg-blue-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Add Review
                            </button>
                        </div>
                        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {allReviews.length > 0 ? (
                                allReviews.map((review, index) => (
                                    review.uid === user.uid ? (
                                        <div key={index} className="relative container bg-blue-100 shadow-md rounded-lg p-4 mb-4 flex flex-col items-center">
                                            <button 
                                                className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => handleDeleteReview(review.id)}
                                            >
                                                Delete
                                            </button>
                                            <h1 className="text-2xl font-extrabold mb-6 text-gray-800">Your Review</h1>
                                            <div>
                                                <p className="text-lg text-gray-800 dark:text-gray-200">Rating: {review.stars}/10</p>
                                                <p className="text-gray-600 dark:text-gray-400">"{review.text}"</p>
                                            </div>
                                        </div>) : (
                                        <div key={index} className="relative container bg-blue-100 shadow-md rounded-lg p-4 mb-4 flex flex-col items-center">
                                            <h1 className="text-2xl font-extrabold mb-6 text-gray-800">Review By {review.user_name}</h1>
                                            <div>
                                                <p className="text-lg text-gray-800 dark:text-gray-200">Rating: {review.stars}/10</p>
                                                <p className="text-gray-600 dark:text-gray-400">"{review.text}"</p>
                                            </div>
                                        </div>
                                    )
                                ))
                            ) : (
                                <p className="text-gray-600 dark:text-gray-400">You have no reviews for this restaurant.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allReviews.length > 0 ? (
                            allReviews.map((review, index) => (
                                <div key={index} className="relative container bg-blue-100 shadow-md rounded-lg p-4 mb-4 flex flex-col items-center">
                                    <h1 className="text-2xl font-extrabold mb-6 text-gray-800">Review By {review.user_name}</h1>
                                    <div>
                                        <p className="text-gray-800 font-bold mb-2">Rating: {review.stars}/10</p>
                                        <p className="text-gray-800 font-bold mb-2">"{review.text}"</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 dark:text-gray-400">No reviews available for this restaurant.</p>
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default Reviews;
