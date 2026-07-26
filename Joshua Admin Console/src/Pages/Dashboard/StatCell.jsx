import React from 'react';
import styles from "./dashboard.module.css";
import {useQuery} from "@tanstack/react-query";
import Await from "../../components/Await.jsx";

function StatCell(props) {
    const { data,isPending} = useQuery({
        queryKey: ['statCell'+props.title],
        queryFn: props.query,
    });
    return (
        <div className={styles.statCell}>
            <div className={styles.statLabel}><span className={`${styles.statDot} ${styles.brand}`}></span>{props.title}</div>
            <Await loading={isPending}><div className={styles.statValue}>{data}</div></Await>
            <div className={styles.statNote}>{props.note}</div>
        </div>
    );
}

export default StatCell;