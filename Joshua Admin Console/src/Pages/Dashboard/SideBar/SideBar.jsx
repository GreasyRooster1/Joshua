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
import Await from "../../../components/Await.jsx";

function SideBar(props) {

    const { data, isPending} = useQuery({
        queryKey: ['privateProfile'],
        queryFn: userService.getPrivateProfile,
    });

    console.log(data)
    return (
        <aside className={styles.sidebar}>
            <SideBarBrand />
            <SchoolSelector/>
            <SideBarNav/>

            <Await loading={isPending}>
                <div className={styles.sidebarFooter}>
                    <UserChip initals={"DW"} name={data?.name} email={data?.email}/>
                </div>
            </Await>

        </aside>
    );
}

export default SideBar;