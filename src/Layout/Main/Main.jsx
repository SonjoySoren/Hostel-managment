import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";


const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;