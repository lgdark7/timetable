/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "My Project", "index.html", [
    [ "================================================================================", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html", [
      [ "================================================================================", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md0", [
        [ "0.1 DECLARATION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md2", null ],
        [ "0.2 CERTIFICATE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md4", null ],
        [ "1.1 PREFACE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md5", null ],
        [ "1.2 THE CORE PROBLEM STATEMENT", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md6", null ],
        [ "1.3 PROPOSED SOLUTION: THE INTELLIGENT APPROACH", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md7", null ],
        [ "1.4 OBJECTIVES OF THE STUDY", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md8", null ],
        [ "1.5 IMPACT ASSESSMENT", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md9", null ],
        [ "2.1 INSTITUTIONAL REQUIREMENTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md10", null ],
        [ "2.2 FUNCTIONAL REQUIREMENTS BREAKDOWN", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md11", null ],
        [ "2.3 NON-FUNCTIONAL REQUIREMENTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md12", null ],
        [ "2.4 HARDWARE AND SOFTWARE PREREQUISITES", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md13", null ],
        [ "2.5 TECHNICAL STACK DEEP DIVE (WHY PYTHON/FLASK?)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md14", null ],
        [ "3.1 HIGH-LEVEL SYSTEM ARCHITECTURE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md15", null ],
        [ "3.2 THE MODEL-VIEW-CONTROLLER (MVC) PATTERN", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md16", null ],
        [ "3.3 BLUEPRINT ORGANIZATION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md17", null ],
        [ "3.4 DATA FLOW DIAGRAMS (DFD)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md18", null ],
        [ "4.1 ER DIAGRAM OVERVIEW", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md19", null ],
        [ "4.2 DETAILED TABLE DEFINITIONS (SQLAlchemy Models)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md20", null ]
      ] ],
      [ "4.2.1 TABLE: department", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md22", null ],
      [ "4.2.2 TABLE: course", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md24", null ],
      [ "4.2.3 TABLE: teacher", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md26", null ],
      [ "4.2.4 TABLE: classroom", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md28", null ],
      [ "4.2.5 TABLE: allocation (The Bridge Table)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md30", null ],
      [ "4.2.6 TABLE: timetable_entry (The Result Table)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md32", null ],
      [ "4.2.7 TABLE: user (Security Layer)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md34", null ],
      [ "4.2.8 TABLE: leave_request", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md36", null ],
      [ "4.2.9 TABLE: substitution", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md38", null ],
      [ "4.2.10 TABLE: message (Mailbox)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md40", [
        [ "5.1 THE CONSTRAINT-SATISFACTION PROBLEM (CSP)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md41", null ],
        [ "5.2 PRIORITY SCHEDULING HEURISTICS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md42", null ],
        [ "5.3 HANDLING PRACTICAL/LAB BLOCKS (3-Hour Rule)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md43", null ],
        [ "5.4 ACTIVITY CLASS SLOT ALLOCATION LOGIC", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md44", null ],
        [ "5.5 CONFLICT DETECTION ALGORITHM WALKTHROUGH", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md45", null ],
        [ "CODE SNIPPET: The Requirement Fetcher (scheduler.py)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md47", null ]
      ] ],
      [ "Logic for Practical sessions (3-hour slots)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md48", null ],
      [ "Logic for Theory sessions (1-hour slots)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md49", [
        [ "`", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md50", null ],
        [ "6.1 APPLICATION ENTRY POINT (app.py)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md51", null ]
      ] ],
      [ "KEY COMPONENTS OF app.py:", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md53", [
        [ "6.2 ROUTE DEFINITIONS AND CONTROLLERS (routes.py)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md54", null ]
      ] ],
      [ "6.2.1 AUTHENTICATION AND REGISTRATION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md56", null ],
      [ "6.2.2 DATA ADMINISTRATION (CRUD)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md58", null ],
      [ "6.2.3 THE SCHEDULING CONTROLS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md60", null ],
      [ "6.2.4 TIMETABLE DISPLAY LOGIC", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md62", null ],
      [ "6.2.5 LEAVE AND SUBSTITUTION CONTROLLER", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md64", null ],
      [ "6.2.6 INTERNAL MAILBOX LOGIC", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md66", [
        [ "6.3 UTILITY SCRIPTS (Checkers and Migrations)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md67", null ],
        [ "7.1 GLASSMORPHISM DESIGN TOKENS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md68", null ],
        [ "7.2 RESPONSIVE GRID LAYOUTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md69", null ],
        [ "7.3 DYNAMIC CANVAS ANIMATIONS (Background Engine)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md70", null ],
        [ "7.4 USER PERSONA DASHBOARDS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md71", null ]
      ] ],
      [ "7.4.1 THE ADMIN DASHBOARD", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md73", null ],
      [ "7.4.2 THE TEACHER DASHBOARD", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md75", null ],
      [ "7.4.3 THE STUDENT DASHBOARD", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md77", [
        [ "8.1 THE BULK INPUT PARSING LOGIC", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md78", null ],
        [ "8.2 DETAILED CSV SPECIFICATIONS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md79", null ]
      ] ],
      [ "A. SUBJECTS/COURSES (subjects.csv)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md81", null ],
      [ "B. TEACHERS (teachers.csv)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md83", null ],
      [ "C. ALLOCATIONS (allocations.csv)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md85", [
        [ "8.3 ERROR HANDLING IN CSV IMPORTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md86", null ],
        [ "9.1 ADMINISTRATOR GUIDE: SETTING UP A NEW SEMESTER", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md87", null ],
        [ "9.2 TEACHER GUIDE: MANAGING YOUR ACADEMIC LIFE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md88", null ],
        [ "9.3 STUDENT GUIDE: ATTENDING CLASSES", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md89", null ],
        [ "10.1 TESTING STRATEGY", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md90", null ],
        [ "10.2 USER ACCEPTANCE TESTING (UAT)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md91", null ],
        [ "10.3 SECURITY PENETRATION TESTING", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md92", null ],
        [ "10.4 BUG LOG AND RESOLUTION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md93", null ],
        [ "11.1 CLOUD DEPLOYMENT (HEROKU / AWS / AZURE)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md94", null ],
        [ "11.2 DESKTOP DEPLOYMENT (THE EXECUTABLE)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md95", null ],
        [ "11.3 FUTURE WORK (AI INTEGRATION)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md96", null ],
        [ "A.1 TABLE: DEPARTMENT (Metadata)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md97", null ],
        [ "A.2 TABLE: COURSE (Metadata)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md98", null ],
        [ "A.3 TABLE: TEACHER (Metadata)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md99", null ],
        [ "A.4 TABLE: CLASSROOM (Metadata)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md100", null ],
        [ "A.5 TABLE: TIMETABLE_ENTRY (The Master Table)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md101", null ],
        [ "B.1 CORE MODELS (models.py)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md102", null ]
      ] ],
      [ "Global Constants for institutional alignment", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md103", null ],
      [ "Cascade deletes ensure that if a department is removed,", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md104", null ],
      [ "its courses and teacher links are also cleaned up.", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md105", [
        [ "B.2 THE SCHEDULING ALGORITHM (scheduler.py)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md106", null ]
      ] ],
      [ "1. Clear existing schedule", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md107", null ],
      [ "2. Sort requirements (Practicals first)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md108", null ],
      [ "3. Loop and Validate", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md109", null ],
      [ "Priority Hack: Sort by duration descending", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md110", null ],
      [ "Randomized 'Domain' prevents repetitive schedules", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md111", null ],
      [ "Slot Checking Logic...", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md112", null ],
      [ "Place in Room...", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md113", null ],
      [ "Record successful assignment", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md114", [
        [ "B.3 THE CONTROLLER (routes.py - Logic Excerpts)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md115", null ]
      ] ],
      [ "If the search space is too small (e.g., only 1 room for 10 classes)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md116", null ],
      [ "the algorithm returns False and informs the user.", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md117", null ],
      [ "Transactional Block", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md118", null ],
      [ "Logic to map row -&gt; DB Object", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md119", [
        [ "C.1 AUTHENTICATION TESTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md120", null ],
        [ "C.2 DATABASE INTEGRITY TESTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md121", null ],
        [ "C.3 SCHEDULER STRESS TESTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md122", null ],
        [ "C.4 USER INTERFACE (UI) TESTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md123", null ],
        [ "E.1 THE DESIGN TOKENS (index.css)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md124", null ],
        [ "E.2 ANIMATION ENGINE (main.js)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md125", null ],
        [ "F.1 LOGIN PAGE MOCKUP", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md127", null ],
        [ "F.2 ADMIN DASHBOARD MOCKUP", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md129", null ],
        [ "F.3 TIMETABLE GRID MOCKUP", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md131", null ],
        [ "G.1 COMMON ERROR CODES", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md132", null ],
        [ "G.2 DATABASE BACKUP POLICY", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md133", null ],
        [ "G.3 SCALABILITY CONSIDERATIONS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md134", null ],
        [ "H.1 LUNCH BREAK PROTECTION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md135", null ],
        [ "H.2 FAIR WORKLOAD DISTRIBUTION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md136", null ],
        [ "H.3 PRACTICAL SESSION LOGISTICS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md137", null ],
        [ "13.1 THE CONSTRAINT SATISFACTION PROBLEM (CSP) MODEL", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md138", null ],
        [ "13.2 THE HEURISTIC SEARCH SPACE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md139", null ],
        [ "13.3 COMPLEXITY ANALYSIS (Big-O Notation)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md140", null ],
        [ "J.1 THE MASTER LAYOUT (templates/base.html)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md141", null ],
        [ "J.2 THE TIMETABLE GRID (templates/timetable.html)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md142", null ],
        [ "K.1 ROLE-BASED PERMISSION MATRIX", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md143", null ],
        [ "K.2 THE @admin_required DECORATOR", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md144", null ],
        [ "K.3 PREVENTING DATABASE OVERLAPS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md145", null ],
        [ "14.1 TOWARDS STOCHASTIC OPTIMIZATION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md146", null ],
        [ "14.2 MOBILE SMART NOTIFICATIONS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md147", null ],
        [ "14.3 THE JOURNEY AHEAD", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md148", null ],
        [ "DATE: MARCH 2026", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md150", null ]
      ] ],
      [ "[ ALL RIGHTS RESERVED ]", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md152", [
        [ "15.1 THE LOGIN EXPERIENCE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md153", null ],
        [ "15.2 ADMINISTRATIVE ONBOARDING", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md154", [
          [ "15.2.1 MANAGING DEPARTMENTS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md155", null ],
          [ "15.2.2 MANAGING CLASSROOMS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md156", null ],
          [ "15.3.3 BULK DATA UPLOAD (CSV)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md157", null ]
        ] ],
        [ "15.4 GENERATING THE TIMETABLE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md158", null ],
        [ "15.5 MANUAL EDITS AND FINE-TUNING", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md159", null ],
        [ "16.1 DATABASE OPTIMIZATION", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md160", null ],
        [ "16.2 INTERNAL AUDIT LOGS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md161", null ],
        [ "16.3 RESTORING FROM BACKUP", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md162", null ]
      ] ],
      [ "[ FINAL DOCUMENTATION RELEASE ]", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md164", [
        [ "18.1 INSTITUTIONAL DATA ETHICS", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md165", null ],
        [ "18.2 DATA PRIVACY &amp; GDPR COMPLIANCE", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md166", null ],
        [ "18.3 INTELLECTUAL PROPERTY (IP)", "md__p_r_e_m_i_u_m___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md167", null ]
      ] ]
    ] ],
    [ "Intelligent Timetable Management System", "md__r_e_a_d_m_e.html", [
      [ "🚀 Key Features", "md__r_e_a_d_m_e.html#autotoc_md169", [
        [ "🧠 Intelligent Scheduler", "md__r_e_a_d_m_e.html#autotoc_md170", null ],
        [ "👥 Role-Based Access Control (RBAC)", "md__r_e_a_d_m_e.html#autotoc_md171", null ],
        [ "🎨 Modern UI/UX", "md__r_e_a_d_m_e.html#autotoc_md172", null ],
        [ "📊 Data Management", "md__r_e_a_d_m_e.html#autotoc_md173", null ]
      ] ],
      [ "🛠️ Technical Stack", "md__r_e_a_d_m_e.html#autotoc_md174", null ],
      [ "📝 Prerequisites", "md__r_e_a_d_m_e.html#autotoc_md175", null ],
      [ "🏃 Getting Started", "md__r_e_a_d_m_e.html#autotoc_md176", null ],
      [ "⚖️ License", "md__r_e_a_d_m_e.html#autotoc_md177", null ]
    ] ],
    [ "Intelligent Timetable Management System", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html", [
      [ "Full Technical Documentation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md179", null ],
      [ "Table of Contents", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md181", null ],
      [ "1. Introduction", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md183", [
        [ "Key Highlights", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md184", null ]
      ] ],
      [ "2. Project Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md186", [
        [ "2.1 Project Name", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md187", null ],
        [ "2.2 Project Description", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md188", null ],
        [ "2.3 Project Goals", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md189", null ],
        [ "2.4 Target Users", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md190", null ],
        [ "2.5 System Requirements", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md191", [
          [ "Hardware Requirements", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md192", null ],
          [ "Software Requirements", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md193", null ]
        ] ]
      ] ],
      [ "3. Objectives of the System", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md195", [
        [ "3.1 Primary Objectives", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md196", null ],
        [ "3.2 Secondary Objectives", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md197", null ],
        [ "3.3 Success Metrics", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md198", null ]
      ] ],
      [ "4. Scope of the Project", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md200", [
        [ "4.1 In Scope", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md201", [
          [ "Core Features", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md202", null ],
          [ "Technical Scope", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md203", null ]
        ] ],
        [ "4.2 Out of Scope", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md204", null ],
        [ "4.3 Assumptions and Constraints", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md205", [
          [ "Assumptions", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md206", null ],
          [ "Constraints", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md207", null ]
        ] ]
      ] ],
      [ "5. Technology Stack", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md209", [
        [ "5.1 Backend Technologies", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md210", null ],
        [ "5.2 Frontend Technologies", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md211", null ],
        [ "5.3 Development Tools", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md212", null ],
        [ "5.4 Why This Stack?", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md213", [
          [ "Flask Selection Rationale", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md214", null ],
          [ "SQLite Selection Rationale", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md215", null ],
          [ "Vanilla CSS Rationale", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md216", null ]
        ] ]
      ] ],
      [ "6. System Architecture", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md218", [
        [ "6.1 Architectural Pattern", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md219", null ],
        [ "6.2 Architecture Diagram", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md220", null ],
        [ "6.3 File Structure Analysis", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md221", null ],
        [ "6.4 Component Interactions", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md222", [
          [ "Request Flow Example", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md223", null ],
          [ "Data Flow Example", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md224", null ]
        ] ]
      ] ],
      [ "7. Database Design and Data Models", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md226", [
        [ "7.1 Database Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md227", null ],
        [ "7.2 Entity Relationship Diagram", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md228", null ],
        [ "7.3 Global Constants", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md229", null ],
        [ "7.4 Data Model: Department", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md230", null ],
        [ "7.5 Data Model: Course", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md231", null ],
        [ "7.6 Data Model: Teacher", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md232", null ],
        [ "7.7 Data Model: Classroom", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md233", null ],
        [ "7.8 Data Model: Allocation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md234", null ],
        [ "7.9 Data Model: TimetableEntry", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md235", null ],
        [ "7.10 Data Model: User", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md236", null ],
        [ "7.11 Data Model: LeaveRequest", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md237", null ],
        [ "7.12 Data Model: Substitution", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md238", null ],
        [ "7.13 Data Model: Message", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md239", null ]
      ] ],
      [ "8. Application Entry Point (app.py)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md241", [
        [ "8.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md242", null ],
        [ "8.2 Complete Source Code", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md243", null ],
        [ "8.3 Key Sections Explained", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md244", [
          [ "8.3.1 Desktop vs. Development Mode", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md245", null ],
          [ "8.3.2 LoginManager Configuration", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md246", null ],
          [ "8.3.3 Context Processor: inject_unread_count", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md247", null ],
          [ "8.3.4 Error Handlers", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md248", null ],
          [ "8.3.5 Blueprint Registration", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md249", null ],
          [ "8.3.6 Database Initialization", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md250", null ]
        ] ]
      ] ],
      [ "9. Routing and Controller Logic (routes.py)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md252", [
        [ "9.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md253", null ],
        [ "9.2 Blueprint Definition", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md254", null ],
        [ "9.3 Admin Guard Decorator", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md255", null ],
        [ "9.4 Authentication Routes", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md256", [
          [ "9.4.1 Login Route Implementation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md257", null ]
        ] ],
        [ "9.5 Dashboard Route", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md258", null ],
        [ "9.6 CRUD Routes Summary", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md259", [
          [ "List/Create Routes", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md260", null ],
          [ "Edit Routes", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md261", null ],
          [ "Delete Routes", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md262", null ]
        ] ],
        [ "9.7 Timetable Generation Route", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md263", null ],
        [ "9.8 Conflict Detection Function", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md264", null ],
        [ "9.9 Smart Slot Suggestion Function", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md265", null ]
      ] ],
      [ "10. Intelligent Scheduling Engine (scheduler.py)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md267", [
        [ "10.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md268", null ],
        [ "10.2 Scheduling Algorithm Design", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md269", [
          [ "Step 1: REQUIREMENT COLLECTION", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md270", null ],
          [ "Step 2: PRIORITIZATION", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md271", null ],
          [ "Step 3: DOMAIN BUILDING", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md272", null ],
          [ "Step 4: CONSTRAINT CHECKING (for each candidate slot)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md273", null ],
          [ "Step 5: ROOM MATCHING", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md274", null ],
          [ "Step 6: ACTIVITY CLASS ASSIGNMENT", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md275", null ],
          [ "Step 7: DATABASE COMMIT", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md276", null ]
        ] ],
        [ "10.3 Scheduler Class Constructor", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md277", null ],
        [ "10.4 Main Scheduling Method", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md278", null ],
        [ "10.5 Activity Class Assignment Logic", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md279", null ],
        [ "10.6 Constraint Summary", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md280", null ]
      ] ],
      [ "11. Role-Based Access Control (RBAC)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md282", [
        [ "11.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md283", null ],
        [ "11.2 Role Definitions", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md284", null ],
        [ "11.3 Access Control Implementation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md285", [
          [ "Level 1 - Route Decorators", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md286", null ],
          [ "Level 2 - In-route Role Checks", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md287", null ],
          [ "Level 3 - Template-Level Visibility", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md288", null ]
        ] ],
        [ "11.4 Feature Access Matrix", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md289", null ]
      ] ],
      [ "12. User Interface and Frontend Design", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md291", [
        [ "12.1 Design Philosophy", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md292", null ],
        [ "12.2 Master Layout (base.html)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md293", null ],
        [ "12.3 Key Pages", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md294", [
          [ "LOGIN PAGE (login.html)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md295", null ],
          [ "DASHBOARD (dashboard.html)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md296", null ],
          [ "TIMETABLE PAGE (timetable.html)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md297", null ],
          [ "EDIT TIMETABLE ENTRY (edit_timetable_entry.html)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md298", null ]
        ] ],
        [ "12.4 Timetable Grid Structure", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md299", null ],
        [ "12.5 Particle Network Animation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md300", null ]
      ] ],
      [ "13. CSV Bulk Import Feature", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md302", [
        [ "13.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md303", null ],
        [ "13.2 Supported Import Types", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md304", null ],
        [ "13.3 CSV Import Route", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md305", null ],
        [ "13.4 Sample CSV Formats", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md306", null ]
      ] ],
      [ "14. Leave Management and Substitution System", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md308", [
        [ "14.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md309", null ],
        [ "14.2 Leave Request Workflow", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md310", null ],
        [ "14.3 LeaveRequest States", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md311", null ],
        [ "14.4 Substitution Display Logic", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md312", null ]
      ] ],
      [ "15. Internal Messaging (Mailbox) System", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md314", [
        [ "15.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md315", null ],
        [ "15.2 Messaging Features", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md316", null ],
        [ "15.3 Compose Message Route", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md317", null ],
        [ "15.4 Navigation Badge", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md318", null ],
        [ "15.5 Message Categories", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md319", null ]
      ] ],
      [ "16. PDF Export Feature", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md321", [
        [ "16.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md322", null ],
        [ "16.2 How It Works", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md323", null ],
        [ "16.3 PDF Export JavaScript", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md324", null ],
        [ "16.4 Export Options", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md325", null ]
      ] ],
      [ "17. Installation and Deployment Guide", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md327", [
        [ "17.1 Prerequisites", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md328", null ],
        [ "17.2 Installation Steps (Web / Development Mode)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md329", [
          [ "STEP 1: Clone the repository or extract the project ZIP", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md330", null ],
          [ "STEP 2: Create and activate a virtual environment (recommended)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md331", null ],
          [ "STEP 3: Install all Python dependencies", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md332", null ],
          [ "STEP 4: Run the Flask development server", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md333", null ],
          [ "STEP 5: Access the application", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md334", null ],
          [ "STEP 6: First Admin Login", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md335", null ]
        ] ],
        [ "17.3 Initial Setup Workflow (After Install)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md336", null ],
        [ "17.4 Desktop Application Build (Optional)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md337", null ],
        [ "17.5 Resetting the Database", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md338", null ]
      ] ],
      [ "18. Testing and Validation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md340", [
        [ "18.1 Overview", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md341", null ],
        [ "18.2 Schedule Density Checker (check_density.py)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md342", null ],
        [ "18.3 Schedule Integrity Checker (check_schedule.py)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md343", null ],
        [ "18.4 Test Scenarios", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md344", null ]
      ] ],
      [ "19. Code Examples and Snippets", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md346", [
        [ "19.1 Database Query Examples", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md347", [
          [ "Find all courses for a department:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md348", null ],
          [ "Get timetable for today:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md349", null ],
          [ "Check teacher availability:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md350", null ]
        ] ],
        [ "19.2 Template Rendering Examples", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md351", [
          [ "Display timetable cell:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md352", null ],
          [ "Role-based navigation:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md353", null ]
        ] ],
        [ "19.3 JavaScript Examples", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md354", [
          [ "Particle animation initialization:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md355", null ],
          [ "Form validation:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md356", null ]
        ] ],
        [ "19.4 Algorithm Logic Examples", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md357", [
          [ "Constraint checking:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md358", null ],
          [ "Random slot selection:", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md359", null ]
        ] ]
      ] ],
      [ "20. Screenshots and Visual Guide", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md361", [
        [ "20.1 Login Page", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md362", null ],
        [ "20.2 Dashboard", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md363", null ],
        [ "20.3 Timetable View", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md364", null ],
        [ "20.4 Edit Timetable Entry", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md365", null ],
        [ "20.5 Mailbox Interface", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md366", null ],
        [ "20.6 CSV Upload", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md367", null ],
        [ "20.7 Leave Management", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md368", null ],
        [ "20.8 PDF Export Result", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md369", null ]
      ] ],
      [ "21. Troubleshooting Guide", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md371", [
        [ "21.1 Common Issues and Solutions", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md372", [
          [ "Issue: \"Failed to generate timetable\"", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md373", null ],
          [ "Issue: \"Invalid username or password\"", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md374", null ],
          [ "Issue: \"Classroom is already occupied\"", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md375", null ],
          [ "Issue: \"Department batch limit reached\"", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md376", null ],
          [ "Issue: CSV import fails", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md377", null ],
          [ "Issue: PDF export is blank or corrupted", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md378", null ],
          [ "Issue: Application won't start", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md379", null ],
          [ "Issue: Database locked errors", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md380", null ],
          [ "Issue: Substitution not showing on timetable", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md381", null ],
          [ "Issue: Particle background not animating", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md382", null ]
        ] ],
        [ "21.2 Performance Optimization", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md383", [
          [ "Database Query Optimization", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md384", null ],
          [ "Frontend Performance", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md385", null ],
          [ "Memory Management", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md386", null ]
        ] ],
        [ "21.3 Backup and Recovery", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md387", [
          [ "Database Backup", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md388", null ],
          [ "Recovery Procedure", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md389", null ]
        ] ]
      ] ],
      [ "22. API Reference", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md391", [
        [ "22.1 URL Routes", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md392", [
          [ "Authentication Routes", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md393", null ],
          [ "Dashboard and Main Views", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md394", null ],
          [ "CRUD Operations", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md395", null ],
          [ "Timetable Management", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md396", null ],
          [ "Leave Management", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md397", null ],
          [ "Messaging System", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md398", null ],
          [ "Bulk Operations", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md399", null ]
        ] ],
        [ "22.2 HTTP Status Codes", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md400", null ],
        [ "22.3 Form Data Parameters", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md401", [
          [ "Login Form", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md402", null ],
          [ "Department Form", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md403", null ],
          [ "Teacher Form", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md404", null ],
          [ "Course Form", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md405", null ],
          [ "Classroom Form", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md406", null ],
          [ "Timetable Entry Form", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md407", null ]
        ] ]
      ] ],
      [ "23. Performance Considerations", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md409", [
        [ "23.1 Database Performance", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md410", [
          [ "Indexing Strategy", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md411", null ],
          [ "Query Optimization", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md412", null ],
          [ "Connection Management", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md413", null ]
        ] ],
        [ "23.2 Application Performance", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md414", [
          [ "Caching Strategies", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md415", null ],
          [ "Memory Management", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md416", null ],
          [ "Response Time Optimization", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md417", null ]
        ] ],
        [ "23.3 Scalability Considerations", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md418", [
          [ "Data Volume Limits", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md419", null ],
          [ "Concurrent Users", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md420", null ],
          [ "Hardware Requirements", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md421", null ]
        ] ],
        [ "23.4 Monitoring and Profiling", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md422", [
          [ "Performance Monitoring", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md423", null ],
          [ "Database Query Logging", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md424", null ]
        ] ]
      ] ],
      [ "24. Security Analysis", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md426", [
        [ "24.1 Authentication Security", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md427", [
          [ "Password Storage", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md428", null ],
          [ "Session Management", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md429", null ]
        ] ],
        [ "24.2 Authorization Security", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md430", [
          [ "Role-Based Access Control", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md431", null ],
          [ "Input Validation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md432", null ]
        ] ],
        [ "24.3 Data Security", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md433", [
          [ "Database Security", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md434", null ],
          [ "File Upload Security", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md435", null ]
        ] ],
        [ "24.4 Network Security", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md436", [
          [ "HTTPS Recommendation", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md437", null ],
          [ "CORS Considerations", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md438", null ]
        ] ],
        [ "24.5 Security Best Practices", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md439", [
          [ "Input Sanitization", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md440", null ],
          [ "Error Handling", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md441", null ],
          [ "Audit Logging", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md442", null ]
        ] ]
      ] ],
      [ "25. Future Enhancements", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md444", [
        [ "25.1 Short-Term Enhancements (v1.1)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md445", [
          [ "Security Improvements", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md446", null ],
          [ "User Experience", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md447", null ],
          [ "Performance", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md448", null ]
        ] ],
        [ "25.2 Medium-Term Enhancements (v2.0)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md449", [
          [ "Database Migration", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md450", null ],
          [ "API Development", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md451", null ],
          [ "Mobile Responsiveness", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md452", null ],
          [ "Advanced Features", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md453", null ]
        ] ],
        [ "25.3 Long-Term Vision (v3.0)", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md454", [
          [ "AI-Enhanced Scheduling", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md455", null ],
          [ "Integration Capabilities", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md456", null ],
          [ "Advanced Modules", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md457", null ],
          [ "Enterprise Features", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md458", null ]
        ] ],
        [ "25.4 Implementation Roadmap", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md459", [
          [ "Phase 1 (3 months): Security &amp; Stability", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md460", null ],
          [ "Phase 2 (6 months): User Experience", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md461", null ],
          [ "Phase 3 (12 months): Enterprise Features", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md462", null ],
          [ "Phase 4 (18 months): AI Integration", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md463", null ]
        ] ]
      ] ],
      [ "26. Conclusion", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md465", [
        [ "Key Achievements", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md466", null ],
        [ "Technical Excellence", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md467", null ],
        [ "Educational Value", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md468", null ],
        [ "Future Potential", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md469", null ]
      ] ],
      [ "27. References", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md471", [
        [ "27.1 Documentation and Frameworks", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md472", null ],
        [ "27.2 Academic and Research Papers", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md473", null ],
        [ "27.3 Development Tools and Resources", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md474", null ],
        [ "27.4 Design and UI Resources", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md475", null ],
        [ "27.5 Security and Best Practices", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md476", null ]
      ] ],
      [ "28. Appendices", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md478", [
        [ "Appendix A: Requirements.txt", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md479", null ],
        [ "Appendix B: Database Schema SQL", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md480", null ],
        [ "Appendix C: PyInstaller Spec File", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md481", null ],
        [ "Appendix D: Sample Data for Testing", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md482", [
          [ "Sample Departments", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md483", null ],
          [ "Sample Teachers", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md484", null ],
          [ "Sample Courses", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md485", null ],
          [ "Sample Classrooms", "md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md486", null ]
        ] ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"md__t_i_m_e_t_a_b_l_e___d_o_c_u_m_e_n_t_a_t_i_o_n.html#autotoc_md277"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';