import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/Banner/image1Dark.jpg';
import bannerImg2 from '../../../assets/Banner/image2Dark.jpg';

const Banner = () => {
    return (
        <div>
            <div>
                <Carousel showThumbs={true} infiniteLoop={true}>
                    <div className='w-full h-[800px]  bg-cover bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${bannerImg1})` }} >

                        <div className='flex items-center justify-center h-full z-20'>
                            <div className="bg-gray-300/85 p-10 rounded-lg shadow-md">
                                <h1 className='text-5xl text-center'> Your Health, Our Priority</h1>
                                <p className='text-2xl mt-5'>We prioritize hygiene and safety in every meal we serve.</p>
                                <div className="join mt-5">
                                    <div>
                                        <label className="input validator join-item">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                                            <input type="text" placeholder="search" required />
                                        </label>
                                    </div>
                                    <button className="btn btn-neutral join-item">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[800px]  bg-cover bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${bannerImg2})` }} >

                        <div className='flex items-center justify-center h-full z-20'>
                            <div className="bg-gray-300/85 p-10 rounded-lg shadow-md">
                            <h1 className='text-5xl text-center'> Your Health, Our Priority</h1>
                                <p className='text-2xl mt-5'>We prioritize hygiene and safety in every meal we serve.</p>
                                <div className="join mt-5">
                                    <div>
                                        <label className="input validator join-item">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                                            <input type="text" placeholder="search" required />
                                        </label>
                                    </div>
                                    <button className="btn btn-neutral join-item">Search</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;