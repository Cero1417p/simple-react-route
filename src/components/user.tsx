import React from "react";
import { useLocation } from "react-router-dom";
import {NavLinkNavbar} from "./NavLink";


export const User = () => {
    const {pathname} = useLocation();
    
    return (
        <>
            <h1>User</h1>
            <ul className="navbar">
                <li>
                    <NavLinkNavbar to="/user/profile">Profile</NavLinkNavbar>
                </li>
                <li>
                    <NavLinkNavbar to="/user/account">Account</NavLinkNavbar>
                </li>
                <li className="dropdown">
                    <a  className="dropbtn" style={(pathname=== "/user/list1" || pathname==="/user/list2") ? {backgroundColor:"#191c96"}: {} }>Dropdown</a>
                    <div className="dropdown-content">
                        <NavLinkNavbar to="/user/list1">List 1</NavLinkNavbar>  
                        <NavLinkNavbar to="/user/list2">List 2</NavLinkNavbar>
                    </div>
                </li>
            </ul>
        </>
    );
};