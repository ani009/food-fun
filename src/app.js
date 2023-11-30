import React from "react";
import ReactDOM from "react-dom/client";
import HeaderContent from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
import About from "./component/about";
import Error from "./component/error";
import Restromenu from "./component/restrolist";

import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";


const AppLayout=()=>{
    return (
        <>
        <HeaderContent/>
        <Outlet/>
        {/* <Body/> */}
        <Footer/>
        </>
    );
};
const approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
            path:"/",
            element:<Body/>,
            },
            {
            path:"/about",
            element:<About/>,
            },
            {
            path:"/restaurant/:id",
            element:<Restromenu/>,
            },
        ],
    },
    
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={approuter} />);