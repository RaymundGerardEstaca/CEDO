(Based strictly on the document content)
1. Introduction to Software Testing
1.1 Definition of Software Testing
Software Testing is the process of executing a program with the intent of finding faults before it is deployed. It is an essential phase in the Software Development Life Cycle (SDLC) and helps to ensure that the final product meets the expected requirements.

1.2 Purpose of Software Testing
Fault Detection – Identify and fix errors before users encounter them.
Requirement Validation – Ensure that the software meets user expectations.
Quality Assurance – Improve software reliability, functionality, and security.
Risk Reduction – Prevent failures that could lead to financial or operational losses.
1.3 Importance of Testing
Testing constitutes 40% of total software development efforts.
Defects must be detected early to prevent high post-release costs.
Inadequate testing leads to failures, such as software glitches in aviation, healthcare, and finance.
2. The Software Testing Process
2.1 Testing vs. Debugging
Aspect	Testing	Debugging
Purpose	Locate defects	Fix known defects
Method	Systematic execution with test cases	Code inspection and correction
Conducted By	Testers	Developers
Goal	Find as many issues as possible	Ensure identified issues are resolved
2.2 Testing Stages in the Software Development Life Cycle (SDLC)
Testing is integrated throughout the SDLC, from requirement analysis to maintenance.

Requirement Analysis Phase

Static Testing (reviews, walkthroughs, inspections).
Ensures Software Requirement Specification (SRS) aligns with user needs.
Design & Development Phase

Identifies defects in architecture and data flow.
Uses Static Testing Methods.
Implementation Phase

Dynamic Testing starts (code execution begins).
Involves Unit Testing, Integration Testing, and System Testing.
Deployment & Maintenance Phase

Conducts Regression Testing to ensure updates do not introduce new defects.
Maintenance Testing helps manage real-world bug fixes.
3. Software Testing Types and Functions
Software testing is divided into Static Testing and Dynamic Testing.

3.1 Static Testing (Without Code Execution)
Objective: Detect issues in documentation and design before coding begins.
Techniques:
Requirement Reviews – Validate SRS correctness.
Code Reviews – Inspect source code for errors.
Walkthroughs & Inspections – Peer analysis to find defects.
3.2 Dynamic Testing (With Code Execution)
Objective: Validate software functionality and performance in execution.
Categories:
Black-Box Testing – Tests software functionality without knowing the internal code.
White-Box Testing – Tests internal logic and structure of the program.
Gray-Box Testing – Combines Black-Box & White-Box Testing.
4. Software Testing Levels
4.1 Unit Testing
Tests individual components (functions, modules).
Helps identify logic errors in isolated units.
Typically automated.
4.2 Integration Testing
Verifies interaction between integrated modules.
Detects communication errors between units.
Methods:
Top-Down Testing – Starts with high-level modules.
Bottom-Up Testing – Begins with low-level components.
4.3 System Testing
Validates entire software functionality.
Ensures compliance with business & technical requirements.
Includes:
Performance Testing (speed & scalability).
Security Testing (protection against cyber threats).
4.4 Acceptance Testing
Conducted before software deployment.
Includes:
Alpha Testing – Performed by developers in a controlled environment.
Beta Testing – Conducted by end-users in real-world conditions.
5. Software Verification and Validation (V&V)
5.1 Definition of Verification and Validation
Term	Definition
Verification	Ensures software is developed according to specifications (Static Process).
Validation	Ensures software meets user needs and expectations (Dynamic Process).
5.2 Differences Between Verification and Validation
Feature	Verification	Validation
Question Answered	"Are we building the product right?"	"Are we building the right product?"
Process Type	Static (reviews, inspections)	Dynamic (execution-based tests)
Techniques	Code reviews, walkthroughs, STRs	Black-box, white-box, UAT
5.3 Detailed Explanation of Verification
Goal: Ensure software is built according to requirements.
Methods:
Requirement Reviews – Ensures functional correctness.
Design Reviews – Evaluates software architecture.
Code Reviews – Checks for logic errors.
5.4 Detailed Explanation of Validation
Goal: Ensure software satisfies business needs.
Methods:
Functional Testing – Verifies expected outputs.
User Acceptance Testing (UAT) – Confirms real-world usability.
6. Software Testing Life Cycle (STLC) and V&V
Verification and Validation (V&V) are integrated in each stage of STLC.

STLC Phase	Verification Activities	Validation Activities
Requirement Analysis	Requirement Reviews	Business Requirement Testing
Test Planning	Strategy & Documentation Review	None
Test Case Development	Reviewing Test Scenarios	Executing Test Cases
Test Execution	None	Running test cases & defect tracking
Test Closure	Reviewing documentation	Final validation before deployment
7. Key Principles of Software Testing
Early Testing Saves Cost – Testing should begin from the requirement phase.
Defect Clustering – Most defects are found in specific modules.
Exhaustive Testing is Impossible – Testing must be risk-based.
Testing Should Be Independent – Avoid developer bias.
Testing is Context-Dependent – Test methods vary by software type.
8. Limitations of Software Testing & V&V
100% bug-free software is impossible.
Exhaustive testing is impractical due to infinite scenarios.
Defects may still exist despite rigorous testing.
9. Conclusion
Software Testing ensures software is functional, reliable, and secure.
Verification confirms that the software meets design specifications.
Validation ensures the software satisfies end-user expectations.
An effective V&V strategy improves software success and cost efficiency.













Expanded Explanation of Software Testing Types, Levels, and V&V
3. Software Testing Types and Functions
Software testing is broadly categorized into Static Testing (without code execution) and Dynamic Testing (with code execution). These two testing approaches ensure that errors are detected early and that the software meets functional and technical requirements before deployment.

3.1 Static Testing (Without Code Execution)
Objective:
Static testing is performed before the software code is executed to identify defects in documentation, design, and source code structure. This ensures that errors are prevented rather than corrected later, reducing costs and increasing efficiency.

Key Characteristics of Static Testing:
Conducted without executing the program.
Used in early phases of development to detect defects at the design and documentation level.
Involves manual and automated techniques.
Helps in ensuring that the software requirements and design are correct before coding begins.
Techniques of Static Testing:
Requirement Reviews

Ensures the Software Requirement Specification (SRS) document is accurate, complete, and unambiguous.
Validates that the requirements are well-defined and meet the business objectives.
Detects missing, conflicting, or incorrect requirements before implementation.
Code Reviews

A structured process where developers manually inspect code for defects.
Ensures adherence to coding standards and improves software maintainability.
Finds logical errors, security vulnerabilities, and inefficient code structures.
Walkthroughs & Inspections

Walkthroughs:
Informal peer review where the author explains the document or code.
Helps team members understand the design, gather feedback, and identify errors.
Inspections:
A more formal process involving checklists, moderators, and defect recording.
Focuses on systematically identifying inconsistencies, errors, or missing functionalities.
Advantages of Static Testing:
Early defect detection reduces rework and development costs.
Enhances code readability and maintainability.
Ensures compliance with design and coding standards.
Reduces risk of major software failures during execution.
3.2 Dynamic Testing (With Code Execution)
Objective:
Dynamic testing involves executing the software code to evaluate its functionality, behavior, and performance under various conditions. It detects runtime errors, logical issues, and usability defects.

Key Characteristics of Dynamic Testing:
Conducted after code development.
Focuses on input-output validation and system behavior.
Ensures that software functions correctly under real-world conditions.
Divided into different testing types based on scope and level of access to code.
Categories of Dynamic Testing:
1. Black-Box Testing (Functional Testing)
Tests software functionality without knowledge of the internal code structure.
Focuses on verifying expected inputs and outputs.
Uses techniques like:
Equivalence Partitioning (Grouping similar inputs to minimize test cases).
Boundary Value Analysis (Testing at extreme input values).
Decision Table Testing (Checking multiple conditions and expected results).
2. White-Box Testing (Structural Testing)
Tests the internal logic and structure of the software.
Requires knowledge of code, algorithms, and control flow.
Uses techniques like:
Statement Coverage (Ensuring all code statements are executed).
Branch Coverage (Checking all possible execution paths).
Loop Testing (Validating behavior of iterative constructs).
3. Gray-Box Testing (Hybrid Testing)
Combination of Black-Box and White-Box Testing.
The tester has partial knowledge of internal code but tests external behavior.
Commonly used for integration testing and security testing.
Advantages of Dynamic Testing:
Detects runtime issues, performance bottlenecks, and usability problems.
Ensures that the software performs correctly under various conditions.
Helps in identifying real-world failures that may not be apparent in static testing.
4. Software Testing Levels
Software testing is performed at multiple levels to ensure that each component, integration, and the overall system work as expected.

4.1 Unit Testing
Tests individual software components, such as functions, classes, or modules.
Ensures that each unit works correctly in isolation.
Typically automated using frameworks like JUnit (Java), PyTest (Python), NUnit (.NET).
Helps detect syntax errors, logic flaws, and data manipulation errors at an early stage.
Example:
Testing a login function to ensure it correctly validates username & password.

4.2 Integration Testing
Validates interactions between integrated components.
Ensures data flows correctly between modules.
Methods of Integration Testing:
Top-Down Testing

Begins with high-level modules and progressively integrates lower-level components.
Uses stubs to simulate missing lower modules.
Bottom-Up Testing

Starts with low-level components and integrates higher-level modules.
Uses drivers to simulate higher-level modules.
4.3 System Testing
Tests the entire system for compliance with business requirements.
Includes:
Performance Testing – Evaluates software speed, scalability, and resource consumption.
Security Testing – Ensures protection against unauthorized access, data breaches, and cyber threats.
4.4 Acceptance Testing
Conducted before final deployment to verify usability and correctness.
Includes:
Alpha Testing – Internal testing conducted by developers and QA teams.
Beta Testing – External testing performed by end-users in real-world conditions.
5. Software Verification and Validation (V&V)
5.1 Definition:
Term	Definition
Verification	Ensures software is developed correctly according to specifications.
Validation	Ensures software meets business and user needs.
5.2 Differences Between Verification and Validation
Aspect	Verification	Validation
Question Answered	"Are we building the product right?"	"Are we building the right product?"
Process	Static (reviews, inspections)	Dynamic (execution-based tests)
Techniques	Code reviews, walkthroughs, STRs	Black-box, white-box, UAT
5.3 Verification Methods:
Requirement Reviews – Ensures functional correctness before development.
Design Reviews – Evaluates software architecture and flow.
Code Reviews – Checks source code for logic errors.
5.4 Validation Methods:
Functional Testing – Tests if software produces expected results.
User Acceptance Testing (UAT) – Ensures usability and real-world feasibility.
6. Software Testing Life Cycle (STLC) and V&V
Verification and Validation (V&V) are applied in each stage of STLC to ensure software meets expectations.

STLC Phase	Verification Activities	Validation Activities
Requirement Analysis	Requirement Reviews	Business Requirement Testing
Test Planning	Documentation Review	None
Test Case Development	Test Scenario Review	Executing Test Cases
Test Execution	None	Running test cases






Comprehensive Study Notes: CMM, TMMi®, and TMMi® in Agile
These notes cover the Capability Maturity Model (CMM) for Software, the Test Maturity Model integration (TMMi®), and the application of TMMi® in Agile environments, based on the provided documents.

1. Introduction to Process Improvement Models
Process improvement models provide frameworks for organizations to enhance their processes, leading to better product quality, predictability, and efficiency.

1.1. Capability Maturity Model (CMM) for Software (Version 1.1)
The Capability Maturity Model℠ for Software (CMM) was developed by the Software Engineering Institute (SEI) to help organizations improve their software process.

1.1.1. Definition and Purpose
Definition: The CMM is a framework describing an evolutionary path from ad hoc, chaotic processes to mature, disciplined software processes.

Purpose: To guide software organizations in selecting process improvement strategies by determining current process maturity and identifying the few issues most critical to software quality and process improvement. It provides a roadmap for continuous process improvement.

1.1.2. The Five Maturity Levels
Each maturity level is a well-defined evolutionary plateau toward achieving a mature software process, laying a foundation for continuous improvement.

Level 1: Initial

Behavior: Software process is ad hoc, occasionally chaotic. Few processes are defined. Success depends on individual effort and heroics. Schedules, budgets, functionality, and product quality are generally unpredictable.

Process Capability: Unpredictable.

Level 2: Repeatable

Behavior: Basic project management processes are established to track cost, schedule, and functionality. Policies for managing projects and procedures to implement them are established. Realistic commitments are based on experience with similar projects. Software requirements and work products are baselined and controlled.

Process Capability: Disciplined; earlier successes on similar projects can be repeated.

Level 3: Defined

Behavior: The software process for both management and engineering activities is documented, standardized, and integrated into an organization's standard software process. All projects use an approved, tailored version of this standard process (project's defined software process). An organization-wide training program is implemented. A group (e.g., Software Engineering Process Group - SEPG) is responsible for the organization's software process activities.

Process Capability: Standard and consistent; software engineering and management activities are stable and repeatable.

Level 4: Managed

Behavior: Detailed measures of the software process and product quality are collected. Both software process and products are quantitatively understood and controlled. An organization-wide software process database is used. Meaningful variations in process performance can be distinguished from random variation.

Process Capability: Predictable; the process operates within measurable limits, allowing prediction of trends in process and product quality.

Level 5: Optimizing

Behavior: The entire organization is focused on continuous process improvement. Weaknesses are identified and processes strengthened proactively to prevent defects. Data on process effectiveness is used for cost-benefit analyses of new technologies and changes. Innovations are identified and transferred throughout the organization. Defect causes are analyzed to prevent recurrence.

Process Capability: Continuously improving; striving to improve the range of process capability through incremental advancements and innovations.

1.1.3. Key Process Areas (KPAs) per Maturity Level
KPAs identify a cluster of related activities that, when performed collectively, achieve a set of goals considered important for enhancing process capability.

Level 2: Repeatable

Requirements Management

Software Project Planning

Software Project Tracking and Oversight

Software Subcontract Management

Software Quality Assurance

Software Configuration Management

Level 3: Defined

Organization Process Focus

Organization Process Definition

Training Program

Integrated Software Management

Software Product Engineering

Intergroup Coordination

Peer Reviews

Level 4: Managed

Quantitative Process Management

Software Quality Management

Level 5: Optimizing

Defect Prevention

Technology Change Management

Process Change Management

1.1.4. Structure of the CMM
Maturity Levels: Indicate process capability.

Key Process Areas (KPAs): Reside at a single maturity level. All goals of a KPA must be achieved.

Goals: Summarize key practices; signify scope, boundaries, and intent of each KPA.

Common Features: Attributes indicating effective, repeatable, and lasting implementation of a KPA.

Commitment to Perform: Organizational policies, senior management sponsorship.

Ability to Perform: Resources, organizational structures, training.

Activities Performed: Plans, procedures, performing work, tracking, corrective actions.

Measurement and Analysis: Measuring the process, analyzing measurements.

Verifying Implementation: Reviews and audits by management and software quality assurance.

Key Practices: Describe infrastructure and activities ("what" is to be done) for effective implementation and institutionalization of a KPA.

1.1.5. Skipping Maturity Levels
Skipping levels is counterproductive. Each level forms a necessary foundation for the next. Processes implemented without the proper foundation may fail under stress and provide no basis for future improvement.

1.2. Test Maturity Model integration (TMMi®)
The TMMi® framework was developed by the TMMi Foundation as a guideline and reference framework for test process improvement.

1.2.1. Definition, Purpose, and Scope
Definition (TMMi®): A detailed model for test process improvement, positioned as complementary to the Capability Maturity Model Integration (CMMI®). It uses a staged architecture with maturity levels, process areas, goals, and practices.

Testing Definition (ISTQB®): "The process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preparation and evaluation of software products and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects."

Purpose: To support organizations in evaluating and improving their test processes, evolving from chaotic to mature, controlled processes with defect prevention as a main objective.

Scope:

Software and System Engineering.

All test levels (e.g., component test, integration test, system test, acceptance test), including static testing.

Addresses all four cornerstones for structured testing: lifecycle, techniques, infrastructure, and organization.

1.2.2. Relationship with CMMI®
TMMi® is positioned as a complementary model to CMMI®.

Many TMMi® levels need specific support from process areas at corresponding CMMI® levels or lower CMMI® levels.

Process areas elaborated in CMMI® (e.g., Configuration Management, Project Planning, Measurement and Analysis, Process and Product Quality Assurance) are generally not repeated in TMMi® but are referenced.

The CMMI® process areas Verification and Validation are complemented by TMMi® PAs, which provide more detailed specifications for establishing defined verification and validation processes.

1.2.3. The Five TMMi® Maturity Levels
Each level represents an evolutionary path to test process improvement.

Level 1: Initial

Characteristics: Testing is chaotic, undefined, often part of debugging. Ad hoc tests after coding. Objective: show software runs without major failures. Lack of resources, tools, and well-educated staff. No defined Process Areas (PAs).

Level 2: Managed

Characteristics: Testing becomes a managed process, separated from debugging. A company-wide or program-wide test strategy and test plans are established. Test approach based on product risk assessment. Testing is monitored and controlled. Test design techniques are applied. Multi-level testing is performed. Main objective: verify the product satisfies specified requirements. Testing may still start late in the development lifecycle.

Level 3: Defined

Characteristics: Testing is integrated into the development lifecycle and milestones. Test planning occurs early (e.g., requirements phase) and is documented in a master test plan. Organization's set of standard test processes is established and improved. A test organization and a specific test training program exist; testing is a profession. Formal review program implemented. Non-functional testing is included.

Level 4: Measured

Characteristics: Testing is a thoroughly defined, well-founded, and measurable process. An organization-wide test measurement program evaluates test process quality, productivity, and monitors improvements. Product quality is quantitatively understood and managed. Reviews are used to measure product quality early and control quality gates. A coordinated test approach between peer reviews (static testing) and dynamic testing is established.

Level 5: Optimization

Characteristics: Continual improvement of processes based on quantitative understanding of statistically controlled processes. Testing methods and techniques are optimized. Focus on defect prevention. A permanent Test Process Group (TPG) is formally established. Statistical sampling, confidence levels, and trustworthiness drive the test process. Technology transfer and re-use of test assets are supported.

1.2.4. Process Areas (PAs) per TMMi® Maturity Level
Level 2: Managed

PA 2.1 Test Policy and Strategy

PA 2.2 Test Planning

PA 2.3 Test Monitoring and Control

PA 2.4 Test Design and Execution

PA 2.5 Test Environment

Level 3: Defined

PA 3.1 Test Organization

PA 3.2 Test Training Program

PA 3.3 Test Lifecycle and Integration

PA 3.4 Non-functional Testing

PA 3.5 Peer Reviews

Level 4: Measured

PA 4.1 Test Measurement

PA 4.2 Product Quality Evaluation

PA 4.3 Advanced Reviews

Level 5: Optimization

PA 5.1 Defect Prevention

PA 5.2 Quality Control

PA 5.3 Test Process Optimization

1.2.5. Structure of the TMMi®
Components:

Required Components: Describe what an organization must achieve.

Specific Goals (SGs): Unique characteristics to satisfy a PA.

Generic Goals (GGs): Characteristics to institutionalize processes implementing a PA.

Expected Components: Describe typical implementations to achieve required components.

Specific Practices (SPs): Activities important for achieving an SG.

Generic Practices (GPs): Activities important for achieving a GG.

Informative Components: Provide guidance and details.

Sub-practices, Example Work Products, Notes, Examples, References, Generic Practice Elaborations.

Generic Goals (GGs) and Generic Practices (GPs):

GG 2: Institutionalize a Managed Process: Applied to PAs at ML2. Involves:

GP 2.1 Establish an organizational policy

GP 2.2 Plan the process

GP 2.3 Provide resources

GP 2.4 Assign responsibilities

GP 2.5 Train people

GP 2.6 Manage configurations

GP 2.7 Identify and involve relevant stakeholders

GP 2.8 Monitor and control the process

GP 2.9 Objectively evaluate adherence

GP 2.10 Review status with higher level management

GG 3: Institutionalize a Defined Process: Applied to PAs at ML2 and ML3 when targeting ML3 or higher. Involves:

GP 3.1 Establish a defined process

GP 3.2 Collect improvement information

1.2.6. TMMi® Assessments
Organizations can benchmark their test process improvement.

TMMi Assessment Method Application Requirements (TAMAR) document describes requirements for TMMi® assessments, based on ISO 15504.

Assessment Types:

Informal Assessments: Indicative, flexible, less corroboration of evidence. Cannot lead to formal rating or certification.

Formal Assessments: Must conform to all TAMAR requirements, led by a qualified Lead Assessor. Can lead to formal maturity rating or certification.

Assessment process includes: Planning and Preparation, Data Collection, Data Analysis and Reporting, Assessment Closure.

A Data Submission Report (DSR) is required for all assessments submitted to the TMMi Foundation.

1.3. TMMi® in the Agile World
This section details how TMMi® principles and practices can be adapted and applied within Agile software development contexts.

1.3.1. General Principles
TMMi® and Agile are not mutually exclusive; they can co-exist and offer substantial benefits when integrated.

The intent of TMMi® practices is key; Agile organizations may achieve this intent through "alternative practices."

Focus on business value and lean principles when implementing TMMi® in Agile.

Agile mindset can help prune unnecessary non-value-added processes from traditional TMMi® interpretations.

Moving to Agile can be an initiative to lean existing TMMi®-based processes.

Improvements in Agile often occur via small, empowered teams.

Agile organizations should critically choose TMMi® Levels 4 and 5 practices that offer clear added value.

1.3.2. Test Process Improvement in an Agile Context
Improvement Cycle Frequency: Frequent feedback loops (e.g., end-of-sprint retrospectives) for small, frequent improvements.

Organizational Aspects: More emphasis on self-managing teams rather than a central test process group.

Scope of Improvements: Often project-specific, which can risk sub-optimization or neglect of broader organizational issues (e.g., complex non-functional testing).

Source of Improvements: Ideas can come from any team member, emphasizing team-based evaluation and prioritization.

Level of (Test) Documentation: Less detailed. "Formalizing informality" strategy: document effective informal processes lightly. More reliance on interviews than artifacts during assessments.

Training: Increased need for training due to lightweight process documentation.

Improvement Methods: Focus on analytical methods (e.g., cause-effect diagrams) for root-cause analysis.

1.3.3. TMMi® Level 2: Managed in Agile
PA 2.1 Test Policy and Strategy

SG1 Establish a Test Policy: Fully applicable. Policy should align with business goals and Agile values. Can be part of a broader development policy.

SG2 Establish a Test Strategy: Vital in Agile. A lean, high-level document defining testing within and outside Agile teams (for hybrid models). Confirmed or derived during release planning.

SG3 Establish Test Performance Indicators: Fully applicable. Indicators might be team/system-focused (e.g., escaped defects, velocity, customer satisfaction, test automation percentage) rather than purely test-specific.

PA 2.2 Test Planning (Focuses on release planning and iteration planning)

SG1 Perform Risk Assessment: Applicable. High-level product risk assessment at release planning; detailed iteration-level risk assessment (e.g., using risk poker) based on user stories.

SG2 Establish a Test Approach: Defined to mitigate risks. Iteration-level approach covers reviewing user stories, acceptance criteria, effort proportional to risk, test technique selection. Regression risk managed (e.g., Test Automation Pyramid: Unit, Service, UI tests).

SP2.3 Define entry criteria: Likely less/non-relevant for activities within an Agile team.

SP2.4 Define exit criteria: Integrated into the Definition of Done (DoD) at iteration and release levels (covering test coverage, product quality).

SP2.5 Define suspension and resumption criteria: Likely less/non-relevant; issues handled via daily stand-ups.

SG3 Establish Test Estimates: Detailed estimates during iteration planning; high-level during release planning. Team-based estimation (e.g., Planning Poker, story points, ideal man-days). Testing activities must be included.

SP3.2 Define test lifecycle: Likely less/non-relevant as tasks are typically detailed enough.

SG4 Develop a Test Plan: "Planning" is key, not necessarily a formal "plan" document. Planning outcomes reflected on task boards, backlogs, wikis, or mind-maps. Schedules are ordered backlogs. Staffing is part of team formation. Project risks managed via impediment logs.

SG5 Obtain commitment to the Test Plan: Implicitly achieved through team-based planning.

SP5.2 Reconcile work and resource levels: Typically not relevant as Agile teams usually have fixed resources for an iteration.

PA 2.3 Test Monitoring and Control (Continuous adjustment of plans based on progress and quality)

SG1 Monitor Test Progress Against Plan: Monitored via Agile task boards, burndown charts, daily stand-up meetings. DoD serves as exit criteria. Iteration reviews include demos.

SG2 Monitor Product Quality Against Plan and Expectations: Regular review of product risks. Defect-based metrics (test pass/fail rates, defect discovery). DoD includes quality criteria. Daily stand-ups and iteration reviews are key.

Monitoring entry, suspension, and resumption criteria (SP2.3, SP2.5): Likely less/non-relevant.

SG3 Manage Corrective Actions to Closure: Issues (deviations, blockers) identified in daily stand-ups trigger team discussions. Corrective actions decided with Product Owner, managed as tasks/backlog items. Scrum Master facilitates impediment removal. Retrospectives also drive corrective actions.

PA 2.4 Test Design and Execution (Flexibility, iterative and parallel activities, less documentation)

SG1 Perform Test Analysis and Design using Test Design Techniques: Test analysis is implicit in collaborative user story development (defining acceptance criteria). Test conditions derived from acceptance criteria or documented as test ideas in charters (exploratory testing). Test-first approaches (TDD, BDD, ATDD) are common. Lightweight documentation. Horizontal traceability from requirements to tests.

SG2 Perform Test Implementation: Minimized test procedures. Focus on developing automated (regression) test scripts. Test data created promptly.

SP2.3 Specify intake test procedure: Likely irrelevant within an Agile team. May apply if testing is done by an external group.

SP2.4 Develop test execution schedule: Likely less/non-relevant; execution order guided by user story priorities and managed via task board.

SG3 Perform Test Execution: Often no detailed test procedures/logs. High automation, especially for regression. Continuous Integration (CI) is key. Incident logging practices vary (some defects fixed immediately and not logged). Criteria for logging incidents are important. Log data to verify "done" status.

SP3.1 Perform intake test: Likely less/non-relevant within a pure Agile team.

SG4 Manage Test Incidents to Closure: Simplified process. Incidents visualized on task boards. Defects fixed in current iteration if possible. Deferred defects become backlog items prioritized by Product Owner. Team, with Product Owner, acts as Configuration Control Board (CCB).

PA 2.5 Test Environment (Must be stable, available, and support short iterations)

SG1 Develop Test Environment Requirements: Specification performed early, possibly in an initial iteration (Iteration 0).

SG2 Perform Test Environment Implementation: Can start in Iteration 0. Automation, virtualization, and cloud services can accelerate setup.

SG3 Manage and Control Test Environments: If managed by Agile team, tasks are part of their process (planning, task board). All SGs/SPs are essentially applicable, but timing and implementation details adapt to Agile.

1.3.4. TMMi® Level 3: Defined in Agile
PA 3.1 Test Organization

SG1 Establish a Test Organization: May take the form of a Test Competence Center or a Test Guild (an informal, self-managing group of testers from various Agile teams). Testers are part of Agile teams but may belong to such a guild for knowledge sharing, process improvement, etc. Independence is balanced with team integration.

SG2 Establish Test Functions for Test Specialists: Testers in Agile are often T-shaped professionals (deep testing skills + broader skills in development, automation, requirements, and soft skills).

SG3 Establish Test Career Paths: Emphasis on horizontal growth (e.g., junior to senior tester, test coach) rather than traditional vertical paths (e.g., to test manager, as many management tasks are absorbed by the team or Scrum Master).

SG4 Determine, Plan and Implement Test Process Improvements: Team-level improvements largely handled by retrospectives. The test organization/guild can address cross-team improvements, share lessons, and tackle larger systemic issues.

SG5 Deploy the Organizational Test Process and Incorporate Lessons Learned: Test organization/guild facilitates deployment of standard assets (if any) and incorporates lessons learned from Agile teams into organizational processes.

PA 3.2 Test Training Program (Crucial due to lightweight processes; applies to the whole team)

SG1 Establish an Organizational Test Training Capability: Strategic needs include Agile testing concepts (Manifesto, Scrum, XP, TDD, BDD, ATDD), exploratory testing, test automation, planning/estimation techniques (Planning Poker, risk poker). Informal training (mentoring, coaching, pairing) is important.

SG2 Provide Necessary Test Training: Time for training must be allocated. Mentoring is a shared responsibility. Scrum Master coaches Scrum practices.

PA 3.3 Test Lifecycle and Integration

SG1 Establish Organizational Test Process Assets: Processes are lightweight. Templates (e.g., for test charters, test session sheets) are useful. A "tailoring up" approach (starting with a minimum set and adding as needed) is more Agile-friendly than "tailor down." A wiki can serve as a process asset library.

SG2 Integrate the Test Lifecycle Models with the Development Models: In well-functioning Agile, development and testing are inherently integrated. If iterations resemble mini-V-models (testing late), this SG highlights an improvement area.

SG3 Establish a Master Test Plan: May be relevant for larger projects, scaled Agile frameworks, or hybrid models where some testing occurs outside Agile teams. If all testing is within teams, release and iteration planning typically cover these aspects.

PA 3.4 Non-Functional Testing (NFT) (Applicable; approach adapted for short iterations)

SG1 Perform a Non-Functional Product Risk Assessment: Extends general risk assessment to include non-functional aspects (security, performance, usability, etc., using models like ISO 25010).

SG2 Establish a Non-Functional Test Approach: Defined at release and iteration levels. Non-functional requirements and acceptance criteria in user stories. NFT exit criteria included in DoD. Early and continuous NFT is encouraged.

SG3 Perform Non-functional Test Analysis and Design: Similar to functional testing, based on non-functional user stories and acceptance criteria.

SG4 Perform Non-functional Test Implementation: Preparation depends on the NFT type (e.g., exploratory for usability, more setup for performance). Test data creation is key.

SG5 Perform Non-functional Test Execution: Mix of documented procedures (less common) and exploratory testing. Automation for regression NFT. Incident management similar to functional testing.

PA 3.5 Peer Reviews

SG1 Establish a Peer Review Approach: Achieved through continuous, less formal reviews: backlog refinement/grooming sessions, daily team discussions, pair programming (XP), and demonstrations during iteration reviews. Formal reviews (e.g., inspections) for high-risk/complexity items.

SG2 Perform Peer Reviews: Testers participate actively in refining user stories and defining acceptance criteria. Demos to stakeholders are crucial.

Entry criteria: Typically relevant only for formal reviews, less so for informal Agile reviews.

Exit criteria: Applicable (e.g., INVEST for user stories: Independent, Negotiable, Valuable, Estimable, Small, Testable).

SP2.3 Analyze peer review data: Often less relevant for informal reviews unless there's a clear need and value. Some basic data might be collected for GP 2.8.

1.3.5. TMMi® Level 4: Measured in Agile
Organizations should critically choose practices that add value. It's possible to selectively apply Level 4 and 5 practices earlier if they address key business objectives.

PA 4.1 Test Measurement

SG1 Align Test Measurement and Analysis Activities: TMMi® helps align measures with business/information needs. Goal-Question-Metric (GQM) is a useful method. Focus on a lean set of core metrics. Metrics might be team/system-wide (e.g., defect cycle time, defect spill-over, automated test coverage).

SG2 Provide Test Measurement Result: Fully applicable. Data collection, analysis, and communication should be lean.

PA 4.2 Product Quality Evaluation

SG1 Measurable Project Goals for Product Quality and their Priorities are Established: Quantitative product quality goals can be defined in the DoD, or as features/epics/user stories with measurable acceptance criteria. ISO 25010 can guide quality attribute definition.

SG2 Actual Progress towards Achieving the Project's Product Quality Goals is Quantified and Managed: Progress tracked using mechanisms from PA 2.3 (Test Monitoring and Control), supported by the Test Measurement PA.

PA 4.3 Advanced Reviews

SG1 Coordinate the Peer Review Approach with Dynamic Test Approach: Agile teams are expected to have an integrated approach to static and dynamic testing.

SG2 Measure Product Quality Early in the Lifecycle by Means of Peer Reviews: Shift from peer reviews for defect detection to measuring product quality. "Agile inspection" (Tom Gilb) involves sampling, measurement, and defect prevention. Using INVEST criteria for user stories as a Definition of Ready (DoR) and measuring against them.

SG3 Adjust the Test Approach Based on Review Results Early in the Lifecycle: Using early review results to refine product risks and the test approach aligns well with Agile principles of adaptation.

1.3.6. TMMi® Level 5: Optimization in Agile
Level 5 goals and practices are generally high-level quality management practices, largely independent of the lifecycle model. Agile organizations will approach them with a lean mindset.

PA 5.1 Defect Prevention (Agile already emphasizes this through retrospectives)

SG1 Determine Common Causes of Defects: This PA extends team-level defect prevention (from retrospectives) to an organizational (cross-team, cross-product) level, often coordinated by a Test Process Group (TPG) or test guild. Analytical methods (cause-effect diagrams, 5 Whys) are common in Agile.

SG2 Prioritize and Define Actions to Systematically Eliminate Common Causes of Defects: Solutions and improvement proposals should fit the Agile way of working (e.g., as backlog items). Teams should be involved in prioritization. Deployment of improvements is often more voluntary/offered to self-managing teams.

PA 5.2 Quality Control

SG1 Establish a Statistically Controlled Test Process: Involves selecting critical subprocesses for statistical control. Agile's short iterations and frequent feedback facilitate monitoring process performance.

SG2 Testing is Performed using Statistical Methods: Product quality control using operational profiles [Musa] and usage models to make statistically valid inferences from test samples. This lean, feedback-driven approach fits Agile but requires significant maturity and data. Confidence levels and trustworthiness can be used as DoD criteria.

PA 5.3 Test Process Optimization (Continuous improvement of testing processes and technologies)

SG1 Select Test Process Improvements: Test improvement proposals are collected (from retrospectives, guilds, defect prevention activities), analyzed for cost/benefit, piloted, and then selected for broader deployment.

SG2 New Testing Technologies are Evaluated to Determine their Impact on the Testing Process: The TPG or test guild proactively identifies, evaluates (via pilots), and selects new testing technologies (tools, methods).

SG3 Deploy Test Improvements: Improvements and new technologies are deployed across Agile teams, respecting team autonomy. Benefits are measured.

SG4 Establish Re-Use of High Quality Test Assets: High-quality test assets (process components, testware) are identified, selected, and made available in a central repository (e.g., test process asset library) for re-use.

1.3.7. Overview of TMMi® Specific Practices Applicability in Agile
Some TMMi® Specific Practices (SPs) are identified as "likely less/non-relevant" in a typical Agile context, or their intent is achieved through alternative Agile practices.

TMMi® Level 2 Managed:

PA 2.2 Test Planning:

SP2.3 Define entry criteria (Likely less/non-relevant)

SP2.5 Define suspension and resumption criteria (Likely less/non-relevant)

SP3.2 Define test lifecycle (Likely less/non-relevant)

SP5.2 Reconcile work and resource levels (Likely less/non-relevant)

PA 2.3 Test Monitoring and Control:

SP2.3 Monitor entry criteria (Likely less/non-relevant)

SP2.5 Monitor suspension and resumption criteria (Likely less/non-relevant)

PA 2.4 Test Design and Execution:

SP2.3 Specify intake test procedure (Likely less/non-relevant)

SP2.4 Develop test execution schedule (Likely less/non-relevant)

SP3.1 Perform Intake Test (Likely less/non-relevant)

TMMi® Level 3 Defined:

PA 3.5 Peer Reviews:

SP2.3 Analyze peer review data (Likely less/non-relevant for informal reviews)

TMMi® Level 4 Measured & Level 5 Optimization:

All TMMi® Level 4 and Level 5 process areas, specific goals, and specific practices are considered applicable in an Agile context, though their implementation will be adapted to Agile principles (lean, team-based, iterative).




