import React, {useState} from 'react';
import styles from "./dashboard.module.css";
import RosterRow from "./RosterRow.jsx";
import AbsentIcon from "../../components/icons/AbsentIcon.jsx";
import AttentionIcon from "../../components/icons/AttentionIcon.jsx";
import SearchIcon from "../../components/icons/SearchIcon.jsx";
import DropdownArrowIcon from "../../components/icons/DropdownArrowIcon.jsx";

const filters = [
    {id: "all", label: "All", count: 847},
    {id: "alert", label: "Absent", count: 5, color: "alert", icon: <AbsentIcon size={12}/>},
    {id: "wait", label: "Needs attention", count: 7, color: "warn", icon: <AttentionIcon size={12}/>},
    {id: "go", label: "Active", count: 712, color: "go"},
];

const groups = [
    {
        status: "alert", label: "Absent", count: 5,
        students: [
            {initials: "AM", name: "Amara Madison", meta: "Grade 11 · #2847", statusLabel: "Absent", duration: "2 days", class: "P2 · Chemistry", teacher: "Hollingsworth", lastActivity: "Apr 26, 2:47 PM"},
            {initials: "DK", name: "Dominic Kahn", meta: "Grade 10 · #3102", statusLabel: "Absent", duration: "1 day", class: "P2 · English Lit", teacher: "Terán", lastActivity: "Apr 27, 3:12 PM"},
            {initials: "JL", name: "Jasper Liu", meta: "Grade 9 · #4028", statusLabel: "Absent", duration: "1 day", class: "P2 · Algebra II", teacher: "Afolabi", lastActivity: "Apr 27, 3:30 PM"},
        ],
    },
    {
        status: "wait", label: "Needs attention", count: 7,
        students: [
            {initials: "SP", name: "Sofia Patel", meta: "Grade 12 · #1984", statusLabel: "Tapped out", duration: "Out 12 min", class: "P2 · AP Biology", teacher: "Hollingsworth", lastActivity: "Today 9:34 AM"},
            {initials: "MC", name: "Marcus Chen", meta: "Grade 11 · #2156", statusLabel: "Tapped out", duration: "Out 4 min", class: "P2 · U.S. History", teacher: "Nakamura", lastActivity: "Today 9:42 AM"},
            {initials: "TR", name: "Tessa Romano", meta: "Grade 10 · #3445", statusLabel: "Offline", duration: "3 min", class: "P2 · Chemistry", teacher: "Hollingsworth", lastActivity: "Today 9:43 AM"},
        ],
    },
    {
        status: "go", label: "Active", count: 712,
        students: [
            {initials: "RO", name: "Rhea Okonkwo", meta: "Grade 10 · #3390", statusLabel: "Active", duration: "1h 18m", class: "P2 · Chemistry", teacher: "Hollingsworth", lastActivity: "Today 8:28 AM"},
            {initials: "TB", name: "Theo Bernstein", meta: "Grade 12 · #1742", statusLabel: "Active", duration: "1h 22m", class: "P2 · AP Calculus", teacher: "Afolabi", lastActivity: "Today 8:24 AM"},
            {initials: "NV", name: "Nadia Vargas", meta: "Grade 9 · #4215", statusLabel: "Active", duration: "1h 15m", class: "P2 · English I", teacher: "Terán", lastActivity: "Today 8:31 AM"},
            {initials: "EW", name: "Ezra Whitfield", meta: "Grade 11 · #2501", statusLabel: "Active", duration: "1h 21m", class: "P2 · Physics", teacher: "Hollingsworth", lastActivity: "Today 8:25 AM"},
            {initials: "LR", name: "Lucia Rodriguez", meta: "Grade 10 · #3547", statusLabel: "Active", duration: "1h 20m", class: "P2 · AP Biology", teacher: "Hollingsworth", lastActivity: "Today 8:26 AM"},
        ],
    },
];

function RosterView(props) {
    const [filter, setFilter] = useState("go");

    const visibleGroups = groups.filter((group) => filter === "all" || filter === group.status);
    const shownCount = visibleGroups.reduce((sum, group) => sum + group.students.length, 0);

    return (
        <>
            <div className={styles.rosterToolbar}>

                <div className={styles.filterTabs} id="rosterFilters">
                    {filters.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.filterTab} ${filter === tab.id ? styles.active : ""} ${filter === tab.id && tab.color ? styles[tab.color] : ""}`}
                            data-filter={tab.id}
                            onClick={() => setFilter(tab.id)}
                        >
                            {tab.icon}
                            {tab.label} <span className={styles.filterTabCount}>{tab.count}</span>
                        </button>
                    ))}
                </div>

                <div className={styles.rosterDivider}></div>

                <button className={styles.rosterSort}>
                    <span className={styles.sortLabel}>Sort:</span>
                    <span>Status, then grade</span>
                    <DropdownArrowIcon/>
                </button>

                <div className={styles.rosterSearch}>
                    <SearchIcon/>
                    <input type="text" placeholder="Search by name or ID…"/>
                </div>
            </div>

            <table className={styles.rosterTable}>
                <thead>
                <tr>
                    <th style={{minWidth: "240px"}}>Student</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th>Class</th>
                    <th>Teacher</th>
                    <th>Last activity</th>
                </tr>
                </thead>
                <tbody id="rosterBody">
                {visibleGroups.map((group) => (
                    <React.Fragment key={group.status}>
                        <tr className={styles.groupRow} data-group={group.status}>
                            <td colSpan="6">{group.label} <span className={styles.groupCount}>{group.count} students</span></td>
                        </tr>
                        {group.students.map((student, index) => (
                            <RosterRow key={index} status={group.status} {...student}/>
                        ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
            <div className={styles.rosterFooter}>
                Showing <strong>{shownCount}</strong> of <strong>847</strong> students
                <a className={styles.link}>Load more →</a>
            </div>
        </>
    );
}

export default RosterView;
