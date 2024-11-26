
// import React, {useState} from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element: 
        <div>
            <Outlet/>
                
        </div> ,
        children: [
            {
            path:'blogs',
            element: <div>Blog</div> 
        }
         ,
        {
            path:'about',
            element: <div>about</div>
         }, ] 
    }

])



function App() {
    return <RouterProvider router={router}/>
    
}

export default App;

