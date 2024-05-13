import {createBrowserRouter } from "react-router-dom";
import App from "../App"
import HomePage from "../Pages/HomePage/HomePage";
import React from "react";
import FormPage from "../Pages/FormPage/FormPage";


export const router= createBrowserRouter([

    {
        path:"/",
        element:<App/>,
        children:[
            {path:"", element:<HomePage/>},
            {path:"form/", element:<FormPage />},

        ]
    }
])

