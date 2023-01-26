import {NavLinkSide} from "./navLink";
import {Outlet} from "react-router-dom";

export function Layout() {
    return (
        <>
            <ul className="sidebar">
                <li>
                    <h3 style={{padding:"8px 16px"}}>Menu</h3>
                </li>
                <li>
                    <NavLinkSide to="home">Home</NavLinkSide>
                </li>
                <li >
                    <NavLinkSide to="user">User</NavLinkSide>
                </li>
            </ul>
            <div style={{marginLeft:"25%",padding:"1px 16px",height:"1000px"}}>
                <Outlet/>
            </div>

        </>
    );
}