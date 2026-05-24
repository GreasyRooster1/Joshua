import React from 'react';
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar.jsx";

function Dashboard(props) {
    return (
            <div className="app">
                <SideBar />
                <main className="main">

                    <TopBar />

                    <div className="content">

                        <div className="page-head">
                            <div className="breadcrumb">
                                <span>Westbrook High School</span>
                                <span className="breadcrumb-sep">/</span>
                                <span className="breadcrumb-current">Dashboard</span>
                            </div>
                            <div className="page-title-row">
                                <div>
                                    <h1 className="page-title">Today's overview</h1>
                                    <p className="page-subtitle">Tuesday, April 28, 2026 · Period 2 in progress</p>
                                </div>
                                <div className="page-actions">
                                    <button className="btn">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        Export report
                                    </button>
                                    <button className="btn btn-primary">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        Quick actions
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="attention-hero">

                            <div className="attention-card">
                                <div className="attention-card-head">
                                    <div className="attention-card-icon alert">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                    </div>
                                    <div className="attention-card-meta">
                                        <div className="attention-card-eyebrow alert">Absent today</div>
                                        <div className="attention-card-title">Not at school</div>
                                    </div>
                                    <div className="attention-card-count">5</div>
                                </div>

                                <div className="attention-card-list">
                                    <div className="attention-row">
                                        <div className="attention-row-avatar">AM</div>
                                        <div className="attention-row-info">
                                            <div className="attention-row-name">Amara Madison</div>
                                            <div className="attention-row-meta">Grade 11<span className="sep">·</span>P2 · Chemistry<span className="sep">·</span>Hollingsworth</div>
                                        </div>
                                        <div className="attention-row-time">
                                            <strong>2 days</strong>
                                            Last seen Apr 26
                                        </div>
                                    </div>
                                    <div className="attention-row">
                                        <div className="attention-row-avatar">DK</div>
                                        <div className="attention-row-info">
                                            <div className="attention-row-name">Dominic Kahn</div>
                                            <div className="attention-row-meta">Grade 10<span className="sep">·</span>P2 · English Lit<span className="sep">·</span>Terán</div>
                                        </div>
                                        <div className="attention-row-time">
                                            <strong>1 day</strong>
                                            Last seen Apr 27
                                        </div>
                                    </div>
                                    <div className="attention-row">
                                        <div className="attention-row-avatar">JL</div>
                                        <div className="attention-row-info">
                                            <div className="attention-row-name">Jasper Liu</div>
                                            <div className="attention-row-meta">Grade 9<span className="sep">·</span>P2 · Algebra II<span className="sep">·</span>Afolabi</div>
                                        </div>
                                        <div className="attention-row-time">
                                            <strong>1 day</strong>
                                            Last seen Apr 27
                                        </div>
                                    </div>
                                </div>

                                <div className="attention-card-foot">
                                    <a className="link">View all 5 absent students →</a>
                                    <span className="meta">Updated 12 sec ago</span>
                                </div>
                            </div>

                            <div className="attention-card">
                                <div className="attention-card-head">
                                    <div className="attention-card-icon warn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                    </div>
                                    <div className="attention-card-meta">
                                        <div className="attention-card-eyebrow warn">Needs attention</div>
                                        <div className="attention-card-title">Tapped out or offline</div>
                                    </div>
                                    <div className="attention-card-count">7</div>
                                </div>

                                <div className="attention-card-list">
                                    <div className="attention-row">
                                        <div className="attention-row-avatar">SP</div>
                                        <div className="attention-row-info">
                                            <div className="attention-row-name">Sofia Patel</div>
                                            <div className="attention-row-meta">Grade 12<span className="sep">·</span>P2 · AP Biology<span className="sep">·</span>Hollingsworth</div>
                                        </div>
                                        <div className="attention-row-time">
                                            <strong>Out 12 min</strong>
                                            Tapped out
                                        </div>
                                    </div>
                                    <div className="attention-row">
                                        <div className="attention-row-avatar">MC</div>
                                        <div className="attention-row-info">
                                            <div className="attention-row-name">Marcus Chen</div>
                                            <div className="attention-row-meta">Grade 11<span className="sep">·</span>P2 · U.S. History<span className="sep">·</span>Nakamura</div>
                                        </div>
                                        <div className="attention-row-time">
                                            <strong>Out 4 min</strong>
                                            Tapped out
                                        </div>
                                    </div>
                                    <div className="attention-row">
                                        <div className="attention-row-avatar">TR</div>
                                        <div className="attention-row-info">
                                            <div className="attention-row-name">Tessa Romano</div>
                                            <div className="attention-row-meta">Grade 10<span className="sep">·</span>P2 · Chemistry<span className="sep">·</span>Hollingsworth</div>
                                        </div>
                                        <div className="attention-row-time">
                                            <strong>Offline 3 min</strong>
                                            No connection
                                        </div>
                                    </div>
                                </div>

                                <div className="attention-card-foot">
                                    <a className="link">View all 7 needing attention →</a>
                                    <span className="meta">Updated 12 sec ago</span>
                                </div>
                            </div>

                        </div>

                        <div className="stats-row">
                            <div className="stat-cell">
                                <div className="stat-label"><span className="stat-dot brand"></span>Total enrolled</div>
                                <div className="stat-value">847</div>
                                <div className="stat-note">Across 5 grade levels</div>
                            </div>
                            <div className="stat-cell">
                                <div className="stat-label"><span className="stat-dot go"></span>Active right now</div>
                                <div className="stat-value">712 <span className="pct">/ 86%</span></div>
                                <div className="stat-note">In focus mode</div>
                            </div>
                            <div className="stat-cell">
                                <div className="stat-label"><span className="stat-dot wait"></span>Needs attention</div>
                                <div className="stat-value">7</div>
                                <div className="stat-note">Tapped out or offline</div>
                            </div>
                            <div className="stat-cell">
                                <div className="stat-label"><span className="stat-dot alert"></span>Absent today</div>
                                <div className="stat-value">5</div>
                                <div className="stat-note">Not at school</div>
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panel-header">
                                <div>
                                    <div className="panel-title" id="panelTitle">Student roster — all 847 students</div>
                                    <div className="panel-sub" id="panelSub">Filter by status, sort by grade, or search for any student.</div>
                                </div>
                                <div className="view-tabs">
                                    <button className="view-tab" data-target="classrooms">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                        Classrooms
                                    </button>
                                    <button className="view-tab active" data-target="roster">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                        Roster
                                    </button>
                                </div>
                            </div>

                            <div className="view" data-view="classrooms">
                                <div className="campus">

                                    <div className="room has-issue">
                                        <div className="room-header">
                                            <div>
                                                <div className="room-title">Chemistry · Rm 204</div>
                                                <div className="room-meta">Dr. Hollingsworth · <strong>28 enrolled</strong></div>
                                            </div>
                                            <div className="room-badge">P2</div>
                                        </div>
                                        <div className="room-compliance">
                                            <span className="room-compliance-num">86%</span>
                                            <span className="room-compliance-label">compliance · 24 of 28 active</span>
                                        </div>
                                        <div className="room-bar">
                                            <div className="room-bar-seg go" style="flex: 24"></div>
                                            <div className="room-bar-seg wait" style="flex: 2"></div>
                                            <div className="room-bar-seg alert" style="flex: 2"></div>
                                        </div>
                                        <div className="room-stats">
                                            <div className="room-stat"><span className="dot go"></span><strong>24</strong> active</div>
                                            <div className="room-stat"><span className="dot wait"></span><strong>2</strong> attention</div>
                                            <div className="room-stat"><span className="dot alert"></span><strong>2</strong> absent</div>
                                        </div>
                                        <div className="room-attention">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            2 students need attention
                                        </div>
                                    </div>

                                    <div className="room">
                                        <div className="room-header">
                                            <div>
                                                <div className="room-title">AP Calculus · Rm 312</div>
                                                <div className="room-meta">Afolabi · <strong>24 enrolled</strong></div>
                                            </div>
                                            <div className="room-badge">P2</div>
                                        </div>
                                        <div className="room-compliance">
                                            <span className="room-compliance-num">96%</span>
                                            <span className="room-compliance-label">compliance · 23 of 24 active</span>
                                        </div>
                                        <div className="room-bar">
                                            <div className="room-bar-seg go" style="flex: 23"></div>
                                            <div className="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div className="room-stats">
                                            <div className="room-stat"><span className="dot go"></span><strong>23</strong> active</div>
                                            <div className="room-stat"><span className="dot wait"></span><strong>0</strong> attention</div>
                                            <div className="room-stat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                    <div className="room has-alert">
                                        <div className="room-header">
                                            <div>
                                                <div className="room-title">English Lit · Rm 108</div>
                                                <div className="room-meta">Terán · <strong>26 enrolled</strong></div>
                                            </div>
                                            <div className="room-badge">P2</div>
                                        </div>
                                        <div className="room-compliance">
                                            <span className="room-compliance-num">81%</span>
                                            <span className="room-compliance-label">compliance · 21 of 26 active</span>
                                        </div>
                                        <div className="room-bar">
                                            <div className="room-bar-seg go" style="flex: 21"></div>
                                            <div className="room-bar-seg wait" style="flex: 4"></div>
                                            <div className="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div className="room-stats">
                                            <div className="room-stat"><span className="dot go"></span><strong>21</strong> active</div>
                                            <div className="room-stat"><span className="dot wait"></span><strong>4</strong> attention</div>
                                            <div className="room-stat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                        <div className="room-attention alert">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            Below 90% threshold — 4 need attention
                                        </div>
                                    </div>

                                    <div className="room has-issue">
                                        <div className="room-header">
                                            <div>
                                                <div className="room-title">U.S. History · Rm 221</div>
                                                <div className="room-meta">Nakamura · <strong>27 enrolled</strong></div>
                                            </div>
                                            <div className="room-badge">P2</div>
                                        </div>
                                        <div className="room-compliance">
                                            <span className="room-compliance-num">81%</span>
                                            <span className="room-compliance-label">compliance · 22 of 27 active</span>
                                        </div>
                                        <div className="room-bar">
                                            <div className="room-bar-seg go" style="flex: 22"></div>
                                            <div className="room-bar-seg wait" style="flex: 3"></div>
                                            <div className="room-bar-seg alert" style="flex: 2"></div>
                                        </div>
                                        <div className="room-stats">
                                            <div className="room-stat"><span className="dot go"></span><strong>22</strong> active</div>
                                            <div className="room-stat"><span className="dot wait"></span><strong>3</strong> attention</div>
                                            <div className="room-stat"><span className="dot alert"></span><strong>2</strong> absent</div>
                                        </div>
                                        <div className="room-attention">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            3 students need attention
                                        </div>
                                    </div>

                                    <div className="room">
                                        <div className="room-header">
                                            <div>
                                                <div className="room-title">AP Biology · Rm 217</div>
                                                <div className="room-meta">Dr. Hollingsworth · <strong>22 enrolled</strong></div>
                                            </div>
                                            <div className="room-badge">P2</div>
                                        </div>
                                        <div className="room-compliance">
                                            <span className="room-compliance-num">86%</span>
                                            <span className="room-compliance-label">compliance · 19 of 22 active</span>
                                        </div>
                                        <div className="room-bar">
                                            <div className="room-bar-seg go" style="flex: 19"></div>
                                            <div className="room-bar-seg wait" style="flex: 2"></div>
                                            <div className="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div className="room-stats">
                                            <div className="room-stat"><span className="dot go"></span><strong>19</strong> active</div>
                                            <div className="room-stat"><span className="dot wait"></span><strong>2</strong> attention</div>
                                            <div className="room-stat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                    <div className="room">
                                        <div className="room-header">
                                            <div>
                                                <div className="room-title">Algebra II · Rm 305</div>
                                                <div className="room-meta">Afolabi · <strong>25 enrolled</strong></div>
                                            </div>
                                            <div className="room-badge">P2</div>
                                        </div>
                                        <div className="room-compliance">
                                            <span className="room-compliance-num">92%</span>
                                            <span className="room-compliance-label">compliance · 23 of 25 active</span>
                                        </div>
                                        <div className="room-bar">
                                            <div className="room-bar-seg go" style="flex: 23"></div>
                                            <div className="room-bar-seg wait" style="flex: 1"></div>
                                            <div className="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div className="room-stats">
                                            <div className="room-stat"><span className="dot go"></span><strong>23</strong> active</div>
                                            <div className="room-stat"><span className="dot wait"></span><strong>1</strong> attention</div>
                                            <div className="room-stat"><span className="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="view active" data-view="roster">
                                <div className="roster-toolbar">

                                    <div className="filter-tabs" id="rosterFilters">
                                        <button className="filter-tab" data-filter="all">
                                            All <span className="filter-tab-count">847</span>
                                        </button>
                                        <button className="filter-tab" data-filter="alert">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                            Absent <span className="filter-tab-count">5</span>
                                        </button>
                                        <button className="filter-tab" data-filter="wait">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            Needs attention <span className="filter-tab-count">7</span>
                                        </button>
                                        <button className="filter-tab active go" data-filter="go">
                                            Active <span className="filter-tab-count">712</span>
                                        </button>
                                    </div>

                                    <div className="roster-divider"></div>

                                    <button className="roster-sort">
                                        <span className="sort-label">Sort:</span>
                                        <span>Status, then grade</span>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted)"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </button>

                                    <div className="roster-search">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" placeholder="Search by name or ID…" />
                                    </div>
                                </div>

                                <table className="roster-table">
                                    <thead>
                                    <tr>
                                        <th style="min-width: 240px">Student</th>
                                        <th>Status</th>
                                        <th>Duration</th>
                                        <th>Class</th>
                                        <th>Teacher</th>
                                        <th>Last activity</th>
                                    </tr>
                                    </thead>
                                    <tbody id="rosterBody">

                                    <tr className="group-row" data-group="alert" style="display: none;"><td colspan="6">Absent <span className="group-count">5 students</span></td></tr>

                                    <tr data-status="alert" style="display: none;">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">AM</div>
                                                <div>
                                                    <div className="roster-name">Amara Madison</div>
                                                    <div className="roster-id">Grade 11 · #2847</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill alert"><span className="dot"></span>Absent</span></td>
                                        <td className="roster-num">2 days</td>
                                        <td className="roster-num">P2 · Chemistry</td>
                                        <td className="roster-num">Hollingsworth</td>
                                        <td className="roster-num">Apr 26, 2:47 PM</td>
                                    </tr>
                                    <tr data-status="alert" style="display: none;">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">DK</div>
                                                <div>
                                                    <div className="roster-name">Dominic Kahn</div>
                                                    <div className="roster-id">Grade 10 · #3102</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill alert"><span className="dot"></span>Absent</span></td>
                                        <td className="roster-num">1 day</td>
                                        <td className="roster-num">P2 · English Lit</td>
                                        <td className="roster-num">Terán</td>
                                        <td className="roster-num">Apr 27, 3:12 PM</td>
                                    </tr>
                                    <tr data-status="alert" style="display: none;">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">JL</div>
                                                <div>
                                                    <div className="roster-name">Jasper Liu</div>
                                                    <div className="roster-id">Grade 9 · #4028</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill alert"><span className="dot"></span>Absent</span></td>
                                        <td className="roster-num">1 day</td>
                                        <td className="roster-num">P2 · Algebra II</td>
                                        <td className="roster-num">Afolabi</td>
                                        <td className="roster-num">Apr 27, 3:30 PM</td>
                                    </tr>

                                    <tr className="group-row" data-group="wait" style="display: none;"><td colspan="6">Needs attention <span className="group-count">7 students</span></td></tr>

                                    <tr data-status="wait" style="display: none;">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">SP</div>
                                                <div>
                                                    <div className="roster-name">Sofia Patel</div>
                                                    <div className="roster-id">Grade 12 · #1984</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span className="status-pill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Tapped out
                  </span>
                                        </td>
                                        <td className="roster-num">Out 12 min</td>
                                        <td className="roster-num">P2 · AP Biology</td>
                                        <td className="roster-num">Hollingsworth</td>
                                        <td className="roster-num">Today 9:34 AM</td>
                                    </tr>
                                    <tr data-status="wait" style="display: none;">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">MC</div>
                                                <div>
                                                    <div className="roster-name">Marcus Chen</div>
                                                    <div className="roster-id">Grade 11 · #2156</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span className="status-pill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Tapped out
                  </span>
                                        </td>
                                        <td className="roster-num">Out 4 min</td>
                                        <td className="roster-num">P2 · U.S. History</td>
                                        <td className="roster-num">Nakamura</td>
                                        <td className="roster-num">Today 9:42 AM</td>
                                    </tr>
                                    <tr data-status="wait" style="display: none;">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">TR</div>
                                                <div>
                                                    <div className="roster-name">Tessa Romano</div>
                                                    <div className="roster-id">Grade 10 · #3445</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span className="status-pill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Offline
                  </span>
                                        </td>
                                        <td className="roster-num">3 min</td>
                                        <td className="roster-num">P2 · Chemistry</td>
                                        <td className="roster-num">Hollingsworth</td>
                                        <td className="roster-num">Today 9:43 AM</td>
                                    </tr>

                                    <tr className="group-row" data-group="go" style=""><td colspan="6">Active <span className="group-count">712 students</span></td></tr>

                                    <tr data-status="go" style="">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">RO</div>
                                                <div>
                                                    <div className="roster-name">Rhea Okonkwo</div>
                                                    <div className="roster-id">Grade 10 · #3390</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill go"><span className="dot"></span>Active</span></td>
                                        <td className="roster-num">1h 18m</td>
                                        <td className="roster-num">P2 · Chemistry</td>
                                        <td className="roster-num">Hollingsworth</td>
                                        <td className="roster-num">Today 8:28 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">TB</div>
                                                <div>
                                                    <div className="roster-name">Theo Bernstein</div>
                                                    <div className="roster-id">Grade 12 · #1742</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill go"><span className="dot"></span>Active</span></td>
                                        <td className="roster-num">1h 22m</td>
                                        <td className="roster-num">P2 · AP Calculus</td>
                                        <td className="roster-num">Afolabi</td>
                                        <td className="roster-num">Today 8:24 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">NV</div>
                                                <div>
                                                    <div className="roster-name">Nadia Vargas</div>
                                                    <div className="roster-id">Grade 9 · #4215</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill go"><span className="dot"></span>Active</span></td>
                                        <td className="roster-num">1h 15m</td>
                                        <td className="roster-num">P2 · English I</td>
                                        <td className="roster-num">Terán</td>
                                        <td className="roster-num">Today 8:31 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">EW</div>
                                                <div>
                                                    <div className="roster-name">Ezra Whitfield</div>
                                                    <div className="roster-id">Grade 11 · #2501</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill go"><span className="dot"></span>Active</span></td>
                                        <td className="roster-num">1h 21m</td>
                                        <td className="roster-num">P2 · Physics</td>
                                        <td className="roster-num">Hollingsworth</td>
                                        <td className="roster-num">Today 8:25 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div className="roster-student">
                                                <div className="roster-avatar">LR</div>
                                                <div>
                                                    <div className="roster-name">Lucia Rodriguez</div>
                                                    <div className="roster-id">Grade 10 · #3547</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="status-pill go"><span className="dot"></span>Active</span></td>
                                        <td className="roster-num">1h 20m</td>
                                        <td className="roster-num">P2 · AP Biology</td>
                                        <td className="roster-num">Hollingsworth</td>
                                        <td className="roster-num">Today 8:26 AM</td>
                                    </tr>

                                    </tbody>
                                </table>
                                <div className="roster-footer">
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