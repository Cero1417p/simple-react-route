import { NavLinkSidebar } from "./NavLink"
import {NavLink, Outlet} from "react-router-dom"
export function Layout() {
    return (
        <>
            <ul className="sidebar">
                <li>
                    <h3 style={{ padding: "8px 16px" }}>Index</h3>
                    <NavLink style={{fontWeight:"bolder",fontSize:"1.2rem"}} to={"/"}>Inicio</NavLink>
                </li>
                <li>
                    <NavLinkSidebar to="home">Home</NavLinkSidebar>
                </li>
                <li>
                    <NavLinkSidebar to="user">User</NavLinkSidebar>
                </li>
            </ul>
            <div style={{ marginLeft: "25%", padding: "1px 16px", height: "1000px" }}>
                <Outlet />
            </div>
        </>
    )
}
