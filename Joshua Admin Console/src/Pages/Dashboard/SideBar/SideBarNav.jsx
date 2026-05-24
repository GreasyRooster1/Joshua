import React from 'react';
import styles from './sideBarNav.module.css';
import {NavLink} from "react-router";
import NavItem from "./NavItem.jsx";
import DashboardIcon from "../../../components/icons/DashboardIcon.jsx";
import ClassroomIcon from "../../../components/icons/ClassroomIcon.jsx";
import RosterIcon from "../../../components/icons/RosterIcon.jsx";
import AttentionIcon from "../../../components/icons/AttentionIcon.jsx";
import ReportsIcon from "../../../components/icons/ReportsIcon.jsx";
import TeachersIcon from "../../../components/icons/TeachersIcon.jsx";
import PoliciesIcon from "../../../components/icons/PoliciesIcon.jsx";
import ActivityLogIcon from "../../../components/icons/ActivityLogIcon.jsx";
import BillingIcon from "../../../components/icons/BillingIcon.jsx";
import HelpIcon from "../../../components/icons/HelpIcon.jsx";

function SideBarNav(props) {
    return (
        <nav className={styles.sidebarNav}>

            <div className={styles.navSectionLabel}>Monitoring</div>

            <NavItem icon={<DashboardIcon/>} active={true}>
                Dashboard
            </NavItem>

            <NavItem icon={<ClassroomIcon/>} active={true}>
                Classrooms
            </NavItem>

            <NavItem icon={<RosterIcon/>} active={true}>
                Roster
            </NavItem>

            <NavItem icon={<AttentionIcon/>} active={true}>
                Attention
                <span className="nav-item-badge">12</span>
            </NavItem>

            <div className="nav-section-label">Operations</div>

            <NavItem icon={<ReportsIcon/>} active={true}>
                Reports
            </NavItem>

            <NavItem icon={<TeachersIcon/>} active={true}>
                Teachers
            </NavItem>

            <NavItem icon={<PoliciesIcon/>} active={true}>
                Policies
            </NavItem>

            <NavItem icon={<ActivityLogIcon/>} active={true}>
                Activity Log
            </NavItem>

            <div className="nav-section-label">Account</div>

            <NavItem icon={<BillingIcon/>} active={true}>
                Billing
            </NavItem>

            <NavItem icon={<HelpIcon/>} active={true}>
                Help &amp; support
            </NavItem>

        </nav>
    );
}

export default SideBarNav;