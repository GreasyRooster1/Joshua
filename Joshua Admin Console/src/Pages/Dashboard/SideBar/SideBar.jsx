import React from 'react';
import SchoolIcon from "../../../components/icons/SchoolIcon.jsx";
import SideBarBrand from "./SideBarBrand.jsx";
import SchoolSelector from "./SchoolSelector.jsx";
import SideBarNav from "./SideBarNav.jsx";
import styles from "./sideBar.module.css";
import RightArrowIcon from "../../../components/icons/RightArrowIcon.jsx";

function SideBar(props) {
    return (
        <aside className={styles.sidebar}>
            <SideBarBrand />
            <SchoolSelector/>
            <SideBarNav/>

            <div className={styles.sidebarFooter}>
                <button className={styles.userChip}>
                    <div className={styles.userAvatar}>SC</div>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>Sarah Chen</div>
                        <div className={styles.userRole}>District Admin</div>
                    </div>
                    <RightArrowIcon/>
                </button>
            </div>

        </aside>
    );
}

export default SideBar;