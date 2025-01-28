import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/LogIn";
import MealDetails from "../Pages/MealDetails/MealDetails";
import AllMeal from "../Pages/AllMeal/AllMeal";
import Upcoming from "../Pages/Upcoming/Upcoming";
import DashBoard from "../Layout/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoutes";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import Requested from "../Pages/Dashboard/Requested/Requested";
import UserReview from "../Pages/Dashboard/UserReview/UserReview";
import Update from "../Pages/Dashboard/UserReview/Update";
import AdminRoute from "./AdminRoute";
import MyProfileAdmin from "../Pages/Dashboard/MyProfileAdmin/MyProfileAdmin";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AddMeal from "../Pages/Dashboard/AddItem/AddMeal";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'joinUs',
                element: <Login></Login>
            },
            {
                path:'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/details/:id',
                element: <MealDetails></MealDetails>
            },
            {
                path: '/allMeal',
                element: <AllMeal></AllMeal>,
            },
            {
                path: '/upcoming',
                element: <Upcoming></Upcoming>
            }
        ]
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            }, 
            {
                path: 'requested',
                element: <PrivateRoute><Requested></Requested></PrivateRoute>
            },
            {
                path: 'myReview',
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>,
                
            },
            {
                
                    path: 'updateReview/:id',
                    element: <PrivateRoute><Update></Update></PrivateRoute>
                
            },
            // admin routes 
            {
                path:'adminProfile',
                element:<AdminRoute><MyProfileAdmin></MyProfileAdmin></AdminRoute>
            },
            {
                path:'manageUser',
                element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path:'addMeal',
                element:<AdminRoute><AddMeal></AddMeal></AdminRoute>
            },
        ]
    }
])
    


export default Routes;