import React from 'react';
import styles from './topBar.module.css';
import IconButton from "../../components/IconButton.jsx";
import AlertButton from "../../components/AlertButton.jsx";

function TopBar(props) {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbarSearch}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="Search students, classrooms, teachers…"/>
                <span className={styles.topbarSearchShortcut}>⌘ K</span>
            </div>
            <div className={styles.topbarSpacer}></div>
            <div className={styles.topbarActions}>
                <IconButton />
                <AlertButton />
            </div>
        </div>
    );
}

export default TopBar;