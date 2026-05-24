import React from 'react';
import styles from "./sideBarNav.module.css";

function NavItem(props) {
    return (
        <a className={`${styles.navItem} ${props.active?styles.active:""}`}>
            {props.icon}
            {props.children}
        </a>
    );
}

export default NavItem;