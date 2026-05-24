import React from 'react';
import styles from './button.module.css';

function PrimaryButton(props) {
    return (
        <button className={`${styles.button} ${styles.buttonPrimary}`}>
            {props.children}
        </button>
    );
}

export default PrimaryButton;