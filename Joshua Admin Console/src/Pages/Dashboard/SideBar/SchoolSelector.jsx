import React from 'react';
import SchoolIcon from "../../../components/icons/SchoolIcon.jsx";
import styles from "./schoolSelector.module.css";

function SchoolSelector(props) {
    return (
        <div className={styles.schoolSelector}>
            <div className={styles.schoolSelectorLabel}>School</div>
            <button className={styles.schoolSelectorButton}>
                <div className={styles.schoolIcon}>
                    <SchoolIcon />
                </div>
                <div className={styles.schoolInfo}>
                    <div className={styles.schoolName}>Westbrook High School</div>
                    <div className={styles.schoolSub}>847 students</div>
                </div>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                     strokeLinecap="round" strokeLinejoin="round" style="color: var(--text-muted)">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
    );
}

export default SchoolSelector;