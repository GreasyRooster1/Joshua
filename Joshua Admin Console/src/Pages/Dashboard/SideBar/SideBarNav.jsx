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

            <NavItem icon={<ClassroomIcon/>} active={false}>
                Classrooms
            </NavItem>

            <NavItem icon={<RosterIcon/>} active={false}>
                Roster
            </NavItem>

            <NavItem icon={<AttentionIcon/>} active={false}>
                Attention
                <span className={styles.navItemBadge}>12</span>
            </NavItem>

            <div className={styles.navSectionLabel}>Operations</div>

            <NavItem icon={<ReportsIcon/>} active={false}>
                Reports
            </NavItem>

            <NavItem icon={<TeachersIcon/>} active={false}>
                Teachers
            </NavItem>

            <NavItem icon={<PoliciesIcon/>} active={false}>
                Policies
            </NavItem>

            <NavItem icon={<ActivityLogIcon/>} active={false}>
                Activity Log
            </NavItem>

            <div className={styles.navSectionLabel}>Account</div>

            <NavItem icon={<BillingIcon/>} active={false}>
                Billing
            </NavItem>

            <NavItem icon={<HelpIcon/>} active={false}>
                Help &amp; support
            </NavItem>

        </nav>
    );
}

export default SideBarNav;