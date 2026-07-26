import React from 'react';
import SideBar from "./SideBar/SideBar.jsx";
import TopBar from "./TopBar.jsx";
import styles from "./dashboard.module.css";
import AttentionCard from "./AttentionCard.jsx";
import AbsentIcon from "../../components/icons/AbsentIcon.jsx";
import NeedsAttentionIcon from "../../components/icons/NeedsAttentionIcon.jsx";
import StatCell from "./StatCell.jsx";
import Panel from "./Panel.jsx";
import GridIcon from "../../components/icons/GridIcon.jsx";
import AuthLock from "../../components/AuthLock.jsx";
import PageHead from "./PageHead.jsx";
import CampusView from "./CampusView.jsx";
import RosterView from "./RosterView.jsx";
import {useQuery} from "@tanstack/react-query";
import {orgService, userService} from "../../api/services.js";


function Dashboard(props) {

    return (
        <div className={styles.app}>
            <SideBar/>
            <main className={styles.main}>

                <TopBar/>

                <div className={styles.content}>
                    <div>

                        <PageHead
                            current="Dashboard"
                            title="Today's overview"
                            subtitle="Tuesday, April 28, 2026 · Period 2 in progress"
                        />

                        <div className={styles.attentionHero}>

                            <AttentionCard>
                                <AttentionCard.Head eyebrow="Absent Today" title="Not at school" severity="alert">
                                    <AbsentIcon/>
                                </AttentionCard.Head>
                                <AttentionCard.List/>

                                <AttentionCard.Foot lastUpdated={"6 seconds"}>View all absent</AttentionCard.Foot>
                            </AttentionCard>

                            <AttentionCard>
                                <AttentionCard.Head eyebrow="Needs Attention" title="Tapped out or offline"
                                                    severity="warn">
                                    <NeedsAttentionIcon/>
                                </AttentionCard.Head>
                                <AttentionCard.List/>

                                <AttentionCard.Foot lastUpdated={"6 seconds"}>View all needing
                                    attention</AttentionCard.Foot>
                            </AttentionCard>


                            <div className={styles.statsRow}>
                                <StatCell title="Total enrolled" query={orgService.getStudentCount} note="Across 5 grade levels"/>
                                <StatCell title="Active right now" value={712} note="In focus mode"/>
                                <StatCell title="Needs Attention" value={7} note="Tapped out or offline"/>
                                <StatCell title="Absent today" value={5} note="Not at school"/>
                            </div>
                        </div>

                        <Panel defaultTab={"classrooms"}>
                            <Panel.Header title={"Roster"} subTitle={"View all students"}>
                                <Panel.Tab id={"classrooms"}>
                                    <GridIcon/>
                                    Classrooms
                                </Panel.Tab>
                                <Panel.Tab id={"roster"}>
                                    <GridIcon/>
                                    Roster
                                </Panel.Tab>
                            </Panel.Header>
                            <Panel.View id={"classrooms"}>
                                <CampusView/>
                            </Panel.View>
                            <Panel.View id={"roster"}>
                                <RosterView/>
                            </Panel.View>
                        </Panel>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
