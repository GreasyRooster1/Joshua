import React from 'react';
import SchoolIcon from "../../../components/icons/SchoolIcon.jsx";
import SideBarBrand from "./SideBarBrand.jsx";
import SchoolSelector from "./SchoolSelector.jsx";

function SideBar(props) {
    return (
        <aside className="sidebar">

            <SideBarBrand />

            <SchoolSelector/>

            <div className="sidebar-footer">
                <button className="user-chip">
                    <div className="user-avatar">SC</div>
                    <div className="user-info">
                        <div className="user-name">Sarah Chen</div>
                        <div className="user-role">District Admin</div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round"
                         style="color: var(--text-muted); flex-shrink: 0">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

        </aside>
    );
}

export default SideBar;