import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const AddMeal = () => {
    return (
        <div>
            <h1 className='text-3xl '>Add new Meal</h1>
            <div >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">What is your recipe name?</span>

                            </div>
                            <input {...register('name')} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="w-full">


                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">What is your name?</span>

                                </div>
                                <select {...register("category")} className="select select-bordered w-full ">
                                    <option disabled selected>Select Category?</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>

                                </select>

                            </label>
                        </div>
                        {/* price */}
                        <div className="w-full">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">What is Price?</span>

                                </div>
                                <input {...register('price')} type="text" placeholder="Enter Price" className="input input-bordered w-full " />

                            </label>
                        </div>

                    </div>
                    {/* recipe details */}
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>

                        </label>

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