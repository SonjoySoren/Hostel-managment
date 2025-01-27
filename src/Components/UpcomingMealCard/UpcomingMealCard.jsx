import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import { LuBadgeInfo } from "react-icons/lu";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUpcomingMeals from "../../hooks/useUpcomingMeals";
import useUpcomingMealById from "../../hooks/useUpcomingMealById";


const UpcomingMealCard = ({ meal }) => {
    // const navigate = useNavigate();
    // console.log("from upcard", id);
    
    // const [upcomingMeal, ,refetch] =  useUpcomingMealById('6796ad7ca9bc08d9771359da');
    const { title } = meal
    // const axiosSecure = useAxiosSecure();
    

    // const { user, loading } = useAuth();
    // const [likeCount, setLikeCount] = useState(0)
    // const [isFavorite, setIsFavorite] = useState(false)

    // useEffect(() => {
    //     setLikeCount(likes)
    //     setIsFavorite(likedBy?.includes(user?.email))
    // }, [upcomingMeal, loading])

    // const email = { email: user?.email }
    // const handleLiked = async () => {
    //     if (!user) {
    //         Swal.fire({
    //             title: "Login Required",
    //             text: "Please login to like this meal",
    //             icon: "error"
    //         }).then(res => {
    //             if (res.isConfirmed) {
    //                 navigate('/joinUs', { state: { from: location } })

    //             }
    //         });
    //         return;
    //     }
        // const res = await axiosSecure.put(`/upcomingMeal/updateLikes/${id}`, email);
        // console.log(res.data);

    //     setIsFavorite(!isFavorite);
    //     refetch();
        
    // }


    return (
        <div>
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
                    {/* likes */}
                    <div>
                        <p>Likes: {likeCount}</p>
                    </div>

                    <div className="flex items-end justify-between mt-2">
                        <div>

                            <p className="text-[1rem] font-semibold mt-1 text-[#0FABCA]">$ {price}</p>
                        </div>


                        <button
                            onClick={handleLiked}
                            className={`flex-1 py-3 px-4 rounded-lg border border-gray-200 text-gray-800 hover:bg-red-100 ${isFavorite ? "bg-red-300 hover:bg-red-200" : ''}`}>
                            <div className="flex items-center justify-center gap-2">
                                {
                                    isFavorite ? (
                                        <BsHeartFill className="w-5 h-5 text-red-500" />
                                    )
                                        : (
                                            <BsHeart className="w-5 h-5" />
                                        )
                                }
                                Like
                            </div>
                        </button>






                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMealCard;