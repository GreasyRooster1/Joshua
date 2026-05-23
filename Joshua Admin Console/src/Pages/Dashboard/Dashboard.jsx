import React from 'react';
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar.jsx";

function Dashboard(props) {
    return (
            <div className="app">
                <SideBar />
                <!-- MAIN -->
                <main class="main">

                    <TopBar />

                    <div class="content">

                        <div class="page-head">
                            <div class="breadcrumb">
                                <span>Westbrook High School</span>
                                <span class="breadcrumb-sep">/</span>
                                <span class="breadcrumb-current">Dashboard</span>
                            </div>
                            <div class="page-title-row">
                                <div>
                                    <h1 class="page-title">Today's overview</h1>
                                    <p class="page-subtitle">Tuesday, April 28, 2026 · Period 2 in progress</p>
                                </div>
                                <div class="page-actions">
                                    <button class="btn">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        Export report
                                    </button>
                                    <button class="btn btn-primary">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        Quick actions
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- ATTENTION HERO -->
                        <div class="attention-hero">

                            <div class="attention-card">
                                <div class="attention-card-head">
                                    <div class="attention-card-icon alert">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                    </div>
                                    <div class="attention-card-meta">
                                        <div class="attention-card-eyebrow alert">Absent today</div>
                                        <div class="attention-card-title">Not at school</div>
                                    </div>
                                    <div class="attention-card-count">5</div>
                                </div>

                                <div class="attention-card-list">
                                    <div class="attention-row">
                                        <div class="attention-row-avatar">AM</div>
                                        <div class="attention-row-info">
                                            <div class="attention-row-name">Amara Madison</div>
                                            <div class="attention-row-meta">Grade 11<span class="sep">·</span>P2 · Chemistry<span class="sep">·</span>Hollingsworth</div>
                                        </div>
                                        <div class="attention-row-time">
                                            <strong>2 days</strong>
                                            Last seen Apr 26
                                        </div>
                                    </div>
                                    <div class="attention-row">
                                        <div class="attention-row-avatar">DK</div>
                                        <div class="attention-row-info">
                                            <div class="attention-row-name">Dominic Kahn</div>
                                            <div class="attention-row-meta">Grade 10<span class="sep">·</span>P2 · English Lit<span class="sep">·</span>Terán</div>
                                        </div>
                                        <div class="attention-row-time">
                                            <strong>1 day</strong>
                                            Last seen Apr 27
                                        </div>
                                    </div>
                                    <div class="attention-row">
                                        <div class="attention-row-avatar">JL</div>
                                        <div class="attention-row-info">
                                            <div class="attention-row-name">Jasper Liu</div>
                                            <div class="attention-row-meta">Grade 9<span class="sep">·</span>P2 · Algebra II<span class="sep">·</span>Afolabi</div>
                                        </div>
                                        <div class="attention-row-time">
                                            <strong>1 day</strong>
                                            Last seen Apr 27
                                        </div>
                                    </div>
                                </div>

                                <div class="attention-card-foot">
                                    <a class="link">View all 5 absent students →</a>
                                    <span class="meta">Updated 12 sec ago</span>
                                </div>
                            </div>

                            <div class="attention-card">
                                <div class="attention-card-head">
                                    <div class="attention-card-icon warn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                    </div>
                                    <div class="attention-card-meta">
                                        <div class="attention-card-eyebrow warn">Needs attention</div>
                                        <div class="attention-card-title">Tapped out or offline</div>
                                    </div>
                                    <div class="attention-card-count">7</div>
                                </div>

                                <div class="attention-card-list">
                                    <div class="attention-row">
                                        <div class="attention-row-avatar">SP</div>
                                        <div class="attention-row-info">
                                            <div class="attention-row-name">Sofia Patel</div>
                                            <div class="attention-row-meta">Grade 12<span class="sep">·</span>P2 · AP Biology<span class="sep">·</span>Hollingsworth</div>
                                        </div>
                                        <div class="attention-row-time">
                                            <strong>Out 12 min</strong>
                                            Tapped out
                                        </div>
                                    </div>
                                    <div class="attention-row">
                                        <div class="attention-row-avatar">MC</div>
                                        <div class="attention-row-info">
                                            <div class="attention-row-name">Marcus Chen</div>
                                            <div class="attention-row-meta">Grade 11<span class="sep">·</span>P2 · U.S. History<span class="sep">·</span>Nakamura</div>
                                        </div>
                                        <div class="attention-row-time">
                                            <strong>Out 4 min</strong>
                                            Tapped out
                                        </div>
                                    </div>
                                    <div class="attention-row">
                                        <div class="attention-row-avatar">TR</div>
                                        <div class="attention-row-info">
                                            <div class="attention-row-name">Tessa Romano</div>
                                            <div class="attention-row-meta">Grade 10<span class="sep">·</span>P2 · Chemistry<span class="sep">·</span>Hollingsworth</div>
                                        </div>
                                        <div class="attention-row-time">
                                            <strong>Offline 3 min</strong>
                                            No connection
                                        </div>
                                    </div>
                                </div>

                                <div class="attention-card-foot">
                                    <a class="link">View all 7 needing attention →</a>
                                    <span class="meta">Updated 12 sec ago</span>
                                </div>
                            </div>

                        </div>

                        <!-- STATS -->
                        <div class="stats-row">
                            <div class="stat-cell">
                                <div class="stat-label"><span class="stat-dot brand"></span>Total enrolled</div>
                                <div class="stat-value">847</div>
                                <div class="stat-note">Across 5 grade levels</div>
                            </div>
                            <div class="stat-cell">
                                <div class="stat-label"><span class="stat-dot go"></span>Active right now</div>
                                <div class="stat-value">712 <span class="pct">/ 86%</span></div>
                                <div class="stat-note">In focus mode</div>
                            </div>
                            <div class="stat-cell">
                                <div class="stat-label"><span class="stat-dot wait"></span>Needs attention</div>
                                <div class="stat-value">7</div>
                                <div class="stat-note">Tapped out or offline</div>
                            </div>
                            <div class="stat-cell">
                                <div class="stat-label"><span class="stat-dot alert"></span>Absent today</div>
                                <div class="stat-value">5</div>
                                <div class="stat-note">Not at school</div>
                            </div>
                        </div>

                        <!-- VIEW PANEL -->
                        <div class="panel">
                            <div class="panel-header">
                                <div>
                                    <div class="panel-title" id="panelTitle">Student roster — all 847 students</div>
                                    <div class="panel-sub" id="panelSub">Filter by status, sort by grade, or search for any student.</div>
                                </div>
                                <div class="view-tabs">
                                    <button class="view-tab" data-target="classrooms">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                        Classrooms
                                    </button>
                                    <button class="view-tab active" data-target="roster">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                        Roster
                                    </button>
                                </div>
                            </div>

                            <!-- CLASSROOMS -->
                            <div class="view" data-view="classrooms">
                                <div class="campus">

                                    <div class="room has-issue">
                                        <div class="room-header">
                                            <div>
                                                <div class="room-title">Chemistry · Rm 204</div>
                                                <div class="room-meta">Dr. Hollingsworth · <strong>28 enrolled</strong></div>
                                            </div>
                                            <div class="room-badge">P2</div>
                                        </div>
                                        <div class="room-compliance">
                                            <span class="room-compliance-num">86%</span>
                                            <span class="room-compliance-label">compliance · 24 of 28 active</span>
                                        </div>
                                        <div class="room-bar">
                                            <div class="room-bar-seg go" style="flex: 24"></div>
                                            <div class="room-bar-seg wait" style="flex: 2"></div>
                                            <div class="room-bar-seg alert" style="flex: 2"></div>
                                        </div>
                                        <div class="room-stats">
                                            <div class="room-stat"><span class="dot go"></span><strong>24</strong> active</div>
                                            <div class="room-stat"><span class="dot wait"></span><strong>2</strong> attention</div>
                                            <div class="room-stat"><span class="dot alert"></span><strong>2</strong> absent</div>
                                        </div>
                                        <div class="room-attention">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            2 students need attention
                                        </div>
                                    </div>

                                    <div class="room">
                                        <div class="room-header">
                                            <div>
                                                <div class="room-title">AP Calculus · Rm 312</div>
                                                <div class="room-meta">Afolabi · <strong>24 enrolled</strong></div>
                                            </div>
                                            <div class="room-badge">P2</div>
                                        </div>
                                        <div class="room-compliance">
                                            <span class="room-compliance-num">96%</span>
                                            <span class="room-compliance-label">compliance · 23 of 24 active</span>
                                        </div>
                                        <div class="room-bar">
                                            <div class="room-bar-seg go" style="flex: 23"></div>
                                            <div class="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div class="room-stats">
                                            <div class="room-stat"><span class="dot go"></span><strong>23</strong> active</div>
                                            <div class="room-stat"><span class="dot wait"></span><strong>0</strong> attention</div>
                                            <div class="room-stat"><span class="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                    <div class="room has-alert">
                                        <div class="room-header">
                                            <div>
                                                <div class="room-title">English Lit · Rm 108</div>
                                                <div class="room-meta">Terán · <strong>26 enrolled</strong></div>
                                            </div>
                                            <div class="room-badge">P2</div>
                                        </div>
                                        <div class="room-compliance">
                                            <span class="room-compliance-num">81%</span>
                                            <span class="room-compliance-label">compliance · 21 of 26 active</span>
                                        </div>
                                        <div class="room-bar">
                                            <div class="room-bar-seg go" style="flex: 21"></div>
                                            <div class="room-bar-seg wait" style="flex: 4"></div>
                                            <div class="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div class="room-stats">
                                            <div class="room-stat"><span class="dot go"></span><strong>21</strong> active</div>
                                            <div class="room-stat"><span class="dot wait"></span><strong>4</strong> attention</div>
                                            <div class="room-stat"><span class="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                        <div class="room-attention alert">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            Below 90% threshold — 4 need attention
                                        </div>
                                    </div>

                                    <div class="room has-issue">
                                        <div class="room-header">
                                            <div>
                                                <div class="room-title">U.S. History · Rm 221</div>
                                                <div class="room-meta">Nakamura · <strong>27 enrolled</strong></div>
                                            </div>
                                            <div class="room-badge">P2</div>
                                        </div>
                                        <div class="room-compliance">
                                            <span class="room-compliance-num">81%</span>
                                            <span class="room-compliance-label">compliance · 22 of 27 active</span>
                                        </div>
                                        <div class="room-bar">
                                            <div class="room-bar-seg go" style="flex: 22"></div>
                                            <div class="room-bar-seg wait" style="flex: 3"></div>
                                            <div class="room-bar-seg alert" style="flex: 2"></div>
                                        </div>
                                        <div class="room-stats">
                                            <div class="room-stat"><span class="dot go"></span><strong>22</strong> active</div>
                                            <div class="room-stat"><span class="dot wait"></span><strong>3</strong> attention</div>
                                            <div class="room-stat"><span class="dot alert"></span><strong>2</strong> absent</div>
                                        </div>
                                        <div class="room-attention">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            3 students need attention
                                        </div>
                                    </div>

                                    <div class="room">
                                        <div class="room-header">
                                            <div>
                                                <div class="room-title">AP Biology · Rm 217</div>
                                                <div class="room-meta">Dr. Hollingsworth · <strong>22 enrolled</strong></div>
                                            </div>
                                            <div class="room-badge">P2</div>
                                        </div>
                                        <div class="room-compliance">
                                            <span class="room-compliance-num">86%</span>
                                            <span class="room-compliance-label">compliance · 19 of 22 active</span>
                                        </div>
                                        <div class="room-bar">
                                            <div class="room-bar-seg go" style="flex: 19"></div>
                                            <div class="room-bar-seg wait" style="flex: 2"></div>
                                            <div class="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div class="room-stats">
                                            <div class="room-stat"><span class="dot go"></span><strong>19</strong> active</div>
                                            <div class="room-stat"><span class="dot wait"></span><strong>2</strong> attention</div>
                                            <div class="room-stat"><span class="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                    <div class="room">
                                        <div class="room-header">
                                            <div>
                                                <div class="room-title">Algebra II · Rm 305</div>
                                                <div class="room-meta">Afolabi · <strong>25 enrolled</strong></div>
                                            </div>
                                            <div class="room-badge">P2</div>
                                        </div>
                                        <div class="room-compliance">
                                            <span class="room-compliance-num">92%</span>
                                            <span class="room-compliance-label">compliance · 23 of 25 active</span>
                                        </div>
                                        <div class="room-bar">
                                            <div class="room-bar-seg go" style="flex: 23"></div>
                                            <div class="room-bar-seg wait" style="flex: 1"></div>
                                            <div class="room-bar-seg alert" style="flex: 1"></div>
                                        </div>
                                        <div class="room-stats">
                                            <div class="room-stat"><span class="dot go"></span><strong>23</strong> active</div>
                                            <div class="room-stat"><span class="dot wait"></span><strong>1</strong> attention</div>
                                            <div class="room-stat"><span class="dot alert"></span><strong>1</strong> absent</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- ROSTER -->
                            <div class="view active" data-view="roster">
                                <div class="roster-toolbar">

                                    <div class="filter-tabs" id="rosterFilters">
                                        <button class="filter-tab" data-filter="all">
                                            All <span class="filter-tab-count">847</span>
                                        </button>
                                        <button class="filter-tab" data-filter="alert">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                            Absent <span class="filter-tab-count">5</span>
                                        </button>
                                        <button class="filter-tab" data-filter="wait">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            Needs attention <span class="filter-tab-count">7</span>
                                        </button>
                                        <button class="filter-tab active go" data-filter="go">
                                            Active <span class="filter-tab-count">712</span>
                                        </button>
                                    </div>

                                    <div class="roster-divider"></div>

                                    <button class="roster-sort">
                                        <span class="sort-label">Sort:</span>
                                        <span>Status, then grade</span>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted)"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </button>

                                    <div class="roster-search">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" placeholder="Search by name or ID…" />
                                    </div>
                                </div>

                                <table class="roster-table">
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

                                    <tr class="group-row" data-group="alert" style="display: none;"><td colspan="6">Absent <span class="group-count">5 students</span></td></tr>

                                    <tr data-status="alert" style="display: none;">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">AM</div>
                                                <div>
                                                    <div class="roster-name">Amara Madison</div>
                                                    <div class="roster-id">Grade 11 · #2847</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill alert"><span class="dot"></span>Absent</span></td>
                                        <td class="roster-num">2 days</td>
                                        <td class="roster-num">P2 · Chemistry</td>
                                        <td class="roster-num">Hollingsworth</td>
                                        <td class="roster-num">Apr 26, 2:47 PM</td>
                                    </tr>
                                    <tr data-status="alert" style="display: none;">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">DK</div>
                                                <div>
                                                    <div class="roster-name">Dominic Kahn</div>
                                                    <div class="roster-id">Grade 10 · #3102</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill alert"><span class="dot"></span>Absent</span></td>
                                        <td class="roster-num">1 day</td>
                                        <td class="roster-num">P2 · English Lit</td>
                                        <td class="roster-num">Terán</td>
                                        <td class="roster-num">Apr 27, 3:12 PM</td>
                                    </tr>
                                    <tr data-status="alert" style="display: none;">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">JL</div>
                                                <div>
                                                    <div class="roster-name">Jasper Liu</div>
                                                    <div class="roster-id">Grade 9 · #4028</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill alert"><span class="dot"></span>Absent</span></td>
                                        <td class="roster-num">1 day</td>
                                        <td class="roster-num">P2 · Algebra II</td>
                                        <td class="roster-num">Afolabi</td>
                                        <td class="roster-num">Apr 27, 3:30 PM</td>
                                    </tr>

                                    <tr class="group-row" data-group="wait" style="display: none;"><td colspan="6">Needs attention <span class="group-count">7 students</span></td></tr>

                                    <tr data-status="wait" style="display: none;">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">SP</div>
                                                <div>
                                                    <div class="roster-name">Sofia Patel</div>
                                                    <div class="roster-id">Grade 12 · #1984</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span class="status-pill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Tapped out
                  </span>
                                        </td>
                                        <td class="roster-num">Out 12 min</td>
                                        <td class="roster-num">P2 · AP Biology</td>
                                        <td class="roster-num">Hollingsworth</td>
                                        <td class="roster-num">Today 9:34 AM</td>
                                    </tr>
                                    <tr data-status="wait" style="display: none;">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">MC</div>
                                                <div>
                                                    <div class="roster-name">Marcus Chen</div>
                                                    <div class="roster-id">Grade 11 · #2156</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span class="status-pill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Tapped out
                  </span>
                                        </td>
                                        <td class="roster-num">Out 4 min</td>
                                        <td class="roster-num">P2 · U.S. History</td>
                                        <td class="roster-num">Nakamura</td>
                                        <td class="roster-num">Today 9:42 AM</td>
                                    </tr>
                                    <tr data-status="wait" style="display: none;">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">TR</div>
                                                <div>
                                                    <div class="roster-name">Tessa Romano</div>
                                                    <div class="roster-id">Grade 10 · #3445</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                  <span class="status-pill wait">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Offline
                  </span>
                                        </td>
                                        <td class="roster-num">3 min</td>
                                        <td class="roster-num">P2 · Chemistry</td>
                                        <td class="roster-num">Hollingsworth</td>
                                        <td class="roster-num">Today 9:43 AM</td>
                                    </tr>

                                    <tr class="group-row" data-group="go" style=""><td colspan="6">Active <span class="group-count">712 students</span></td></tr>

                                    <tr data-status="go" style="">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">RO</div>
                                                <div>
                                                    <div class="roster-name">Rhea Okonkwo</div>
                                                    <div class="roster-id">Grade 10 · #3390</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill go"><span class="dot"></span>Active</span></td>
                                        <td class="roster-num">1h 18m</td>
                                        <td class="roster-num">P2 · Chemistry</td>
                                        <td class="roster-num">Hollingsworth</td>
                                        <td class="roster-num">Today 8:28 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">TB</div>
                                                <div>
                                                    <div class="roster-name">Theo Bernstein</div>
                                                    <div class="roster-id">Grade 12 · #1742</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill go"><span class="dot"></span>Active</span></td>
                                        <td class="roster-num">1h 22m</td>
                                        <td class="roster-num">P2 · AP Calculus</td>
                                        <td class="roster-num">Afolabi</td>
                                        <td class="roster-num">Today 8:24 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">NV</div>
                                                <div>
                                                    <div class="roster-name">Nadia Vargas</div>
                                                    <div class="roster-id">Grade 9 · #4215</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill go"><span class="dot"></span>Active</span></td>
                                        <td class="roster-num">1h 15m</td>
                                        <td class="roster-num">P2 · English I</td>
                                        <td class="roster-num">Terán</td>
                                        <td class="roster-num">Today 8:31 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">EW</div>
                                                <div>
                                                    <div class="roster-name">Ezra Whitfield</div>
                                                    <div class="roster-id">Grade 11 · #2501</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill go"><span class="dot"></span>Active</span></td>
                                        <td class="roster-num">1h 21m</td>
                                        <td class="roster-num">P2 · Physics</td>
                                        <td class="roster-num">Hollingsworth</td>
                                        <td class="roster-num">Today 8:25 AM</td>
                                    </tr>
                                    <tr data-status="go" style="">
                                        <td>
                                            <div class="roster-student">
                                                <div class="roster-avatar">LR</div>
                                                <div>
                                                    <div class="roster-name">Lucia Rodriguez</div>
                                                    <div class="roster-id">Grade 10 · #3547</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="status-pill go"><span class="dot"></span>Active</span></td>
                                        <td class="roster-num">1h 20m</td>
                                        <td class="roster-num">P2 · AP Biology</td>
                                        <td class="roster-num">Hollingsworth</td>
                                        <td class="roster-num">Today 8:26 AM</td>
                                    </tr>

                                    </tbody>
                                </table>
                                <div class="roster-footer">
                                    Showing <strong>11</strong> of <strong>847</strong> students
                                    <a class="link">Load more →</a>
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