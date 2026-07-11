import React from 'react';
import SchoolIcon from "../../../components/icons/SchoolIcon.jsx";
import SideBarBrand from "./SideBarBrand.jsx";
import SchoolSelector from "./SchoolSelector.jsx";
import SideBarNav from "./SideBarNav.jsx";
import styles from "./sideBar.module.css";
import RightArrowIcon from "../../../components/icons/RightArrowIcon.jsx";
import UserChip from "../../../components/UserChip.jsx";

function SideBar(props) {
    return (
        <aside className={styles.sidebar}>
            <SideBarBrand />
            <SchoolSelector/>
            <SideBarNav/>

            <div className={styles.sidebarFooter}>
                <UserChip initals={"DW"} name={"Dillon Wilson"} role={"Site Admin"}/>
            </div>

        </aside>
    );
}

export default SideBar;