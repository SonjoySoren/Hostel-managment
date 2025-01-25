import React from 'react';

const NewsLetter = () => {
    return (
        <section className="w-full rounded-xl sm:p-[20px]">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px]">
                <div className="w-full sm:w-[80%] lg:w-[50%]">
                    <img src="https://i.ibb.co/sKzp64h/undraw-Newsletter-re-wrob-1.png" alt="image"
                        className="w-full" />
                </div>

                <div className="w-full lg:w-[45%]">
                    <b className="text-[1.3rem] sm:text-[2rem]">Get our weekly</b>
                    <h1 className="text-[2.1rem] sm:text-[3.2rem] font-[800] uppercase text-[#FF354D] leading-[50px]">newsletter</h1>
                    <p className="text-[1rem] sm:text-[1.3rem] mt-5 sm:mt-8">Get weekly
                        updates on the newest food items and exciting offer right
                        in your mailbox. <b>Subscribe now!</b></p>
                </div>
            </div>

            <div className="relative mt-10 w-full sm:w-[85%] mx-auto">
                <input placeholder="Email Address"
                    className="py-3 px-4 pr-[130px] border border-border rounded-l-md outline-none focus:ring-0 focus:border-[#FF354D] w-full" />
                <button
                    className="py-3 px-6 h-full absolute top-0 right-0 hover:bg-[#ea253c] bg-[#FF354D] text-white rounded-r-md">Subscribe
                </button>
            </div>
        </section>
    );
};

export default NewsLetter;