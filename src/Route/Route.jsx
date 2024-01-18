import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
// import Product from "../components/Product/Product";

export const route = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            
            {
                path: '/register',
                element:<Registration></Registration>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
           /*   {
                 path: '/product',
                 element:<Product></Product>
             } */

        ]

    }

    
])