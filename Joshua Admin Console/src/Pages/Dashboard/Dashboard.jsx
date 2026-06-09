import React from 'react';
import SideBar from "./SideBar/SideBar.jsx";
import TopBar from "./TopBar.jsx";
import styles from "./dashboard.module.css";
import Button from "../../components/Button.jsx";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import DownloadFileIcon from "../../components/icons/DownloadFileIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";
import AttentionCard from "./AttentionCard.jsx";
import AbsentIcon from "../../components/icons/AbsentIcon.jsx";
import NeedsAttentionIcon from "../../components/icons/NeedsAttentionIcon.jsx";
import StatCell from "./StatCell.jsx";
import Panel from "./Panel.jsx";
import GridIcon from "../../components/icons/GridIcon.jsx";



function Dashboard(props) {
    return (
            <div className={styles.app}>
                <SideBar/>
                <main className={styles.main}>

                    <TopBar/>

                    <div className={styles.content}>
                        <div>

                            <div className={styles.pageHead}>
                                <div className={styles.breadcrumb}>
                                    <span>Westbrook High School</span>
                                    <span className={styles.breadcrumbSep}>/</span>
                                    <span className={styles.breadcrumbCurrent}>Dashboard</span>
                                </div>
                                <div className={styles.pageTitleRow}>
                                    <div>
                                        <h1 className={styles.pageTitle}>Today's overview</h1>
                                        <p className={styles.pageSubtitle}>Tuesday, April 28, 2026 · Period 2 in
                                            progress</p>
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
                                    <StatCell title="Total enrolled" value={999} note="Across 5 grade levels"/>
                                    <StatCell title="Active right now" value={712} note="In focus mode"/>
                                    <StatCell title="Needs Attention" value={7} note="Tapped out or offline"/>
                                    <StatCell title="Absent today" value={5} note="Not at school"/>
                                </div>
                            </div>

                            <Panel>
                                <Panel.Header title={"Roster"} subTitle={"View all students"}>
                                    <Panel.Tab>
                                        <GridIcon/>
                                        Classrooms
                                    </Panel.Tab>
                                    <Panel.Tab>
                                        <GridIcon/>
                                        Roster
                                    </Panel.Tab>
                                </Panel.Header>
                            </Panel>
                        </div>
                    </div>
                </main>
            </div>
    );

        // <script>
        //     // VIEW SWITCHING
        //     const viewTabs = document.querySelectorAll('.view-tab');
        //     const views = document.querySelectorAll('.view');
        //     const panelTitle = document.getElementById('panelTitle');
        //     const panelSub = document.getElementById('panelSub');
        //
        //     const viewMeta = {
        //     classrooms: {
        //     title: 'Live campus view — Period 2',
        //     sub: 'Real-time compliance by classroom. Click any room to see the roster.'
        // },
        //     roster: {
        //     title: 'Student roster — all 847 students',
        //     sub: 'Filter by status, sort by grade, or search for any student.'
        // }
        // };
        //
        //     viewTabs.forEach(tab => {
        //     tab.addEventListener('click', () => {
        //         const target = tab.getAttribute('data-target');
        //         viewTabs.forEach(t => t.classList.remove('active'));
        //         tab.classList.add('active');
        //         views.forEach(v => v.classList.toggle('active', v.getAttribute('data-view') === target));
        //         if (viewMeta[target]) {
        //             panelTitle.textContent = viewMeta[target].title;
        //             panelSub.textContent = viewMeta[target].sub;
        //         }
        //     });
        // });
        //
        //     // ROSTER FILTERING
        //     const filterTabs = document.querySelectorAll('#rosterFilters .filter-tab');
        //     const studentRows = document.querySelectorAll('#rosterBody tr[data-status]');
        //     const groupRows = document.querySelectorAll('#rosterBody tr.group-row');
        //
        //     function applyFilter(filter) {
        //     studentRows.forEach(row => {
        //         const status = row.getAttribute('data-status');
        //         const visible = (filter === 'all') || (status === filter);
        //         row.style.display = visible ? '' : 'none';
        //     });
        //
        //     groupRows.forEach(row => {
        //     const group = row.getAttribute('data-group');
        //     const visible = (filter === 'all') || (group === filter);
        //     row.style.display = visible ? '' : 'none';
        // });
        // }
        //
        //     filterTabs.forEach(tab => {
        //     tab.addEventListener('click', () => {
        //         filterTabs.forEach(t => {
        //             t.classList.remove('active', 'alert', 'warn', 'go');
        //         });
        //         tab.classList.add('active');
        //         const filter = tab.getAttribute('data-filter');
        //         if (filter === 'alert') tab.classList.add('alert');
        //         else if (filter === 'wait') tab.classList.add('warn');
        //         else if (filter === 'go') tab.classList.add('go');
        //         applyFilter(filter);
        //     });
        // });
        // </script>
}

export default Dashboard;