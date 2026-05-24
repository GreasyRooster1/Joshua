import React from 'react';

function RightArrowIcon(props) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round"
             style={{color: "var(--text-muted)", flexShrink: 0}}>
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );
}

export default RightArrowIcon;