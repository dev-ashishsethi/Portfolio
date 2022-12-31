import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return(
        <nav class='navigation '>
        <div class='nav-brand'>Ashish Sethi</div>
            <ul class='list-non-bullet nav-pills'>
                <li class='list-item-inline'><NavLink className={({ isActive }) =>isActive?'link link-active':'link'} to="/">Home</NavLink></li>
                <li class='list-item-inline'><NavLink className={({ isActive }) =>isActive?'link link-active':'link'} to="/project">Projects</NavLink></li>
                <li class='list-item-inline'><NavLink className={({ isActive }) =>isActive?'link link-active':'link'} to="/blog">Blogs</NavLink></li>
            </ul>
    </nav> 
    )
}