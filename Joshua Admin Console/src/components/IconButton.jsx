import React from 'react';
import styles from './iconButton.module.css';

function IconButton(props) {
    return (
        <button className={styles.iconBtn} title="Notifications">
            {props.children}
            <span className={styles.iconBtnDot}></span>
        </button>
    );
}

export default IconButton;