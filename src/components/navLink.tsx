import React from "react";
import {NavLink} from "react-router-dom";

let activeStyleSidebar = {
    backgroundColor: "#04AA6D",
    color: "white"
};
let activeStyleNavbar = {
    backgroundColor: "#191c96",
    color: "white"
};
export const NavLinkSidebar=(props)=>{
    return(
        <NavLink
            to={props.to}
            style={({ isActive }) =>
                isActive ? activeStyleSidebar : undefined
            }
        >
            {props.children}
        </NavLink>
    );
}
export const NavLinkNavbar=(props)=>{
    return(
        <NavLink
            to={props.to}
            style={({ isActive }) =>
                isActive ? activeStyleNavbar : undefined
            }
        >
            {props.children}
        </NavLink>
    );
}