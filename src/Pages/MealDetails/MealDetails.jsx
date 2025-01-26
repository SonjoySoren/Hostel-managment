import { useLocation, useNavigate, useParams } from "react-router-dom";

// react icons
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { FiCpu, FiSmartphone } from "react-icons/fi"
import { IoMdCamera } from "react-icons/io"
import { MdBatteryChargingFull } from "react-icons/md"
import { GoVerified } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { useEffect, useState } from "react";
import useMealById from "../../hooks/useMealById";
import { Rating } from "@smastrom/react-rating";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import dayjs from "dayjs";
import useReviewById from "../../hooks/useReviewById";




const MealDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const { id } = useParams();
    const [meal, , refetch] = useMealById(id);
    const [review, , reloadReview] = useReviewById(id);
    console.log("review ", review);
    const { image, category, postTime, description, distributorEmail, distributorName, ingredients, price, rating, reviewsCount, likes, likedBy = [], title } = meal;
    console.log(postTime);
    const formattedTime = dayjs(postTime).format('YYYY-MM-DD HH:mm');



    console.log(meal, "likes", likes);

    const [selectedImage, setSelectedImage] = useState(0)
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
        const res = await axiosPublic.put(`/meal/updateLikes/${id}`, email);
        console.log(res.data);

        setIsFavorite(!isFavorite);







        refetch();
    }

    const handleRequest = async () => {
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
        const requestInfo = {
            mealId: id,
            requestedBy: user?.email,
            status: 'pending',

        }
        const res = await axiosSecure.post('/request', requestInfo);
        if (res.data.insertedId) {
            Swal.fire({
                title: "Request Successful",
                text: "Food has been added to you requested food",
                icon: "success"
            });
        }

    }
    const handleReview = async (e) => {
        e.preventDefault();
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
        const form = e.target;
        const reviewText = form.review.value;

        const review = {
            mealId: id,
            userEmail: user?.email,
            reviewText: reviewText,
        }
        console.log(review);
        const res = await axiosSecure.post('/review', review);

        console.log(res.data.insertedId);
        if (res.data.insertedId) {
            Swal.fire({
                title: "Request Successful",
                text: "Food has been added to you requested food",
                icon: "success"
            });
            form.reset();
            reloadReview();
        }
    }

    const images = [
        "https://i.ibb.co.com/GTGBw03/image-323.png",
        "https://i.ibb.co.com/thxkk1x/image-320.png",
        "https://i.ibb.co.com/MckV93r/image-320.png",
        "https://i.ibb.co.com/ZGWRGDT/image-320.png"
    ]




    return (
        <div>
            <h1>


                <div className="productDetails">
















                    <div className="mx-auto lg:px-8 lg:py-12">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {/* Left side - Image gallery */}
                            <div className="flex flex-col-reverse gap-[15px] lg:gap-0 lg:flex-row">

                                {/* Thumbnails */}
                                {/* <div
                                    className="w-full lg:w-[20%] flex flex-row lg:flex-col lg:gap-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 lg:pr-2">
                                    {images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative w-36 lg:w-20 h-[70px] lg:h-20 border-2 p-1 lg:p-2 rounded-lg overflow-hidden ${selectedImage === index ? "border-[#0FABCA]" : "border-transparent"
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Product ${index + 1}`}
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div> */}

                                {/* Main image */}
                                <div className="w-full lg:w-[80%] bg-gray-100 rounded-sm h-[280px] lg:h-[400px] relative flex items-center justify-center">
                                    <img
                                        src={image}
                                        alt="Product main image"
                                        className="object-cover w-[200px] lg:w-[300px] rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Right side - Product details */}
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h1 className="text-[1.6rem] lg:text-[1.9rem] font-bold text-gray-800">{title}</h1>
                                    <div className="flex items-center gap-2 mt-2 lg:mt-5">
                                        <span className="text-3xl font-medium">${price}</span>
                                        <span className="text-xl text-gray-500 line-through">${parseInt(price + 10)}</span>
                                    </div>
                                </div>





                                {/* Specifications */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">

                                        <div className="flex justify-between items-center">
                                            <p className="text text-gray-500">Likes:</p>
                                            <p className="font-medium ml-5 text-gray-700 text-[0.9rem]">{likeCount}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">

                                        <div className="flex justify-between items-center">
                                            <p className="text text-gray-500">Total Reviews:</p>
                                            <p className="font-medium ml-5 text-gray-700 text-[0.9rem]">{reviewsCount}</p>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                                </div>

                                <p className="text-[0.9rem] text-gray-600">

                                    {description}
                                </p>
                                {/* More details */}
                                <div>
                                    <p className="text-gray-600 font-bold">Ingredients:</p>
                                    <ul className="list-disc ">
                                        {ingredients?.map((item, idx) => <li className=" ml-10" key={idx}>{item}</li>)}
                                    </ul>
                                </div>
                                {/* Delivery info */}
                                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-2">
                                    <div className="flex items-center gap-3">
                                        <CiDeliveryTruck className="text-[3rem] text-gray-500 p-3 bg-gray-100 rounded-md" />
                                        <div>
                                            <p className="text-sm text-gray-500">Distributor Name:</p>
                                            <p className="font-medium text-[0.9rem] text-gray-800">{distributorName}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <IoStorefrontOutline className="text-[3rem] text-gray-500 p-3 bg-gray-100 rounded-md" />
                                        <div>
                                            <p className="text-sm text-gray-500">Posted Time:</p>
                                            <p className="font-medium text-[0.9rem] text-gray-800">
                                                {formattedTime}

                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <GoVerified className="text-[3rem] text-gray-500 p-3 bg-gray-100 rounded-md" />
                                        <div>
                                            <p className="text-sm text-gray-500">Guaranteed</p>
                                            <p className="font-medium text-[0.9rem] text-gray-800">1 year</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="flex flex-col lg:flex-row gap-4">
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
                                    <button onClick={handleRequest} className="flex-1 py-3 px-4 rounded-lg bg-[#0FABCA] text-white hover:bg-[#0FABCA]/90">
                                        Request Food
                                    </button>
                                </div>

                                {/* review */}
                                <div>
                                    <form onSubmit={handleReview}>
                                        <textarea
                                            name="review"
                                            placeholder="Add Review"
                                            className="textarea textarea-bordered textarea-sm w-full "></textarea>
                                        <button className="btn btn-primary mt-5">Add Review</button>


                                    </form>




                                </div>
                                <div>
                                    <h1 className="text-2xl">Reviews: </h1>
                                    {
                                        review.map(item => <div key={item._id} className="border border-gray-200 p-3 space-y-2">
                                            <p className="text-[0.9rem] text-gray-600">Review By: {item.userEmail}</p>
                                            <h3 className="text-xl"> {item.reviewText}</h3>
                                        </div>)
                                    }

                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </h1>
        </div>
    );
};

export default MealDetails;