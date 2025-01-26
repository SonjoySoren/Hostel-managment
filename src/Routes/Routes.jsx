import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/LogIn";
import MealDetails from "../Pages/MealDetails/MealDetails";
import AllMeal from "../Pages/AllMeal/AllMeal";

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
            }
        ]
        
    }
])
    


export default Routes;