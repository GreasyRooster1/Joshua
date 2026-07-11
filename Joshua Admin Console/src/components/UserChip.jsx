import React from 'react';
import styles from "../Pages/Dashboard/SideBar/sideBar.module.css";
import RightArrowIcon from "./icons/RightArrowIcon.jsx";

function UserChip(props) {
    return (
        <button className={styles.userChip}>
            <div className={styles.userAvatar}>{props.initals}</div>
            <div className={styles.userInfo}>
                <div className={styles.userName}>{props.name}</div>
                <div className={styles.userRole}>{props.role}</div>
            </div>
            {/*<RightArrowIcon/>*/}
        </button>
    );
}

export default UserChip;