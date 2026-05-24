import React from 'react';
import styles from './sideBarNav.module.css';
import {NavLink} from "react-router";
import NavItem from "./NavItem.jsx";
import DashboardIcon from "../../../components/icons/DashboardIcon.jsx";

function SideBarNav(props) {
    return (
        <nav className={styles.sidebarNav}>

            <div className={styles.navSectionLabel}>Monitoring</div>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Dashboard
            </NavItem>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Classrooms
            </NavItem>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Roster
            </NavItem>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Attention
                <span className="nav-item-badge">12</span>
            </NavItem>

            <div className="nav-section-label">Operations</div>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Reports
            </NavItem>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Teachers
            </NavItem>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Policies
            </NavItem>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Activity Log
            </NavItem>

            <div className="nav-section-label">Account</div>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Billing
            </NavItem>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Help &amp; support
            </NavItem>

        </nav>
    );
}

export default SideBarNav;