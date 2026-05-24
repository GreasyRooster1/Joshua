import React from 'react';
import styles from "./sideBarBrand.module.css"

function SideBarBrand(props) {
    return (
        <div className={styles.sidebarBrand}>
            <div className={styles.brandLogo}></div>
            <div className={styles.brandName}>Joshua</div>
        </div>
    );
}

export default SideBarBrand;