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
import AuthLock from "../../components/AuthLock.jsx";



function Dashboard(props) {
    return (
        <AuthLock>
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
                                    <div className={styles.campus}>

                                        <div className={`${styles.room} ${styles.hasIssue}`}>
                                            <div className={styles.roomHeader}>
                                                <div>
                                                    <div className={styles.roomTitle}>Chemistry · Rm 204</div>
                                                    <div className={styles.roomMeta}>Dr. Hollingsworth · <strong>28 enrolled</strong></div>
                                                </div>
                                                <div className={styles.roomBadge}>P2</div>
                                            </div>
                                            <div className={styles.roomCompliance}>
                                                <span className={styles.roomComplianceNum}>86%</span>
                                                <span className={styles.roomComplianceLabel}>compliance · 24 of 28 active</span>
                                            </div>
                                            <div className={styles.roomBar}>
                                                <div className={`${styles.roomBarSeg} ${styles.go}`} style={{flex: 24}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.wait}`} style={{flex: 2}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.alert}`} style={{flex: 2}}></div>
                                            </div>
                                            <div className={styles.roomStats}>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.go}`}></span><strong>24</strong> active</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.wait}`}></span><strong>2</strong> attention</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.alert}`}></span><strong>2</strong> absent</div>
                                            </div>
                                            <div className={styles.roomAttention}>
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                    <path
                                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                                2 students need attention
                                            </div>
                                        </div>

                                        <div className={styles.room}>
                                            <div className={styles.roomHeader}>
                                                <div>
                                                    <div className={styles.roomTitle}>AP Calculus · Rm 312</div>
                                                    <div className={styles.roomMeta}>Afolabi · <strong>24 enrolled</strong></div>
                                                </div>
                                                <div className={styles.roomBadge}>P2</div>
                                            </div>
                                            <div className={styles.roomCompliance}>
                                                <span className={styles.roomComplianceNum}>96%</span>
                                                <span className={styles.roomComplianceLabel}>compliance · 23 of 24 active</span>
                                            </div>
                                            <div className={styles.roomBar}>
                                                <div className={`${styles.roomBarSeg} ${styles.go}`} style={{flex: 23}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.alert}`} style={{flex: 1}}></div>
                                            </div>
                                            <div className={styles.roomStats}>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.go}`}></span><strong>23</strong> active</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.wait}`}></span><strong>0</strong> attention</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.alert}`}></span><strong>1</strong> absent</div>
                                            </div>
                                        </div>

                                        <div className={`${styles.room} ${styles.hasAlert}`}>
                                            <div className={styles.roomHeader}>
                                                <div>
                                                    <div className={styles.roomTitle}>English Lit · Rm 108</div>
                                                    <div className={styles.roomMeta}>Terán · <strong>26 enrolled</strong></div>
                                                </div>
                                                <div className={styles.roomBadge}>P2</div>
                                            </div>
                                            <div className={styles.roomCompliance}>
                                                <span className={styles.roomComplianceNum}>81%</span>
                                                <span className={styles.roomComplianceLabel}>compliance · 21 of 26 active</span>
                                            </div>
                                            <div className={styles.roomBar}>
                                                <div className={`${styles.roomBarSeg} ${styles.go}`} style={{flex: 21}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.wait}`} style={{flex: 4}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.alert}`} style={{flex: 1}}></div>
                                            </div>
                                            <div className={styles.roomStats}>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.go}`}></span><strong>21</strong> active</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.wait}`}></span><strong>4</strong> attention</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.alert}`}></span><strong>1</strong> absent</div>
                                            </div>
                                            <div className={`${styles.roomAttention} ${styles.alert}`}>
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                    <path
                                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                                Below 90% threshold — 4 need attention
                                            </div>
                                        </div>

                                        <div className={`${styles.room} ${styles.hasIssue}`}>
                                            <div className={styles.roomHeader}>
                                                <div>
                                                    <div className={styles.roomTitle}>U.S. History · Rm 221</div>
                                                    <div className={styles.roomMeta}>Nakamura · <strong>27 enrolled</strong></div>
                                                </div>
                                                <div className={styles.roomBadge}>P2</div>
                                            </div>
                                            <div className={styles.roomCompliance}>
                                                <span className={styles.roomComplianceNum}>81%</span>
                                                <span className={styles.roomComplianceLabel}>compliance · 22 of 27 active</span>
                                            </div>
                                            <div className={styles.roomBar}>
                                                <div className={`${styles.roomBarSeg} ${styles.go}`} style={{flex: 22}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.wait}`} style={{flex: 3}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.alert}`} style={{flex: 2}}></div>
                                            </div>
                                            <div className={styles.roomStats}>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.go}`}></span><strong>22</strong> active</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.wait}`}></span><strong>3</strong> attention</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.alert}`}></span><strong>2</strong> absent</div>
                                            </div>
                                            <div className={styles.roomAttention}>
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                    <path
                                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                                3 students need attention
                                            </div>
                                        </div>

                                        <div className={styles.room}>
                                            <div className={styles.roomHeader}>
                                                <div>
                                                    <div className={styles.roomTitle}>AP Biology · Rm 217</div>
                                                    <div className={styles.roomMeta}>Dr. Hollingsworth · <strong>22 enrolled</strong></div>
                                                </div>
                                                <div className={styles.roomBadge}>P2</div>
                                            </div>
                                            <div className={styles.roomCompliance}>
                                                <span className={styles.roomComplianceNum}>86%</span>
                                                <span className={styles.roomComplianceLabel}>compliance · 19 of 22 active</span>
                                            </div>
                                            <div className={styles.roomBar}>
                                                <div className={`${styles.roomBarSeg} ${styles.go}`} style={{flex: 19}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.wait}`} style={{flex: 2}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.alert}`} style={{flex: 1}}></div>
                                            </div>
                                            <div className={styles.roomStats}>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.go}`}></span><strong>19</strong> active</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.wait}`}></span><strong>2</strong> attention</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.alert}`}></span><strong>1</strong> absent</div>
                                            </div>
                                        </div>

                                        <div className={styles.room}>
                                            <div className={styles.roomHeader}>
                                                <div>
                                                    <div className={styles.roomTitle}>Algebra II · Rm 305</div>
                                                    <div className={styles.roomMeta}>Afolabi · <strong>25 enrolled</strong></div>
                                                </div>
                                                <div className={styles.roomBadge}>P2</div>
                                            </div>
                                            <div className={styles.roomCompliance}>
                                                <span className={styles.roomComplianceNum}>92%</span>
                                                <span className={styles.roomComplianceLabel}>compliance · 23 of 25 active</span>
                                            </div>
                                            <div className={styles.roomBar}>
                                                <div className={`${styles.roomBarSeg} ${styles.go}`} style={{flex: 23}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.wait}`} style={{flex: 1}}></div>
                                                <div className={`${styles.roomBarSeg} ${styles.alert}`} style={{flex: 1}}></div>
                                            </div>
                                            <div className={styles.roomStats}>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.go}`}></span><strong>23</strong> active</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.wait}`}></span><strong>1</strong> attention</div>
                                                <div className={styles.roomStat}><span className={`${styles.dot} ${styles.alert}`}></span><strong>1</strong> absent</div>
                                            </div>
                                        </div>

                                    </div>
                                </Panel.View>
                                <Panel.View id={"roster"}>
                                    <div className={styles.rosterToolbar}>

                                        <div className={styles.filterTabs} id="rosterFilters">
                                            <button className={styles.filterTab} data-filter="all">
                                                All <span className={styles.filterTabCount}>847</span>
                                            </button>
                                            <button className={styles.filterTab} data-filter="alert">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                                                </svg>
                                                Absent <span className={styles.filterTabCount}>5</span>
                                            </button>
                                            <button className={styles.filterTab} data-filter="wait">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                    <path
                                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                                Needs attention <span className={styles.filterTabCount}>7</span>
                                            </button>
                                            <button className={`${styles.filterTab} ${styles.active} ${styles.go}`} data-filter="go">
                                                Active <span className={styles.filterTabCount}>712</span>
                                            </button>
                                        </div>

                                        <div className={styles.rosterDivider}></div>

                                        <button className={styles.rosterSort}>
                                            <span className={styles.sortLabel}>Sort:</span>
                                            <span>Status, then grade</span>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                                 strokeLinecap="round" strokeLinejoin="round" style={{color: "var(--text-muted)"}}>
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>

                                        <div className={styles.rosterSearch}>
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                            <input type="text" placeholder="Search by name or ID…"/>
                                        </div>
                                    </div>

                                    <table className={styles.rosterTable}>
                                        <thead>
                                        <tr>
                                            <th style={{minWidth: "240px"}}>Student</th>
                                            <th>Status</th>
                                            <th>Duration</th>
                                            <th>Class</th>
                                            <th>Teacher</th>
                                            <th>Last activity</th>
                                        </tr>
                                        </thead>
                                        <tbody id="rosterBody">

                                        <tr className={styles.groupRow} data-group="alert" style={{display: "none"}}>
                                            <td colSpan="6">Absent <span className={styles.groupCount}>5 students</span></td>
                                        </tr>

                                        <tr data-status="alert" style={{display: "none"}}>
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>AM</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Amara Madison</div>
                                                        <div className={styles.rosterId}>Grade 11 · #2847</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.alert}`}><span className={styles.dot}></span>Absent</span></td>
                                            <td className={styles.rosterNum}>2 days</td>
                                            <td className={styles.rosterNum}>P2 · Chemistry</td>
                                            <td className={styles.rosterNum}>Hollingsworth</td>
                                            <td className={styles.rosterNum}>Apr 26, 2:47 PM</td>
                                        </tr>
                                        <tr data-status="alert" style={{display: "none"}}>
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>DK</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Dominic Kahn</div>
                                                        <div className={styles.rosterId}>Grade 10 · #3102</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.alert}`}><span className={styles.dot}></span>Absent</span></td>
                                            <td className={styles.rosterNum}>1 day</td>
                                            <td className={styles.rosterNum}>P2 · English Lit</td>
                                            <td className={styles.rosterNum}>Terán</td>
                                            <td className={styles.rosterNum}>Apr 27, 3:12 PM</td>
                                        </tr>
                                        <tr data-status="alert" style={{display: "none"}}>
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>JL</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Jasper Liu</div>
                                                        <div className={styles.rosterId}>Grade 9 · #4028</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.alert}`}><span className={styles.dot}></span>Absent</span></td>
                                            <td className={styles.rosterNum}>1 day</td>
                                            <td className={styles.rosterNum}>P2 · Algebra II</td>
                                            <td className={styles.rosterNum}>Afolabi</td>
                                            <td className={styles.rosterNum}>Apr 27, 3:30 PM</td>
                                        </tr>

                                        <tr className={styles.groupRow} data-group="wait" style={{display: "none"}}>
                                            <td colSpan="6">Needs attention <span className={styles.groupCount}>7 students</span></td>
                                        </tr>

                                        <tr data-status="wait" style={{display: "none"}}>
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>SP</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Sofia Patel</div>
                                                        <div className={styles.rosterId}>Grade 12 · #1984</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                      <span className={`${styles.statusPill} ${styles.wait}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path
                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line
                            x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        Tapped out
                      </span>
                                            </td>
                                            <td className={styles.rosterNum}>Out 12 min</td>
                                            <td className={styles.rosterNum}>P2 · AP Biology</td>
                                            <td className={styles.rosterNum}>Hollingsworth</td>
                                            <td className={styles.rosterNum}>Today 9:34 AM</td>
                                        </tr>
                                        <tr data-status="wait" style={{display: "none"}}>
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>MC</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Marcus Chen</div>
                                                        <div className={styles.rosterId}>Grade 11 · #2156</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                      <span className={`${styles.statusPill} ${styles.wait}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path
                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line
                            x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        Tapped out
                      </span>
                                            </td>
                                            <td className={styles.rosterNum}>Out 4 min</td>
                                            <td className={styles.rosterNum}>P2 · U.S. History</td>
                                            <td className={styles.rosterNum}>Nakamura</td>
                                            <td className={styles.rosterNum}>Today 9:42 AM</td>
                                        </tr>
                                        <tr data-status="wait" style={{display: "none"}}>
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>TR</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Tessa Romano</div>
                                                        <div className={styles.rosterId}>Grade 10 · #3445</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                      <span className={`${styles.statusPill} ${styles.wait}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path
                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line
                            x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        Offline
                      </span>
                                            </td>
                                            <td className={styles.rosterNum}>3 min</td>
                                            <td className={styles.rosterNum}>P2 · Chemistry</td>
                                            <td className={styles.rosterNum}>Hollingsworth</td>
                                            <td className={styles.rosterNum}>Today 9:43 AM</td>
                                        </tr>

                                        <tr className={styles.groupRow} data-group="go">
                                            <td colSpan="6">Active <span className={styles.groupCount}>712 students</span></td>
                                        </tr>

                                        <tr data-status="go">
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>RO</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Rhea Okonkwo</div>
                                                        <div className={styles.rosterId}>Grade 10 · #3390</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.go}`}><span className={styles.dot}></span>Active</span></td>
                                            <td className={styles.rosterNum}>1h 18m</td>
                                            <td className={styles.rosterNum}>P2 · Chemistry</td>
                                            <td className={styles.rosterNum}>Hollingsworth</td>
                                            <td className={styles.rosterNum}>Today 8:28 AM</td>
                                        </tr>
                                        <tr data-status="go">
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>TB</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Theo Bernstein</div>
                                                        <div className={styles.rosterId}>Grade 12 · #1742</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.go}`}><span className={styles.dot}></span>Active</span></td>
                                            <td className={styles.rosterNum}>1h 22m</td>
                                            <td className={styles.rosterNum}>P2 · AP Calculus</td>
                                            <td className={styles.rosterNum}>Afolabi</td>
                                            <td className={styles.rosterNum}>Today 8:24 AM</td>
                                        </tr>
                                        <tr data-status="go">
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>NV</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Nadia Vargas</div>
                                                        <div className={styles.rosterId}>Grade 9 · #4215</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.go}`}><span className={styles.dot}></span>Active</span></td>
                                            <td className={styles.rosterNum}>1h 15m</td>
                                            <td className={styles.rosterNum}>P2 · English I</td>
                                            <td className={styles.rosterNum}>Terán</td>
                                            <td className={styles.rosterNum}>Today 8:31 AM</td>
                                        </tr>
                                        <tr data-status="go">
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>EW</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Ezra Whitfield</div>
                                                        <div className={styles.rosterId}>Grade 11 · #2501</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.go}`}><span className={styles.dot}></span>Active</span></td>
                                            <td className={styles.rosterNum}>1h 21m</td>
                                            <td className={styles.rosterNum}>P2 · Physics</td>
                                            <td className={styles.rosterNum}>Hollingsworth</td>
                                            <td className={styles.rosterNum}>Today 8:25 AM</td>
                                        </tr>
                                        <tr data-status="go">
                                            <td>
                                                <div className={styles.rosterStudent}>
                                                    <div className={styles.rosterAvatar}>LR</div>
                                                    <div>
                                                        <div className={styles.rosterName}>Lucia Rodriguez</div>
                                                        <div className={styles.rosterId}>Grade 10 · #3547</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`${styles.statusPill} ${styles.go}`}><span className={styles.dot}></span>Active</span></td>
                                            <td className={styles.rosterNum}>1h 20m</td>
                                            <td className={styles.rosterNum}>P2 · AP Biology</td>
                                            <td className={styles.rosterNum}>Hollingsworth</td>
                                            <td className={styles.rosterNum}>Today 8:26 AM</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                    <div className={styles.rosterFooter}>
                                        Showing <strong>11</strong> of <strong>847</strong> students
                                        <a className={styles.link}>Load more →</a>
                                    </div>
                                </Panel.View>
                            </Panel>
                        </div>
                    </div>
                </main>
            </div>
        </AuthLock>
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