import {Outlet} from "react-router-dom";
import {NavLinkNav, NavLinkSide} from "./navLink";

export const User = () => {
    return (
        <>
            <h1>User</h1>
            <ul className="navbar">
                <li>
                    <NavLinkNav to="/user/profile">Profile</NavLinkNav>
                </li>
                <li>
                    <NavLinkNav to="/user/account">Account</NavLinkNav>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
                    <div className="dropdown-content">
                        <NavLinkNav to="/user/list1">List 1</NavLinkNav>
                        <NavLinkNav to="/user/list2">List 2</NavLinkNav>
                    </div>
                </li>
            </ul>

            <div style={{border:"solid 1px"}}>
                <Outlet/>
            </div>

        </>
    );
};