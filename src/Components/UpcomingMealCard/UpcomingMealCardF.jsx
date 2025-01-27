import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { LuBadgeInfo } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const UpcomingMealCardF = ({ meal, refetch }) => {

    const { title, price, rating, image, _id: id, likedBy, category, likes } = meal;
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [likeCount, setLikeCount] = useState(0)



    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setLikeCount(likes)
        setIsFavorite(likedBy?.includes(user?.email))
    }, [meal, loading])
    const email = { email: user?.email }
    const handleLiked = async () => {
        if (!user) {
            Swal.fire({
                title: "Login Required",
                text: "Please login to like this meal",
                icon: "error"
            }).then(res => {
                if (res.isConfirmed) {
                    navigate('/joinUs', { state: { from: location } })

                }
            });
            return;
        }
        const res = await axiosSecure.put(`/upcomingMeal/updateLikes/${id}`, email);
        console.log(res.data);

        setIsFavorite(!isFavorite);







        refetch();
    }

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
                {/* likes */}
                <div>
                    <p>likes: {likeCount}</p>
                </div>
                <div>
                    <h3 className='text-gray-900'>Category: {category}</h3>
                </div>

                <div className="flex items-end justify-between mt-2">
                    <div>

                        <p className="text-[1rem] font-semibold mt-1 text-[#0FABCA]">$ {price}</p>
                    </div>

                    <button
                        onClick={handleLiked}
                        className={`flex w-[100px] py-3  rounded-lg border border-gray-200 text-gray-800 hover:bg-red-100 ${isFavorite ? "bg-red-300 hover:bg-red-200" : ''}`}>
                        <div className="flex items-center w-[100px] justify-center gap-2">
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
    );
};

export default UpcomingMealCardF;