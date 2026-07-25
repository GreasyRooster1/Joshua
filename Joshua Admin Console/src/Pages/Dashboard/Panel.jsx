import styles from './panel.module.css';
import {Children, cloneElement, isValidElement, useState} from "react";

function Panel(props) {
    const [selectedTab, setSelectedTab] = useState(props.defaultTab);
    console.log(selectedTab,props.defaultTab);

    return <div className={styles.panel}>

        {Children.map(props.children, (child) => {
            if (isValidElement(child)) {
                return cloneElement(child, { selectedTab: selectedTab, setSelectedTab:setSelectedTab});
            }
            return child;
        })}
    </div>;
}

function Header(props) {
    return <div className={styles.panelHeader}>
        <div>
            <div className={styles.panelTitle} id="panelTitle">{props.title}</div>
            <div className={styles.panelSub} id="panelSub">{props.subTitle} </div>
        </div>
        <div className={styles.viewTabs}>
            {Children.map(props.children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child, { selectedTab: props.selectedTab, setSelectedTab:props.setSelectedTab});
                }
                return child;
            })}
        </div>
    </div>;
}

function Tab(props){
    const setTab = () => {
        props.setSelectedTab(props.id)
    }
    return (
        <button className={`${styles.viewTab} ${props.selectedTab===props.id?styles.active:""}`} onClick={setTab} data-target={props.id}>
            {props.children}
        </button>
    )
}

function View(props){
    let show = props.id===props.selectedTab
    return(<>
        { show && (<div className={styles.view}>{props.children}</div>)}
        </>
    )
}


Panel.Header = Header;
Panel.Tab = Tab;
Panel.View = View;

export default Panel;