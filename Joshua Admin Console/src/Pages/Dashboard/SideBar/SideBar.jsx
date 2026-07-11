import React from 'react';
import SchoolIcon from "../../../components/icons/SchoolIcon.jsx";
import SideBarBrand from "./SideBarBrand.jsx";
import SchoolSelector from "./SchoolSelector.jsx";
import SideBarNav from "./SideBarNav.jsx";
import styles from "./sideBar.module.css";
import RightArrowIcon from "../../../components/icons/RightArrowIcon.jsx";
import UserChip from "../../../components/UserChip.jsx";
import {userService} from "../../../api/services.js";
import {useQuery} from "@tanstack/react-query";

function SideBar(props) {

    const { data } = useQuery({
        queryKey: ['privateProfile'],
        queryFn: userService.getPrivateProfile,   // clean — the service method IS the query fn
    });

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