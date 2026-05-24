import React from 'react';
import SchoolIcon from "../../../components/icons/SchoolIcon.jsx";
import styles from "./schoolSelector.module.css";
import DropdownArrowIcon from "../../../components/icons/DropdownArrowIcon.jsx";

function SchoolSelector(props) {
    return (
        <div className={styles.schoolSelector}>
            <div className={styles.schoolSelectorLabel}>School</div>
            <button className={styles.schoolSelectorButton}>
                <div className={styles.schoolIcon}>
                    <SchoolIcon />
                </div>
                <div className={styles.schoolInfo}>
                    <div className={styles.schoolName}>Westbrook High School</div>
                    <div className={styles.schoolSub}>847 students</div>
                </div>
                <DropdownArrowIcon/>
            </button>
        </div>
    );
}

export default SchoolSelector;