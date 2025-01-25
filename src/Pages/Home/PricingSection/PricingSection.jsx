
import React, { useState } from "react";

// react icons
import { MdOutlineDone } from "react-icons/md";

const PricingSection = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <section className="w-full rounded-xl p-[20px]">
            <h1 className="text-[30px] font-[500] leading-[40px]">Plans & Pricing</h1>
            <div className="w-full sm:flex-row flex-col gap-[30px] flex items-center justify-between">
                <p className="text-[18px] font-[400] text-gray-400 w-full sm:w-[50%] mt-2">Whether your time-saving
                    automation needs are large or small, we’re here to help you scale.</p>

                <div className="flex items-center bg-white rounded-full boxShadow w-max">
                    <button
                        className={`${toggle ? "bg-[#BB6BD9] text-white" : "bg-transparent text-text"} px-4 py-2.5 rounded-full transition-all duration-300`}
                        onClick={() => setToggle(true)}>monthly
                    </button>
                    <button
                        className={`${!toggle ? "bg-[#BB6BD9] text-white" : "bg-transparent text-text"} px-4 py-2.5 transition-all duration-300 rounded-full`}
                        onClick={() => setToggle(false)}>Yearly
                    </button>
                </div>
            </div>

            {/*  pricing cards  */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 bg-white toastshadow py-[30px] gap-[50px] px-[20px] sm:px-[40px] rounded-xl mt-10">
                <div className="w-full flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-end gap-[8px]">
                            <h3 className="text-[1.8rem] font-[800]">$19</h3>
                            <span className="text-[1rem] text-gray-400 mb-2">/month</span>
                        </div>

                        <h3 className="text-[1.5rem] font-[500] mt-3">Silver</h3>
                        <p className="text-[1rem] text-gray-500">Access to all meals</p>

                        <div className="flex flex-col gap-[10px] mt-5">
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                Ability to like meals
                            </p>
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                Ability to request meals
                            </p>
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                Ability to leave reviews
                            </p>
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                Limited access to upcoming meals
                            </p>
                        </div>
                    </div>

                    <button
                        className="py-2.5 px-4 w-full bg-[#857d9c] text-white rounded-full mt-16">Choose
                        plan
                    </button>
                </div>

                <div className="w-full flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-end gap-[8px]">
                            <h3 className="text-[1.8rem] font-[800]">$54</h3>
                            <span className="text-[1rem] text-gray-400 mb-2">/month</span>
                        </div>

                        <h3 className="text-[1.5rem] font-[500] mt-3">Gold</h3>
                        <p className="text-[1rem] text-gray-500">Access to all meals</p>

                        <div className="flex flex-col gap-[10px] mt-5">
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                All features of the Silver Card
                            </p>
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                Unlimited access to upcoming meals (can like and view)
                            </p>
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                Priority meal requests
                            </p>
                            <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                                Ability to filter meals by price range
                            </p>
                        </div>
                    </div>

                    <button
                        className="py-2.5 px-4 w-full bg-[#857d9c] text-white rounded-full mt-16">Choose
                        plan
                    </button>
                </div>

                <div
                    className="w-full flex flex-col justify-between h-full bg-[#231D4F] text-white p-[25px] rounded-xl">
                    <div>

                        <div
                            className="bg-[#393360] rounded-full px-4 py-[5px] mb-6 text-[0.8rem] text-[#BB6BD9] w-max ml-auto">
                            Most Popular
                        </div>

                        <div className="flex items-end gap-[8px]">
                            <h3 className="text-[1.8rem] font-[800]">$89</h3>
                            <span className="text-[1rem] text-gray-300 mb-2">/month</span>
                        </div>

                        <h3 className="text-[1.5rem] font-[500] mt-3">Platinum</h3>
                        <p className="text-[1rem] text-gray-300">Access to all meals</p>

                        <div className="flex flex-col gap-[10px] mt-5">
                            <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                                All features of the Gold Card
                            </p>
                            <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                                Exclusive access to premium meals (separate collection or flag)
                            </p>
                            <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                                Higher priority meal requests
                            </p>
                            <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                                <MdOutlineDone
                                    className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                                Ability to customize meal preferences
                            </p>
                           
                        </div>
                    </div>

                    <button
                        className="py-2.5 px-4 w-full bg-[#BB6BD9] text-white rounded-full mt-16">Choose
                        plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
