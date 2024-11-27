
// import React, {useState} from 'react';
import { createBrowserRouter, Outlet, NavLink ,RouterProvider, useRouteError } from "react-router-dom";
import { Single } from "./pages/Single";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement: <PageError/>,
        children: [
        {
                path:'blog',
                element: <div className="row">
                <aside className="col-3">
                    <h2>Sidebar</h2>
                </aside>
                <main className="col-9">
                    <Outlet/>
                </main>
                </div>,
                children: [
                {
                    path: '',
                    element: <Blog />,
                    loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                },
                {
                    path: ':id',
                    element: <Single/>

                }
            ]
               
        }
         ,
        {
            path:'about',
            element: <About/>
         }, ] 
    }

]);

function PageError() {

    const error = useRouteError();
    console.log(error);

    return <>

   
     <h1>Une erreur est survenue</h1>
     <p>
     {error?.error.toString() ?? error?.toString()} 
     </p>
     </>
}

function Root() {
    return <>
    <header>
        <nav>
            <NavLink to='/'>Home</NavLink><br/>
            <NavLink to='/blog'>Blog</NavLink><br/>
            <NavLink to='/about'>About me</NavLink><br/>
            
        </nav>
    </header>

    <div className="container my-4">
        <Outlet/>
    </div>
    </>
    
}



function App() {
    return <RouterProvider router={router}/>
    
}

export default App;

