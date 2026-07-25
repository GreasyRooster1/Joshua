import React from 'react';
import styles from "./dashboard.module.css";
import RoomCard from "./RoomCard.jsx";

const rooms = [
    {
        title: "Chemistry · Rm 204", teacher: "Dr. Hollingsworth", enrolled: 28, period: "P2",
        compliance: {pct: 86, detail: "24 of 28 active"}, active: 24, wait: 2, alert: 2,
        attention: {severity: "warn", message: "2 students need attention"},
    },
    {
        title: "AP Calculus · Rm 312", teacher: "Afolabi", enrolled: 24, period: "P2",
        compliance: {pct: 96, detail: "23 of 24 active"}, active: 23, wait: 0, alert: 1,
    },
    {
        title: "English Lit · Rm 108", teacher: "Terán", enrolled: 26, period: "P2",
        compliance: {pct: 81, detail: "21 of 26 active"}, active: 21, wait: 4, alert: 1,
        attention: {severity: "alert", message: "Below 90% threshold — 4 need attention"},
    },
    {
        title: "U.S. History · Rm 221", teacher: "Nakamura", enrolled: 27, period: "P2",
        compliance: {pct: 81, detail: "22 of 27 active"}, active: 22, wait: 3, alert: 2,
        attention: {severity: "warn", message: "3 students need attention"},
    },
    {
        title: "AP Biology · Rm 217", teacher: "Dr. Hollingsworth", enrolled: 22, period: "P2",
        compliance: {pct: 86, detail: "19 of 22 active"}, active: 19, wait: 2, alert: 1,
    },
    {
        title: "Algebra II · Rm 305", teacher: "Afolabi", enrolled: 25, period: "P2",
        compliance: {pct: 92, detail: "23 of 25 active"}, active: 23, wait: 1, alert: 1,
    },
];

function CampusView(props) {
    return (
        <div className={styles.campus}>
            {rooms.map((room, index) => (
                <RoomCard key={index} {...room}/>
            ))}
        </div>
    );
}

export default CampusView;
