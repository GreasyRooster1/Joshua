import React from 'react';
import styles from "./dashboard.module.css";

function StatCell(props) {
    return (
        <div className={styles.statCell}>
            <div className={styles.statLabel}><span className={`${styles.statDot} ${styles.brand}`}></span>{props.title}</div>
            <div className={styles.statValue}>{props.value}</div>
            <div className={styles.statNote}>{props.note}</div>
        </div>
    );
}

export default StatCell;