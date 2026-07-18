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
import Loading from "../../../components/Loading.jsx";

function SideBar(props) {

    const { data, isPending} = useQuery({
        queryKey: ['privateProfile'],
        queryFn: userService.getPrivateProfile,
    });

    return (
        <aside className={styles.sidebar}>
            <SideBarBrand />
            <SchoolSelector/>
            <SideBarNav/>

            <div className={styles.sidebarFooter}>
                {isPending?<Loading/>:<UserChip initals={"DW"} name={data?.username} email={data?.email}/>}
            </div>

        </aside>
    );
}

export default SideBar;