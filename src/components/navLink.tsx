import {NavLink} from "react-router-dom";

let activeStyleSide = {
    backgroundColor: "#04AA6D",
    color: "white"
};
let activeStyleNav = {
    backgroundColor: "#191c96",
    color: "white"
};
export const NavLinkSide=(props)=>{
    return(
        <NavLink
            to={props.to}
            style={({ isActive }) =>
                isActive ? activeStyleSide : undefined
            }
        >
            {props.children}
        </NavLink>
    );
}
export const NavLinkNav=(props)=>{
    return(
        <NavLink
            to={props.to}
            style={({ isActive }) =>
                isActive ? activeStyleNav : undefined
            }
        >
            {props.children}
        </NavLink>
    );
}