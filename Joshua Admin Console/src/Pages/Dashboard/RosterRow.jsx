import React from 'react';
import styles from "./dashboard.module.css";
import AttentionIcon from "../../components/icons/AttentionIcon.jsx";

function StatusPill(props) {
    const { status, label } = props;
    return (
        <span className={`${styles.statusPill} ${styles[status]}`}>
            {status === "wait" ? <AttentionIcon size={11}/> : <span className={styles.dot}></span>}
            {label}
        </span>
    );
}

function RosterRow(props) {
    const { initials, name, meta, status, statusLabel, duration, class: className, teacher, lastActivity } = props;
    return (
        <tr data-status={status}>
            <td>
                <div className={styles.rosterStudent}>
                    <div className={styles.rosterAvatar}>{initials}</div>
                    <div>
                        <div className={styles.rosterName}>{name}</div>
                        <div className={styles.rosterId}>{meta}</div>
                    </div>
                </div>
            </td>
            <td><StatusPill status={status} label={statusLabel}/></td>
            <td className={styles.rosterNum}>{duration}</td>
            <td className={styles.rosterNum}>{className}</td>
            <td className={styles.rosterNum}>{teacher}</td>
            <td className={styles.rosterNum}>{lastActivity}</td>
        </tr>
    );
}

export default RosterRow;
