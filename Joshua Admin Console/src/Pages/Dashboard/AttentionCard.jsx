import React, {useState} from 'react';
import styles from "./dashboard.module.css";

function AttentionCard(props) {
    const [data, setData] = useState([
        {
            avatar:"DW",
            name:"Dillon Wilson",
            grade:11,
            lastSeenDelta:"2 days",
            lastSeenDate:"1/1/26",
        },
        {
            avatar:"DW",
            name:"Dillon Wilson",
            grade:11,
            lastSeenDelta:"2 days",
            lastSeenDate:"1/1/26",
        },
        {
            avatar:"DW",
            name:"Dillon Wilson",
            grade:11,
            lastSeenDelta:"2 days",
            lastSeenDate:"1/1/26",
        }
    ])
    return (
        <div className={styles.attentionCard}>
            {React.Children.map(props.children, (child) => {
                if (React.isValidElement(child)){

                    if(child.type === Head||child.type === List) {
                        console.log(data);
                        return React.cloneElement(child, {data: [...data], ...props});
                    }
                }
                return child; // Return unchanged if it doesn't match
            })}
        </div>
    );
}

function Head(props){
    console.log(props);
    return (
        <div className={styles.attentionCardHead}>
            <div className={`${styles.attentionCardIcon} ${styles[props.severity]}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
            </div>
            <div className={styles.attentionCardMeta}>
                <div className={`${styles.attentionCardEyebrow} ${styles[props.severity]}`}>{props.eyebrow}</div>
                <div className={styles.attentionCardTitle}>{props.title}</div>
            </div>
            <div className={styles.attentionCardCount}>{props.data.length}</div>
        </div>

    )
}

function List(props) {
    return (
        <div className={styles.attentionCardList}>
            {props.data.map((item, index) => (
                <Row data={item} key={index}/>
            ))}
        </div>
    );
}

function Row(props){
    return (
        <div className={styles.attentionRow}>
            <div className={styles.attentionRowAvatar}>{props.data.avatar}</div>
            <div className={styles.attentionRowInfo}>
                <div className={styles.attentionRowName}>{props.data.name}</div>
                <div className={styles.attentionRowMeta}>Grade {props.data.grade}</div>
            </div>
            <div className={styles.attentionRowTime}>
                <strong>{props.data.lastSeenDelta}</strong>
                Last seen {props.data.lastSeenDate}
            </div>
        </div>
    );
}

function Foot(props){
    return (
        <div className={styles.attentionCardFoot}>
            <a className={styles.link}>{props.children} →</a>
            <span className={styles.meta}>Updated {props.lastUpdated} ago</span>
        </div>
    )
}

AttentionCard.Head = Head;
AttentionCard.List = List;
AttentionCard.Foot = Foot;
AttentionCard.Row = Row;

export default AttentionCard;