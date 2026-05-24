import React from 'react';
import styles from './button.module.css';

function AlertButton(props) {
    return (
        <button className={`${styles.button} ${styles.buttonAlert}`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                 strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Emergency Release
        </button>
    );
}

export default AlertButton;