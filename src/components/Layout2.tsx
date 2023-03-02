import React from "react";
import {NavLinkSidebar} from "./NavLink";
import {Outlet} from "react-router-dom";

export function Layout2() {
    return (
        <>
            <ul className="sidebar">
                <li>
                    <h3 style={{padding:"8px 16px"}}>Menu</h3>
                </li>
                <li>
                    <NavLinkSidebar to="home">Home</NavLinkSidebar>
                </li>
                <li >
                    <NavLinkSidebar to="user">User</NavLinkSidebar>
                </li>
            </ul>
            <div style={{marginLeft:"25%",padding:"1px 16px",height:"1000px"}}>
                <Outlet/>
            </div>

        </>
    );
}