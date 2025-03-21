import { IoFastFoodOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";



const Navbar = () => {

    const [img, setImg] = useState('')
    const { user, logOut } = useAuth();
    useEffect(() => {
        setImg(user?.photoURL)
        

    }, [ setImg, user?.photoURL])
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(result => console.log(result))
    }
    const links = <>
        <li>
            <NavLink to={'/'}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to={'/allMeal'}>
                Meal
            </NavLink>

        </li>
        <li><NavLink to={'/upcoming'}>
            Upcoming Meals
        </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'}>

                        <span className="btn btn-ghost text-3xl "><IoFastFoodOutline className="text-3xl" /> Hostel</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="notification-icon mr-3">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                    {!user ? <div>
                        <Link to={'/joinUs'}>
                            <button className="btn btn-primary">Join us</button>

                        </Link>
                    </div> :
                        <div className="dropdown dropdown-end profile-pic">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="user"
                                        src={img} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between pointer-events-none">
                                        {user?.displayName}

                                    </a>
                                </li>
                                <li>

                                    <Link to={'/dashboard/profile'}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li onClick={handleLogout}>
                                    <Link>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;