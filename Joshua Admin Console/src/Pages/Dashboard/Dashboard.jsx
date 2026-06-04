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

function Dashboard(props) {
    return (
            <div className={styles.app}>
                <SideBar />
                <main className={styles.main}>

                    <TopBar />

                    <div className={styles.content}>

                        <div className={styles.pageHead}>
                            <div className={styles.breadcrumb}>
                                <span>Westbrook High School</span>
                                <span className={styles.breadcrumbSep}>/</span>
                                <span className={styles.breadcrumbCurrent}>Dashboard</span>
                            </div>
                            <div className={styles.pageTitleRow}>
                                <div>
                                    <h1 className={styles.pageTitle}>Today's overview</h1>
                                    <p className={styles.pageSubtitle}>Tuesday, April 28, 2026 · Period 2 in progress</p>
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
                                <AttentionCard.Head eyebrow="Needs Attention" title="Tapped out or offline" severity="warn">
                                    <NeedsAttentionIcon/>
                                </AttentionCard.Head>
                                <AttentionCard.List/>

                                <AttentionCard.Foot lastUpdated={"6 seconds"}>View all needing attention</AttentionCard.Foot>
                            </AttentionCard>

                            {/*<AttentionCard>*/}
                            {/*    <div className={styles.attentionCardHead}>*/}
                            {/*        <div className={`${styles.attentionCardIcon} ${styles.warn}`}>*/}
                            {/*            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>*/}
                            {/*        </div>*/}
                            {/*        <div className={styles.attentionCardMeta}>*/}
                            {/*            <div className={`${styles.attentionCardEyebrow} ${styles.warn}`}>Needs attention</div>*/}
                            {/*            <div className={styles.attentionCardTitle}>Tapped out or offline</div>*/}
                            {/*        </div>*/}
                            {/*        <div className={styles.attentionCardCount}>7</div>*/}
                            {/*    </div>*/}

                            {/*    <div className={styles.attentionCardList}>*/}
                            {/*        <div className={styles.attentionRow}>*/}
                            {/*            <div className={styles.attentionRowAvatar}>SP</div>*/}
                            {/*            <div className={styles.attentionRowInfo}>*/}
                            {/*                <div className={styles.attentionRowName}>Sofia Patel</div>*/}
                            {/*                <div className={styles.attentionRowMeta}>Grade 12<span className={styles.sep}>·</span>P2 · AP Biology<span className={styles.sep}>·</span>Hollingsworth</div>*/}
                            {/*            </div>*/}
                            {/*            <div className={styles.attentionRowTime}>*/}
                            {/*                <strong>Out 12 min</strong>*/}
                            {/*                Tapped out*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className={styles.attentionRow}>*/}
                            {/*            <div className={styles.attentionRowAvatar}>MC</div>*/}
                            {/*            <div className={styles.attentionRowInfo}>*/}
                            {/*                <div className={styles.attentionRowName}>Marcus Chen</div>*/}
                            {/*                <div className={styles.attentionRowMeta}>Grade 11<span className={styles.sep}>·</span>P2 · U.S. History<span className={styles.sep}>·</span>Nakamura</div>*/}
                            {/*            </div>*/}
                            {/*            <div className={styles.attentionRowTime}>*/}
                            {/*                <strong>Out 4 min</strong>*/}
                            {/*                Tapped out*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className={styles.attentionRow}>*/}
                            {/*            <div className={styles.attentionRowAvatar}>TR</div>*/}
                            {/*            <div className={styles.attentionRowInfo}>*/}
                            {/*                <div className={styles.attentionRowName}>Tessa Romano</div>*/}
                            {/*                <div className={styles.attentionRowMeta}>Grade 10<span className={styles.sep}>·</span>P2 · Chemistry<span className={styles.sep}>·</span>Hollingsworth</div>*/}
                            {/*            </div>*/}
                            {/*            <div className={styles.attentionRowTime}>*/}
                            {/*                <strong>Offline 3 min</strong>*/}
                            {/*                No connection*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*    <div className={styles.attentionCardFoot}>*/}
                            {/*        <a className={styles.link}>View all 7 needing attention →</a>*/}
                            {/*        <span className={styles.meta}>Updated 12 sec ago</span>*/}
                            {/*    </div>*/}
                            {/*</AttentionCard>*/}

                            <div className={styles.statsRow}>
                                <div className={styles.statCell}>
                                    <div className={styles.statLabel}><span className={`${styles.statDot} ${styles.brand}`}></span>Total enrolled</div>
                                    <div className={styles.statValue}>847</div>
                                    <div className={styles.statNote}>Across 5 grade levels</div>
                                </div>
                                <div className={styles.statCell}>
                                    <div className={styles.statLabel}><span className={`${styles.statDot} ${styles.go}`}></span>Active right now</div>
                                    <div className={styles.statValue}>712 <span className={styles.pct}>/ 86%</span></div>
                                    <div className={styles.statNote}>In focus mode</div>
                                </div>
                                <div className={styles.statCell}>
                                    <div className={styles.statLabel}><span className={`${styles.statDot} ${styles.wait}`}></span>Needs attention</div>
                                    <div className={styles.statValue}>7</div>
                                    <div className={styles.statNote}>Tapped out or offline</div>
                                </div>
                                <div className={styles.statCell}>
                                    <div className={styles.statLabel}><span className={`${styles.statDot} ${styles.alert}`}></span>Absent today</div>
                                    <div className={styles.statValue}>5</div>
                                    <div className={styles.statNote}>Not at school</div>
                                </div>
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panelHeader">
                                <div>
                                    <div className="panelTitle" id="panelTitle">Student roster — all 847 students</div>
                                    <div className="panelSub" id="panelSub">Filter by status, sort by grade, or search for any student.</div>
                                </div>
                                <div className="viewTabs">
                                    <button className="viewTab" data-target="classrooms">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                        Classrooms
                                    </button>
                                    <button className="viewTab active" data-target="roster">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                        Roster
                                    </button>
                                </div>
                            </div>

                            <div className="view" data-view="classrooms">
                                <div className="campus">

                                    <div className="room hasIssue">
                                        <div className="roomHeader">
                                            <div>
                                                <div className="roomTitle">Chemistry · Rm 204</div>
                                                <div className="roomMeta">Dr. Hollingsworth · <strong>28 enrolled</strong></div>
                                            </div>
                                            <div className="roomBadge">P2</div>
                                        </div>
                                        <div className="roomCompliance">
                                            <span className="roomComplianceNum">86%</span>
                                            <span className="roomComplianceLabel">compliance · 24 of 28 active</span>
                                        </div>
                                        <div className="roomBar">
                                            <div className="roomBarSeg go" style={{ flex: 24 }}></div>
                                            <div className="roomBarSeg wait" style={{ flex: 2 }}></div>
                                            <div className="roomBarSeg alert" style={{ flex: 2 }}></div>
                                        </div>
                                        <div className="roomStats">
                                            <div className="roomStat"><span className="dot go"></span><strong>24</strong> active</div>
                                            <div className="roomStat"><span className="dot wait"></span><strong>2</strong> attention</div>
                                            <div className="roomStat"><span className="dot alert"></span><strong>2</strong> absent</div>
                                        </div>
                                        <div className="roomAttention">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            2 students need attention
                                        </div>
                                    </div>

                                    <div className="room">
                                        <div className="roomHeader">
                                            <div>
                                                <div className="roomTitle">AP Calculus · Rm 312</div>
                                                <div className="roomMeta">Afolabi · <strong>24 enrolled</strong></div>
                                            </div>
                                            <div className="roomBadge">P2</div>
                                        </div>
                                        <div className="roomCompliance">
                                            <span className="roomComplianceNum">96%</span>
                                            <span className="roomComplianceLabel">compliance · 23 of 24 active</span>
                                        </div>
                                        <div className="roomBar">
                                            <div className="roomBarSeg go" style={{ flex: 23 }}></div>
                                            <div className="roomBarSeg alert" style={{ flex: 1 }}></div>
                                        </div>
                                        <div className="roomStats">
                                            <div className="roomStat"><span className="dot go"></span><strong>23</strong> active</div>
                                            <div className="roomStat"><span className="dot wait"></span><strong>0</strong> attention</div>
                                            <div className="roomStat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                    <div className="room hasAlert">
                                        <div className="roomHeader">
                                            <div>
                                                <div className="roomTitle">English Lit · Rm 108</div>
                                                <div className="roomMeta">Terán · <strong>26 enrolled</strong></div>
                                            </div>
                                            <div className="roomBadge">P2</div>
                                        </div>
                                        <div className="roomCompliance">
                                            <span className="roomComplianceNum">81%</span>
                                            <span className="roomComplianceLabel">compliance · 21 of 26 active</span>
                                        </div>
                                        <div className="roomBar">
                                            <div className="roomBarSeg go" style={{ flex: 21 }}></div>
                                            <div className="roomBarSeg wait" style={{ flex: 4 }}></div>
                                            <div className="roomBarSeg alert" style={{ flex: 1 }}></div>
                                        </div>
                                        <div className="roomStats">
                                            <div className="roomStat"><span className="dot go"></span><strong>21</strong> active</div>
                                            <div className="roomStat"><span className="dot wait"></span><strong>4</strong> attention</div>
                                            <div className="roomStat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                        <div className="roomAttention alert">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            Below 90% threshold — 4 need attention
                                        </div>
                                    </div>

                                    <div className="room hasIssue">
                                        <div className="roomHeader">
                                            <div>
                                                <div className="roomTitle">U.S. History · Rm 221</div>
                                                <div className="roomMeta">Nakamura · <strong>27 enrolled</strong></div>
                                            </div>
                                            <div className="roomBadge">P2</div>
                                        </div>
                                        <div className="roomCompliance">
                                            <span className="roomComplianceNum">81%</span>
                                            <span className="roomComplianceLabel">compliance · 22 of 27 active</span>
                                        </div>
                                        <div className="roomBar">
                                            <div className="roomBarSeg go" style={{ flex: 22 }}></div>
                                            <div className="roomBarSeg wait" style={{ flex: 3 }}></div>
                                            <div className="roomBarSeg alert" style={{ flex: 2 }}></div>
                                        </div>
                                        <div className="roomStats">
                                            <div className="roomStat"><span className="dot go"></span><strong>22</strong> active</div>
                                            <div className="roomStat"><span className="dot wait"></span><strong>3</strong> attention</div>
                                            <div className="roomStat"><span className="dot alert"></span><strong>2</strong> absent</div>
                                        </div>
                                        <div className="roomAttention">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            3 students need attention
                                        </div>
                                    </div>

                                    <div className="room">
                                        <div className="roomHeader">
                                            <div>
                                                <div className="roomTitle">AP Biology · Rm 217</div>
                                                <div className="roomMeta">Dr. Hollingsworth · <strong>22 enrolled</strong></div>
                                            </div>
                                            <div className="roomBadge">P2</div>
                                        </div>
                                        <div className="roomCompliance">
                                            <span className="roomComplianceNum">86%</span>
                                            <span className="roomComplianceLabel">compliance · 19 of 22 active</span>
                                        </div>
                                        <div className="roomBar">
                                            <div className="roomBarSeg go" style={{ flex: 19 }}></div>
                                            <div className="roomBarSeg wait" style={{ flex: 2 }}></div>
                                            <div className="roomBarSeg alert" style={{ flex: 1 }}></div>
                                        </div>
                                        <div className="roomStats">
                                            <div className="roomStat"><span className="dot go"></span><strong>19</strong> active</div>
                                            <div className="roomStat"><span className="dot wait"></span><strong>2</strong> attention</div>
                                            <div className="roomStat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                    <div className="room">
                                        <div className="roomHeader">
                                            <div>
                                                <div className="roomTitle">Algebra II · Rm 305</div>
                                                <div className="roomMeta">Afolabi · <strong>25 enrolled</strong></div>
                                            </div>
                                            <div className="roomBadge">P2</div>
                                        </div>
                                        <div className="roomCompliance">
                                            <span className="roomComplianceNum">92%</span>
                                            <span className="roomComplianceLabel">compliance · 23 of 25 active</span>
                                        </div>
                                        <div className="roomBar">
                                            <div className="roomBarSeg go" style={{ flex: 23 }}></div>
                                            <div className="roomBarSeg wait" style={{ flex: 1 }}></div>
                                            <div className="roomBarSeg alert" style={{ flex: 1 }}></div>
                                        </div>
                                        <div className="roomStats">
                                            <div className="roomStat"><span className="dot go"></span><strong>23</strong> active</div>
                                            <div className="roomStat"><span className="dot wait"></span><strong>1</strong> attention</div>
                                            <div className="roomStat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="view active" data-view="roster">
                                <div className="rosterToolbar">

                                    <div className="filterTabs" id="rosterFilters">
                                        <button className="filterTab" data-filter="all">
                                            All <span className="filterTabCount">847</span>
                                        </button>
                                        <button className="filterTab" data-filter="alert">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                            Absent <span className="filterTabCount">5</span>
                                        </button>
                                        <button className="filterTab" data-filter="wait">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            Needs attention <span className="filterTabCount">7</span>
                                        </button>
                                        <button className="filterTab active go" data-filter="go">
                                            Active <span className="filterTabCount">712</span>
                                        </button>
                                    </div>

                                    <div className="rosterDivider"></div>

                                    <button className="rosterSort">
                                        <span className="sortLabel">Sort:</span>
                                        <span>Status, then grade</span>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </button>

                                    <div className="rosterSearch">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" placeholder="Search by name or ID…" />
                                    </div>
                                </div>

                                <table className="rosterTable">
                                    <thead>
                                    <tr>
                                        <th style={{ minWidth: '240px' }}>Student</th>
                                        <th>Status</th>
                                        <th>Duration</th>
                                        <th>Class</th>
                                        <th>Teacher</th>
                                        <th>Last activity</th>
                                    </tr>
                                    </thead>
                                    <tbody id="rosterBody">

                                    <tr className="groupRow" data-group="alert" style={{ display: 'none' }}><td colSpan="6">Absent <span className="groupCount">5 students</span></td></tr>

                                    <tr data-status="alert" style={{ display: 'none' }}>
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">AM</div>
                                                <div>
                                                    <div className="rosterName">Amara Madison</div>
                                                    <div className="rosterId">Grade 11 · #2847</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill alert"><span className="dot"></span>Absent</span></td>
                                        <td className="rosterNum">2 days</td>
                                        <td className="rosterNum">P2 · Chemistry</td>
                                        <td className="rosterNum">Hollingsworth</td>
                                        <td className="rosterNum">Apr 26, 2:47 PM</td>
                                    </tr>
                                    <tr data-status="alert" style={{ display: 'none' }}>
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">DK</div>
                                                <div>
                                                    <div className="rosterName">Dominic Kahn</div>
                                                    <div className="rosterId">Grade 10 · #3102</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill alert"><span className="dot"></span>Absent</span></td>
                                        <td className="rosterNum">1 day</td>
                                        <td className="rosterNum">P2 · English Lit</td>
                                        <td className="rosterNum">Terán</td>
                                        <td className="rosterNum">Apr 27, 3:12 PM</td>
                                    </tr>
                                    <tr data-status="alert" style={{ display: 'none' }}>
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">JL</div>
                                                <div>
                                                    <div className="rosterName">Jasper Liu</div>
                                                    <div className="rosterId">Grade 9 · #4028</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill alert"><span className="dot"></span>Absent</span></td>
                                        <td className="rosterNum">1 day</td>
                                        <td className="rosterNum">P2 · Algebra II</td>
                                        <td className="rosterNum">Afolabi</td>
                                        <td className="rosterNum">Apr 27, 3:30 PM</td>
                                    </tr>

                                    <tr className="groupRow" data-group="wait" style={{ display: 'none' }}><td colSpan="6">Needs attention <span className="groupCount">7 students</span></td></tr>

                                    <tr data-status="wait" style={{ display: 'none' }}>
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">SP</div>
                                                <div>
                                                    <div className="rosterName">Sofia Patel</div>
                                                    <div className="rosterId">Grade 12 · #1984</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span className="statusPill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Tapped out
                  </span>
                                        </td>
                                        <td className="rosterNum">Out 12 min</td>
                                        <td className="rosterNum">P2 · AP Biology</td>
                                        <td className="rosterNum">Hollingsworth</td>
                                        <td className="rosterNum">Today 9:34 AM</td>
                                    </tr>
                                    <tr data-status="wait" style={{ display: 'none' }}>
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">MC</div>
                                                <div>
                                                    <div className="rosterName">Marcus Chen</div>
                                                    <div className="rosterId">Grade 11 · #2156</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span className="statusPill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Tapped out
                  </span>
                                        </td>
                                        <td className="rosterNum">Out 4 min</td>
                                        <td className="rosterNum">P2 · U.S. History</td>
                                        <td className="rosterNum">Nakamura</td>
                                        <td className="rosterNum">Today 9:42 AM</td>
                                    </tr>
                                    <tr data-status="wait" style={{ display: 'none' }}>
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">TR</div>
                                                <div>
                                                    <div className="rosterName">Tessa Romano</div>
                                                    <div className="rosterId">Grade 10 · #3445</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span className="statusPill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Offline
                  </span>
                                        </td>
                                        <td className="rosterNum">3 min</td>
                                        <td className="rosterNum">P2 · Chemistry</td>
                                        <td className="rosterNum">Hollingsworth</td>
                                        <td className="rosterNum">Today 9:43 AM</td>
                                    </tr>

                                    <tr className="groupRow" data-group="go"><td colSpan="6">Active <span className="groupCount">712 students</span></td></tr>

                                    <tr data-status="go">
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">RO</div>
                                                <div>
                                                    <div className="rosterName">Rhea Okonkwo</div>
                                                    <div className="rosterId">Grade 10 · #3390</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill go"><span className="dot"></span>Active</span></td>
                                        <td className="rosterNum">1h 18m</td>
                                        <td className="rosterNum">P2 · Chemistry</td>
                                        <td className="rosterNum">Hollingsworth</td>
                                        <td className="rosterNum">Today 8:28 AM</td>
                                    </tr>
                                    <tr data-status="go">
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">TB</div>
                                                <div>
                                                    <div className="rosterName">Theo Bernstein</div>
                                                    <div className="rosterId">Grade 12 · #1742</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill go"><span className="dot"></span>Active</span></td>
                                        <td className="rosterNum">1h 22m</td>
                                        <td className="rosterNum">P2 · AP Calculus</td>
                                        <td className="rosterNum">Afolabi</td>
                                        <td className="rosterNum">Today 8:24 AM</td>
                                    </tr>
                                    <tr data-status="go">
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">NV</div>
                                                <div>
                                                    <div className="rosterName">Nadia Vargas</div>
                                                    <div className="rosterId">Grade 9 · #4215</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill go"><span className="dot"></span>Active</span></td>
                                        <td className="rosterNum">1h 15m</td>
                                        <td className="rosterNum">P2 · English I</td>
                                        <td className="rosterNum">Terán</td>
                                        <td className="rosterNum">Today 8:31 AM</td>
                                    </tr>
                                    <tr data-status="go">
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">EW</div>
                                                <div>
                                                    <div className="rosterName">Ezra Whitfield</div>
                                                    <div className="rosterId">Grade 11 · #2501</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill go"><span className="dot"></span>Active</span></td>
                                        <td className="rosterNum">1h 21m</td>
                                        <td className="rosterNum">P2 · Physics</td>
                                        <td className="rosterNum">Hollingsworth</td>
                                        <td className="rosterNum">Today 8:25 AM</td>
                                    </tr>
                                    <tr data-status="go">
                                        <td>
                                            <div className="rosterStudent">
                                                <div className="rosterAvatar">LR</div>
                                                <div>
                                                    <div className="rosterName">Lucia Rodriguez</div>
                                                    <div className="rosterId">Grade 10 · #3547</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="statusPill go"><span className="dot"></span>Active</span></td>
                                        <td className="rosterNum">1h 20m</td>
                                        <td className="rosterNum">P2 · AP Biology</td>
                                        <td className="rosterNum">Hollingsworth</td>
                                        <td className="rosterNum">Today 8:26 AM</td>
                                    </tr>

                                    </tbody>
                                </table>
                                <div className="rosterFooter">
                                    Showing <strong>11</strong> of <strong>847</strong> students
                                    <a className="link">Load more →</a>
                                </div>
                            </div>

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