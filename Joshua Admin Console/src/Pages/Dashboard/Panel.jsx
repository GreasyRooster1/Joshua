import styles from './dashboard.module.css';
import {Children, cloneElement, isValidElement} from "react";

function Panel(props) {
    const [selectedTab, setSelectedTab] = React.useState("");

    return <div className={styles.panel}>

        {Children.map(props.children, (child) => {
            if (isValidElement(child)) {
                return cloneElement(child, { selectedTab: selectedTab, setSelectedTab:setSelectedTab});
            }
            return child;
        })}

        <div className={styles.view} data-view="classrooms">
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
        </div>

        <div className={`${styles.view} ${styles.active}`} data-view="roster">
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
        </div>

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
    return(
        <>{
            (props.id===props.selectedTab) && (<div className={styles.view}>{props.children}</div>)
        }</>
    )
}


Panel.Header = Header;
Panel.Tab = Tab;
Panel.View = View;

export default Panel;