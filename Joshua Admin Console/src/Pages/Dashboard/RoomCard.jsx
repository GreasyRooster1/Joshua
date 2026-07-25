import React from 'react';
import styles from "./dashboard.module.css";
import AttentionIcon from "../../components/icons/AttentionIcon.jsx";

function RoomCard(props) {
    const { title, teacher, enrolled, period, compliance, active, wait, alert, attention } = props;

    // The card modifier is driven by whether/how it needs attention.
    const modifier = attention?.severity === "alert" ? styles.hasAlert
        : attention ? styles.hasIssue : "";

    const segments = [
        { flex: active, cls: styles.go },
        { flex: wait, cls: styles.wait },
        { flex: alert, cls: styles.alert },
    ].filter((seg) => seg.flex > 0);

    return (
        <div className={`${styles.room} ${modifier}`}>
            <div className={styles.roomHeader}>
                <div>
                    <div className={styles.roomTitle}>{title}</div>
                    <div className={styles.roomMeta}>{teacher} · <strong>{enrolled} enrolled</strong></div>
                </div>
                <div className={styles.roomBadge}>{period}</div>
            </div>
            <div className={styles.roomCompliance}>
                <span className={styles.roomComplianceNum}>{compliance.pct}%</span>
                <span className={styles.roomComplianceLabel}>compliance · {compliance.detail}</span>
            </div>
            <div className={styles.roomBar}>
                {segments.map((seg, index) => (
                    <div key={index} className={`${styles.roomBarSeg} ${seg.cls}`} style={{flex: seg.flex}}></div>
                ))}
            </div>
            <div className={styles.roomStats}>
                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.go}`}></span><strong>{active}</strong> active</div>
                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.wait}`}></span><strong>{wait}</strong> attention</div>
                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.alert}`}></span><strong>{alert}</strong> absent</div>
            </div>
            {attention && (
                <div className={`${styles.roomAttention} ${attention.severity === "alert" ? styles.alert : ""}`}>
                    <AttentionIcon size={11}/>
                    {attention.message}
                </div>
            )}
        </div>
    );
}

export default RoomCard;
