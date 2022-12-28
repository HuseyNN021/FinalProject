import React from "react";
import './Header.css'
import IconHome from "./icon/HomeLogo";

function Header(){
    return(
        <header>
            <div className="header-1">
                <span><IconHome/></span>
                <span>Contact</span>
                <span>Help</span>
            </div>
            <div className="header-2">
                <span>Whislist</span>
                <span>My orders</span>
                <span>Sign in/Sign up</span>
            </div>
        </header>
    )
}
export default Header;

