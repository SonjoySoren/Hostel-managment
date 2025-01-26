import React, { useState } from 'react';
import { FaPlus, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { LuBadgeInfo } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {
    const { title, price, rating: ratings, image, _id, category } = meal;
    const [rating, setRating] = useState(ratings);
    return (
        <div className="border border-gray-300 rounded-md p-5">

            {/* product image */}
            <img alt="product/image" src="https://i.ibb.co.com/VN5sNHX/Link-14-png.png"
                className="w-[250px] mt-2" />

            {/* product details */}
            <div className="mt-3">
                <h3 className="text-[1.1rem] font-semibold">{title}</h3>

                {/* rating area */}
                <div className="flex items-center gap-[10px] mt-2">
                    <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                    <span className="text-[0.9rem] text-gray-500">(43)</span>
                </div>
                <div>
                    <h3 className='text-gray-900'>Category: {category}</h3>
                </div>

                <div className="flex items-end justify-between mt-2">
                    <div>

                        <p className="text-[1rem] font-semibold mt-1 text-[#0FABCA]">$ {price}</p>
                    </div>

                    <Link to={`/details/${_id}`}>
                        <button
                            className="py-2 px-4 bg-[#0FABCA] text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0195af] transition-all duration-200">
                            Details
                            <LuBadgeInfo className='text-2xl' />
                        </button>



                    </Link>


                </div>
            </div>
        </div>
    );
};

export default MealCard;