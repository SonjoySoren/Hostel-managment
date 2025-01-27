import { useState } from "react";
import React from 'react';
import Navbar from "../../Components/NavBar/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import './DashBoard.css'


const DashBoard = () => {
    const admin = false;
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>

            <div className="flex flex-col md:flex-row mt-1">
                {/* Sidebar */}
                <div
                    className={`md:w-1/4 p-4 bg-gray-100 dashboard ${isSidebarOpen ? 'block' : 'hidden'}`}
                >
                    {
                        admin ? <div>
                            <h2 className="text-xl font-bold mb-4">Admin DashBoard</h2>
                            <ul>
                                <li className="my-2">
                                    <a href="#" className="hover:underline">Home</a>
                                </li>
                                <li className="my-2">
                                    <a href="#" className="hover:underline">Products</a>
                                </li>
                                <li className="my-2">
                                    <a href="#" className="hover:underline">Customers</a>
                                </li>
                                {/* Add more links here */}
                            </ul>

                        </div>
                            :
                            <div>
                                <h2 className="text-xl font-bold mb-4">User DashBoard</h2>
                                <ul>
                                    <li className="my-2">
                                        <NavLink to={'/dashboard'}>My Profile</NavLink>
                                    </li>
                                    <li className="my-2">

                                    </li>
                                    <li className="my-2">

                                    </li>
                                    {/* Add more links here */}
                                </ul>

                            </div>


                    }

                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                    {/* Content area for the selected page */}
                    <Outlet></Outlet>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden fixed top-0 left-0 right-0 p-4 bg-gray-200">
                    <button
                        className="text-2xl"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                </div>


                
            </div>

        </div>
    );
};

export default DashBoard;

