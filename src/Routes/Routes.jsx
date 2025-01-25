import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/LogIn";

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
            }
        ]
        
    }
])
    


export default Routes;