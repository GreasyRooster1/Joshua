import React from 'react';
import styles from './topBar.module.css';

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
                <button className="icon-btn" title="Notifications">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    <span className="icon-btn-dot"></span>
                </button>
                <button className="btn btn-alert">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
                         strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Emergency Release
                </button>
            </div>
        </div>
    );
}

export default TopBar;