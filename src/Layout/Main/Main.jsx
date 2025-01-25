import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import ResponsiveFooter from "../../Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ResponsiveFooter></ResponsiveFooter>
        </div>
    );
};

export default Main;