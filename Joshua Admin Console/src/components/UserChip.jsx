import React from 'react';
import styles from "./userChip.module.css";
import RightArrowIcon from "./icons/RightArrowIcon.jsx";

function UserChip(props) {
    return (
        <button className={styles.userChip}>
            <div className={styles.userAvatar}>{props.initals}</div>
            {props.name?
            <div className={styles.userInfo}>
                <div className={styles.userName}>{props.name}</div>
                <div className={styles.email}>{props.email}</div>
            </div>:
            <div className={styles.userInfo}>
                <div className={styles.userName}>{props.email}</div>
            </div>
            }
            {/*<RightArrowIcon/>*/}
        </button>
    );
}

export default UserChip;