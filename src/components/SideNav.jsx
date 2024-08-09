import React from "react";
import './SideNav.css';

const SideNav = ({ children }) => {
    return (
        <div className="side-nav">
            {children}
        </div>
    )
}

export default React.memo(SideNav);