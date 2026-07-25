import React from 'react';
import styles from "./dashboard.module.css";
import Button from "../../components/Button.jsx";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import DownloadFileIcon from "../../components/icons/DownloadFileIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

function PageHead(props) {
    return (
        <div className={styles.pageHead}>
            <div className={styles.breadcrumb}>
                <span>{props.school}</span>
                <span className={styles.breadcrumbSep}>/</span>
                <span className={styles.breadcrumbCurrent}>{props.current}</span>
            </div>
            <div className={styles.pageTitleRow}>
                <div>
                    <h1 className={styles.pageTitle}>{props.title}</h1>
                    <p className={styles.pageSubtitle}>{props.subtitle}</p>
                </div>
                <div className={styles.pageActions}>
                    <Button>
                        <DownloadFileIcon/>
                        Export report
                    </Button>
                    <PrimaryButton>
                        <PlusIcon/>
                        Quick actions
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}

export default PageHead;
