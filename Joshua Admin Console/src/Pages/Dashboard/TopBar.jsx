import React from 'react';
import styles from './topBar.module.css';
import IconButton from "../../components/IconButton.jsx";
import AlertButton from "../../components/AlertButton.jsx";
import NotifIcon from "../../components/icons/NotifIcon.jsx";
import SearchIcon from "../../components/icons/SearchIcon.jsx";

function TopBar(props) {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbarSearch}>
                <SearchIcon />
                <input type="text" placeholder="Search students, classrooms, teachers…"/>
                <span className={styles.topbarSearchShortcut}>⌘ K</span>
            </div>
            <div className={styles.topbarSpacer}></div>
            <div className={styles.topbarActions}>
                <IconButton>
                    <NotifIcon/>
                </IconButton>
                <AlertButton />
            </div>
        </div>
    );
}

export default TopBar;