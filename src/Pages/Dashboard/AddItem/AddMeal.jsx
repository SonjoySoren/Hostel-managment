
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import useAuth from '../../../hooks/useAuth';



const img_key = import.meta.env.VITE_IMG_KEY;
const img_api = `https://api.imgbb.com/1/upload?key=${img_key}`

const AddMeal = () => {

    const { user } = useAuth();


    const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
    const [isoTime, setIsoTime] = useState(moment().toISOString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));
            setIsoTime(moment().toISOString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm()


    const onSubmit = async (data) => {
        const recipeDetails = data.recipe || "";

        // Split the string by commas and trim extra spaces
        const recipeArray = recipeDetails.split(",").map((word) => word.trim());

        console.log(recipeArray); // Output the resulting array
        console.log(data, recipeArray);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(img_api, imageFile, {
            headers: {

                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuInfo = {
                title: data.title,
                price: parseFloat(data.price),
                category: data.category,
                description: data.details,
                ingredients: recipeArray,
                distributorName: data.distributorName,
                distributorEmail: data.distributorEmail,
                postTime: isoTime,
                rating: 0,
                likes: 0,
                reviewsCount: 0,
                image: res.data.data.display_url
            }
            console.log('added to imgdb', menuInfo);
            // const menuRes = await axiosSecure.post('/menu', menuInfo)

            // console.log(menuRes.data);
            // if (menuRes.data.insertedId) {
            //     reset();
            //     Swal.fire({
            //         position: "top-end",
            //         icon: "success",
            //         title: "Your work has been saved",
            //         showConfirmButton: false,
            //         timer: 1500
            //     });

            // }


        }
        console.log(res.data);

    }
    return (
        <div>
            <h1 className='text-3xl '>Add new Meal</h1>
            <div className='mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div>
                        <label className="form-control w-full ">
                            <div className="label mb-2">
                                <span className="label-text">What is your recipe name?</span>

                            </div>
                            <input required {...register('title')} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="w-full">


                            <label className="form-control w-full ">
                                <div className="label mb-2">
                                    <span className="label-text">Category</span>

                                </div>
                                <select required {...register("category", { required: true })} className="select select-bordered w-full ">
                                    <option disabled selected value={''}>Select Category?</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Dinner">Dinner</option>
                                    <option value="Lunch">Lunch</option>



                                </select>
                                {errors.category && <span className="ml-2 text-red-600 mt-2">please Select an option</span>}

                            </label>
                        </div>
                        {/* price */}
                        <div className="w-full">
                            <label className="form-control w-full ">
                                <div className="label mb-2">
                                    <span className="label-text">What is Price?</span>

                                </div>
                                <input {...register('price', {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[0-9]+$/,

                                    },
                                })} type="text" placeholder="Enter Price" className="input input-bordered w-full " />

                            </label>
                            {errors.price && (
                                <p className="text-red-500 text-sm mt-1">
                                    Enter number
                                </p>
                            )}
                        </div>

                    </div>
                    <div className='grid md:grid-cols-3 gap-3'>



                        {/* recipe ingredients*/}
                        <div className='col-span-3'>
                            <label className="form-control">
                                <div className="label mb-2">
                                    <span className="label-text">Recipe Ingredients:</span>
                                </div>
                                <input {...register('recipe')} type="text" placeholder="Enter ingredients seperated by commas" className="input input-bordered w-full " />


                            </label>

                        </div>





                    </div>

                    <div className='flex flex-col md:flex-row gap-2'>
                        {/* details */}
                        <div>
                            <label className="form-control flex flex-col">
                                <div className="label mb-2">
                                    <span className="label-text">Meal Details</span>
                                </div>
                                <textarea {...register('details')} className="textarea md:min-h-[144px] min-w-xs max-w-full  textarea-md textarea-bordered h-24" placeholder="Meal details"></textarea>

                            </label>

                        </div>
                        {/* distributor and rating */}
                        <div>
                            <p className="label-text text-center">  You cannot modify Following data </p>

                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                                {/* distributorName*/}
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label mb-2">
                                            <span className="label-text">Distributor's name: </span>
                                        </div>
                                        <input {...register('distributorName')} type="text" value={user?.displayName}
                                            readOnly className="input input-bordered w-full " />


                                    </label>

                                </div>
                                {/* distributorName*/}
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label mb-2">
                                            <span className="label-text">Distributor's Email:</span>
                                        </div>
                                        <input {...register('distributorEmail')} type="text" defaultValue={user?.email}
                                            readOnly className="input input-bordered w-full " />


                                    </label>


                                </div>
                                {/* Posted time*/}
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label mb-2">
                                            <span className="label-text">Posted time: </span>
                                        </div>
                                        <input {...register('postTime')} type="text" value={currentTime}
                                            readOnly className="input input-bordered w-full " />


                                    </label>

                                </div>
                                {/* Likes time*/}
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label mb-2">
                                            <span className="label-text">Likes: </span>
                                        </div>
                                        <input {...register('likes')} type="text" value={0}
                                            readOnly className="input input-bordered w-full " />


                                    </label>

                                </div>
                                {/* rating count*/}
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label mb-2">
                                            <span className="label-text">Rating: </span>
                                        </div>
                                        <input {...register('rating')} type="text" value={0}
                                            readOnly className="input input-bordered w-full " />


                                    </label>

                                </div>
                                {/* review count*/}
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label mb-2">
                                            <span className="label-text">Rating: </span>
                                        </div>
                                        <input {...register('rating')} type="text" value={0}
                                            readOnly className="input input-bordered w-full " />


                                    </label>

                                </div>






                            </div>
                        </div>




                    </div>

                    {/* file input  */}
                    <div>

                        <input {...register('image')} type="file" className="file-input w-full max-w-xs" />

                    </div>





                    <button className="btn">ADD ITEMS <FaUtensils className="ml-3"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddMeal;