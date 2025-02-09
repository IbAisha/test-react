import { useLoaderData, NavLink, Await} from "react-router-dom"
import { Spinner } from "../components/Spinner";
import {Suspense} from "react"
;
export function Blog () {

    const {posts} = useLoaderData()
    console.log({posts});
    return (
    <>
    <h1>Mon blog</h1>

    <Suspense fallback={<Spinner/>}>
        <Await resolve={posts}>
            {(posts => { <ul>
        {posts.map((post) => (
            <li key={post.id}>
                <NavLink to={post.id}>{post.title}</NavLink>
            </li>
        ))}
    </ul>
     })}
        </Await>

        </Suspense>

    
    </>
    );
}