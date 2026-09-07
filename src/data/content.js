export const profile = {
  name: 'Rajkumar Rajan',
  title: 'Solution Architect — Siemens Teamcenter & AI-Enabled PLM',
  tagline:
    '14 years architecting and deploying Siemens Teamcenter for aerospace, automotive, and manufacturing — now building LLM-powered tools that automate real PLM and manufacturing workflows.',
  location: 'Bay Area, CA',
  email: 'rajkumars.emailid@gmail.com',
  links: {
    github: 'https://github.com/rajkumarsemailid-sudo',
    linkedin: 'https://linkedin.com/in/rajkumar-rajan-8233987b',
    resume: `${import.meta.env.BASE_URL}Rajkumar_Rajan_Resume.pdf`,
  },
}

export const skillGroups = [
  {
    title: 'Teamcenter & PLM',
    skills: ['Siemens Teamcenter', 'BMIDE', 'ITK', 'Active Workspace', 'Workflow Designer', 'BOM / Effectivity', 'Easy Plan', 'TcRA', 'Access Manager'],
  },
  {
    title: 'AI & Automation',
    skills: ['LLM-Powered Applications', 'AI-Enabled PLM Processes', 'AI-Driven Test Automation', 'Intelligent CI/CD', 'Claude Code'],
  },
  {
    title: 'Integrations',
    skills: ['CAD (NX, CATIA, Solid Edge, SolidWorks)', 'ERP (D365)', 'MES (OpCenter)', 'SOA (SOAP / REST)', 'Data Migration'],
  },
  {
    title: 'Engineering & Delivery',
    skills: ['Java', 'C++', 'C#.NET', 'Agile / DevOps', 'Change Management', 'AS9100D / QMS'],
  },
]

export const clients = [
  { name: 'Ford', logo: `${import.meta.env.BASE_URL}logos/ford.png` },
  { name: 'General Electric', logo: `${import.meta.env.BASE_URL}logos/general-electric.png` },
  { name: 'Emerson Branson', logo: `${import.meta.env.BASE_URL}logos/emerson-branson.png` },
  { name: 'Velan', logo: `${import.meta.env.BASE_URL}logos/velan.png` },
  { name: 'Hatch', logo: `${import.meta.env.BASE_URL}logos/hatch.png` },
  { name: 'Nortrak', logo: `${import.meta.env.BASE_URL}logos/nortrak.png` },
  { name: 'Leggett & Platt', logo: `${import.meta.env.BASE_URL}logos/leggett-platt.png` },
]

export const experience = [
  {
    client: 'Wisk Aero',
    title: 'PLM Agentic Platform',
    objective:
      'Manage Teamcenter configurations, solutions, and support for an eVTOL aircraft manufacturer, and build an agentic PLM platform for better user support.',
    scope: [
      'Managed the end-to-end PLM solution, resolving complexities across the program.',
      'Owned the EBOM -> MBOM -> SBOM digital thread, keeping design, manufacturing, and service structures in sync.',
      'Supported multiple vendors implementing PLM solutions.',
      'Developed the Agentic PLM platform (Cosmos) for better user self-service.',
      'Automated work-instruction generation for composite fabrication.',
    ],
    stack: ['Teamcenter', 'NX', 'Java', 'ITK', 'Python', 'GitHub', 'AIG', 'BOM Management'],
    achievements: [
      'Reduced support time by 50% with AI automation.',
      'Automated Teamcenter validation to reduce sprint cycle time.',
      'Coordinated and delivered solution-implementation support across vendors.',
      'Led supplier collaboration, integrations, and manufacturing solution rollouts.',
    ],
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/experience/wisk-evtol.jpg`,
        caption: "Wisk Aero's autonomous eVTOL air taxi -- the production program this PLM work supports.",
      },
    ],
  },
  {
    client: 'Bombardier',
    logo: `${import.meta.env.BASE_URL}logos/bombardier.png`,
    title: 'Aerospace Data Migration',
    objective: 'Migrate Enovia and CATIA V5 data to a unified Teamcenter platform.',
    scope: [
      'Managed the end-to-end data migration program, resolving complexities along the way.',
      'Migrated Parts, Products, Black Boxes, Catalogs, and metadata.',
      'Developed automated validation utilities and bulk migration scripts.',
      'Led a 5-member migration team, ensuring zero data loss.',
    ],
    stack: ['Teamcenter', 'CATIA V5', 'TcIC', 'Oracle', 'Java', 'ITK', 'Python', 'GitHub'],
    achievements: [
      'Reduced migration time by 30% with automation and an optimized architecture.',
      'Achieved 100% data validation and traceability.',
      'Delivered comprehensive migration reports for audit compliance.',
    ],
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/experience/bombardier-global-7500.jpg`,
        caption: 'Bombardier Global 7500 -- one of the business-jet programs whose engineering data was migrated.',
      },
    ],
  },
  {
    client: 'General Dynamics Land Systems – Canada',
    logo: `${import.meta.env.BASE_URL}logos/gdls.png`,
    title: 'Teamcenter ↔ Opcenter Integration',
    objective: 'Integrate Teamcenter Manufacturing with Opcenter Discrete via AIG.',
    scope: [
      'Implemented Teamcenter Manufacturing solutions for MOM (Manufacturing Operations Management).',
      'Automated BOP transfer, operation-part transfers, and accountability checks.',
      'Implemented impact analysis and data validation automation.',
      'Created custom workflow handlers for ERP ↔ MES transactions.',
    ],
    stack: ['Teamcenter Manufacturing', 'Opcenter Execution Core', 'AIG', 'Java', 'ITK'],
    achievements: [
      'Reduced manual effort by 50%.',
      'Improved synchronization across PLM → MES → ERP data streams.',
      'Enabled a seamless digital thread from design to production.',
    ],
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/experience/gdls-vehicle.jpg`,
        caption: 'A GDLS armored vehicle platform -- the manufacturing program behind this Teamcenter-Opcenter integration.',
      },
    ],
  },
  {
    client: 'Nova Bus',
    logo: `${import.meta.env.BASE_URL}logos/novabus.png`,
    title: 'Teamcenter Manufacturing Deployment',
    objective:
      'Define and implement Teamcenter Manufacturing solutions as Solution Architect, across production and non-production environments.',
    scope: [
      'Managed configurations and deployments across production and non-production environments.',
      'Implemented key Teamcenter Manufacturing modules: MPP, Easy Plan, Multi-BOM Manager, Process Planner, Work Instructions, and Manufacturing Change Process.',
      'Developed automation utilities to reduce manual effort, e.g. automated EBOM-MBOM link creation.',
      'Provided governance in change control, source control, and release management.',
    ],
    stack: ['Teamcenter Manufacturing', 'Easy Plan', 'Multi-BOM Manager', 'Deployment Center', 'TEM'],
    achievements: [
      'Simplified deployment via Deployment Center and TEM.',
      'Delivered consistent PLM behavior across engineering and manufacturing.',
    ],
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/experience/novabus-electric-bus.jpg`,
        caption: 'A Nova Bus battery-electric transit bus -- one of the manufacturing lines running on this Teamcenter Manufacturing deployment.',
      },
    ],
  },
  {
    client: 'Manac & L3Harris',
    logo: `${import.meta.env.BASE_URL}logos/manac.png`,
    secondaryLogo: `${import.meta.env.BASE_URL}logos/l3harris.png`,
    title: 'Teamcenter Upgrades',
    objective:
      'Lead Teamcenter upgrade activities, ensuring configuration and customization compatibility across environments.',
    scope: [
      'Upgraded and validated Workflows, Stylesheets, Access Rules, and BMIDE objects.',
      'Modernized Teamcenter Manufacturing modules to align with new business processes.',
      'Upgraded solutions for automotive supplier processes and Teamcenter Engineering to maintain data continuity.',
      'Ensured seamless ERP-PLM data integration through custom code enhancements.',
    ],
    stack: ['Teamcenter', 'BMIDE', 'Workflow Designer', 'Access Manager'],
    achievements: [
      'Achieved 100% production uptime post-upgrade.',
      'Delivered consistent PLM behavior across engineering and manufacturing.',
    ],
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/experience/manac-trailer.jpg`,
        caption: "A Manac flatbed trailer -- the automotive supplier line upgraded as part of this program.",
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/experience/l3harris-drone.jpg`,
        caption: 'An L3Harris unmanned aircraft system -- the Teamcenter Engineering environment upgraded for this defense program.',
      },
    ],
  },
]

// Replace videoId with your real YouTube video IDs (unlisted is fine).
// videoId: null renders a "demo coming soon" placeholder instead of an embed.
// NOTE: confirm with your employer before recording/publishing any demo of
// work-built tools -- several of these were built on the job.
export const projects = [
  {
    title: 'AI Work-Instruction Generator',
    description:
      'A multimodal AI tool that generates operation-by-operation composite work instructions directly from engineering drawings and Fibersim ply tables, running on real production parts at Wisk Aero.',
    tags: ['AI', 'Multimodal', 'Manufacturing', 'PLM'],
    videoId: null,
    video: `${import.meta.env.BASE_URL}Videos/automated-work-instructions.mp4`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/work-instructions/01-awi-multinode-process.png`,
        caption:
          'AWI: upload an engineering drawing and a Fibersim ply table, and the tool builds the full operation-by-operation process diagram -- layup, cure, inspection, and QA sign-off -- automatically.',
      },
    ],
    links: {},
  },
  {
    title: 'Legacy-to-Teamcenter Migration Pipeline',
    description:
      "A ten-stage ETL pipeline that moves an aerospace standards and document library out of legacy systems into Teamcenter, driven end to end by a single master batch script. Java validators screen every input row first -- duplicates, mandatory attributes, field lengths, LOV values, classification classes, file existence, date formats -- so only clean data reaches a database. The run then walks four staging layers: a raw landing stage kept untouched for audit, a pre-clean stage that rebuilds physical file paths from part numbers, a clean stage that defaults revisions and corrects LOVs, sub-types and owning groups, and a target stage whose tables carry Teamcenter's own attribute names. Mapping SQL translates legacy columns into Item, ItemRevision, Form and Dataset attributes, Java extractors write import-ready CSVs, csv2tcxml converts them to TCXML, and tcxml_import bulk-loads them. Post-migration, documents are classified in bulk and validation and clash reports go out for audit sign-off. Every stage logs its own output and can be re-run on its own, so a failed run restarts from the stage that broke rather than from the beginning.",
    tags: ['Data Migration', 'ETL', 'Teamcenter', 'Java', 'SQL', 'TCXML'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/data-migration/01-etl-pipeline.gif`,
        caption:
          'The full run, stage by stage: validate the input, land it in source staging, clean it across two staging layers, map it onto the Teamcenter data model, extract it as CSV, convert to TCXML, bulk-load it, then classify and report.',
      },
    ],
    links: {},
  },
  {
    title: 'Bulk Classification Migration Utility',
    description:
      "A Teamcenter ITK batch utility (C++) that classifies migrated documents in bulk instead of one dialog at a time. It reads a CSV of item ID, revision ID, and target classification class, resolves each revision through a multi-field key, creates the classification object (ICO) under the right ICS class, then sets ownership -- routing each record to the correct owning group from its ID range. It runs under privilege bypass so migration data isn't blocked by access rules, and every row is wrapped in its own error boundary with timestamped logging, so one bad record is recorded and skipped rather than killing a run of tens of thousands.",
    tags: ['Teamcenter', 'ITK', 'C++', 'Data Migration'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/bulk-classification/01-batch-run.gif`,
        caption:
          'The batch run, one record at a time: read the CSV row, resolve the revision, create the classification object, set ownership from the ID range, log it, move on — and when a record fails, log the failure and keep going.',
      },
    ],
    links: {},
  },
  {
    title: 'Teamcenter MCP Server',
    description:
      'An MCP server bridging AI assistants (Claude, Gemini) to Siemens Teamcenter -- 60 typed tools covering items, BOM, workflow, change management, and files, plus 17 specialized domain-expert agent skills. SSO-based per-user auth, a read-only mode for external sharing, and a zero-crash-tolerant core built to DO-178C/ISO 26262-grade reliability standards. Powers the PLM Agentic Platform below.',
    tags: ['AI', 'MCP', 'Agents', 'Teamcenter'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/tc-mcp/01-architecture.png`,
        caption:
          'Requests flow from the AI client through the MCP server\'s transport, tool registry, tc_api wrappers, and network layers into Teamcenter -- with retries and a zero-crash exception boundary at every hop.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/tc-mcp/02-tools.png`,
        caption:
          '60 tools across items, BOM, files, change/workflow, search, and attribute mapping -- 24 read-only, 36 authoring.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/tc-mcp/03-agents.png`,
        caption:
          '17 domain-expert agent skills (Access Manager, Change Management, EasyPlan, Workflow, and more), each pairing a skill definition, tool-client wrapper, and test suite.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/tc-mcp/04-security.png`,
        caption:
          'Per-user SSO sessions, a one-flag read-only mode for external/supplier access, and source-free distribution via a compiled executable or a centrally hosted server.',
      },
    ],
    links: {},
  },
  {
    title: 'BGS Gateway Monitoring MCP Server',
    description:
      "A companion, read-only-by-construction MCP server giving AI assistants live observability into Siemens' AIG/T4x Gateway (BGS Admin UI) -- 39 tools across 9 monitoring domains (transaction/system/workflow/session logs, batch jobs, diagnostics, server admin), with a deterministic diagnosis engine that matches live log failures against a curated known-issue catalog instead of guessing.",
    tags: ['AI', 'MCP', 'Agents', 'Observability'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/bgs-mcp/01-architecture.png`,
        caption:
          "Domain agents call one shared server over stdio or Streamable-HTTP; a deterministic diagnosis case study cross-references live transaction logs against a curated catalog of known AIG/T4x failure signatures -- match or 'no known pattern,' never a fabricated cause.",
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/bgs-mcp/02-domains.png`,
        caption:
          "9 monitoring domains mapped directly from the BGS Admin UI's own navigation, each with its own skill, tool-client wrapper, and test suite -- all 39 tools are read/list/decode only.",
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/bgs-mcp/03-security.png`,
        caption:
          "With no write surface to gate, security focuses on the connect-URL allowlist, content-scan secret redaction in command history, a bearer+Origin gate on the remote transport, and inheriting Teamcenter's own role-based log visibility rather than second-guessing it.",
      },
    ],
    links: {},
  },
  {
    title: 'PLM Agentic Platform',
    description:
      'A browser-based agentic platform (Cosmos) backed by a Teamcenter MCP server -- one hub for BOM roll-ups, MBOM-to-BOP exports, ad-hoc reporting, and Excel import validation, plus a chat assistant that answers live Teamcenter questions. No separate MCP client setup required.',
    tags: ['AI', 'Agentic', 'MCP', 'Teamcenter'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/agentic-platform/01-overview.png`,
        caption:
          'Platform hub: PLM and MES tools grouped by function, each backed by live Teamcenter data via MCP.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/agentic-platform/02-bom-rollup.png`,
        caption:
          'BOM Roll-up & Flattener: collapses a multi-level BOM into a de-duplicated, quantity-rolled-up Excel report -- deterministic, no AI involved.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/agentic-platform/03-mbom-bop-export.png`,
        caption:
          'MBOM to BOP Operations & Tasks Export: resolves MBOM IDs to their related BOPs and flattens BOP -> Operation -> Task into one report.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/agentic-platform/04-report-builder.png`,
        caption:
          'Report Builder: ad-hoc reporting for any Teamcenter object type -- typed attribute autocomplete, sortable tables, live charts, Excel export.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/agentic-platform/05-excel-import-validator.png`,
        caption:
          'Excel Import Validator: checks a supplier import sheet against live Teamcenter LOVs and formatting rules, flagging every invalid cell before submission.',
      },
    ],
    links: {},
  },
  {
    title: 'Automated MBOM-BOP Broken-Link Validation',
    description:
      'A Teamcenter Manufacturing workflow automation that reconciles material consumption between the MBOM and its Bill of Process. On every new Collaboration Context, it automatically validates each BOP for broken/ghost links, generates a per-BOP report when it finds any, attaches that report to the workflow reference for review, and blocks Collaboration Context creation until the links are fixed -- removing a manual reconciliation step manufacturing engineers used to do by hand.',
    tags: ['Teamcenter Manufacturing', 'Workflow Automation', 'MBOM/BOP', 'ITK'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/mbom-bop-validation/00-overview.svg`,
        caption: 'How it works: validation runs on every new Collaboration Context and blocks it until broken links are fixed.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/mbom-bop-validation/01-cc-creation.png`,
        caption: 'A new Collaboration Context references the MBOM and its BOP.',
        annotations: [
          {
            x: '50%',
            y: '35%',
            side: 'top',
            text: 'The attached MBOM and BOP -- broken/ghost links are identified between these two structures before the CC is allowed to proceed.',
          },
        ],
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/mbom-bop-validation/02-broken-link-error.png`,
        caption: 'Validation runs automatically and fails the workflow the moment it finds a problem.',
        annotations: [
          {
            x: '8%',
            y: '18%',
            side: 'bottom',
            text: 'No manual review needed — the check runs as part of the CC-creation workflow itself.',
          },
          {
            x: '50%',
            y: '44%',
            side: 'top',
            text: 'The error names the exact BOP(s) with broken or ghost links, so nobody has to go hunting for them.',
          },
        ],
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/mbom-bop-validation/04-sample-report.png`,
        caption: 'A plain-text report is generated automatically, one line per broken/ghost link.',
        annotations: [
          {
            x: '50%',
            y: '10%',
            side: 'top',
            text: 'Each line gives the failing operation, the missing part, and its replacement — enough to fix it without opening Teamcenter first.',
          },
        ],
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/mbom-bop-validation/03-report-attached-to-workflow.png`,
        caption: 'The report is attached to the workflow task, ready for the manufacturing engineer.',
        annotations: [
          {
            x: '50%',
            y: '34%',
            side: 'top',
            text: 'It lands as a reference on the task already in their worklist — no separate email or file share.',
          },
        ],
      },
    ],
    links: {},
  },
  {
    title: 'Reference-Drawing Revision Impact & MES Resend',
    description:
      "When an engineering reference drawing (an installation drawing, say) is revised, every operation that attaches it goes stale -- but the operations themselves are never revised, so nothing signals MES that the shop floor is now working to an outdated print. Finding those operations used to be a manual hunt. This workflow walks the impacted drawing back to every latest operation revision that references it, filters down to the ones already published to MES, and automatically resends them from Teamcenter to Opcenter EX-DS with the updated drawing attached -- so the floor sees the current revision without anyone chasing it.",
    tags: ['Teamcenter Manufacturing', 'Workflow Automation', 'Opcenter EX-DS', 'PLM-MES Integration'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/AutomatedDesignImpact/00-overview.svg`,
        caption: 'How it works: from a revised drawing to an automatic resend, with no manual hunting in between.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/AutomatedDesignImpact/01-impact-analysis.png`,
        caption:
          'Design release triggers the impact analysis that finds every BOP operation referencing the revised drawing.',
        annotations: [
          {
            x: '13%',
            y: '47%',
            side: 'bottom',
            text: 'The revised drawing is only a reference on the operation — the operation itself never revises, so nothing flags it as stale.',
          },
          {
            x: '43%',
            y: '99%',
            side: 'top',
            text: 'Where-referenced, filtered to Operation Revisions: every operation the drawing touches, found automatically.',
          },
          {
            x: '84%',
            y: '99%',
            side: 'top',
            text: 'Each impacted operation is attached as a target on an MES_Integration process — no hand-built list.',
          },
        ],
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/AutomatedDesignImpact/02-resend-to-mes.png`,
        caption:
          'The workflow narrows to the latest operation revisions already sent to MES and resends them to Opcenter EX-DS.',
        annotations: [
          {
            x: '30%',
            y: '25%',
            side: 'top',
            text: 'Find, review, send — one workflow, no manual hunting.',
          },
          {
            x: '21%',
            y: '64%',
            side: 'bottom',
            text: 'The released operation still carries the old print until it is resent.',
          },
          {
            x: '75%',
            y: '99%',
            side: 'top',
            text: 'Every impacted operation lands as a reference on one review task before it goes out to the shop floor.',
          },
        ],
      },
    ],
    links: {},
  },
  {
    title: 'AI-Driven PLM Test Automation',
    description:
      'AI-powered automated testing tools for Teamcenter and Active Workspace, improving release quality and reliability across enterprise PLM upgrades.',
    tags: ['AI', 'Test Automation', 'Teamcenter'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/01-login.png`,
        caption: 'Cadence: the AI-powered test recorder and studio for Teamcenter and Active Workspace.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/02-test-scenarios.png`,
        caption:
          'Test Library: chain reusable test cases into end-to-end scenarios, then override input parameters per step.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/03-test-cases.png`,
        caption:
          '60+ recorded test cases across Item Creation, Change Management, SSO, and more, each with full step history.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/04-test-case-step-review.png`,
        caption:
          'Step-by-step review: expected result, description, and captured screenshot for every recorded action.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/05-live-canvas-run.png`,
        caption:
          'Live Canvas mirrors the test run in real time as each step executes against the sandbox environment.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/06-ai-quality-report.png`,
        caption:
          'AI Quality Report: an LLM reviews the full run against the stated acceptance criteria and issues a pass/fail verdict.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/07-run-reports-dashboard.png`,
        caption:
          'Run Reports dashboard: pass rate, failure trends, and per-step results across hundreds of automated runs.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/08-knowledge-graph-brain.png`,
        caption:
          'The Brain: a knowledge graph linking every test case, module, and skill learned across the entire test corpus.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/09-authoring-agent-plan.png`,
        caption:
          'Authoring Agent: describe a goal in plain English and the agent proposes a step-by-step plan for approval.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/10-authoring-agent-execution.png`,
        caption:
          'Once approved, the agent drives the live Teamcenter UI itself, clicking, filling, and navigating like a real user.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/11-authoring-agent-question.png`,
        caption:
          'When the agent is unsure a goal was met, it asks an interactive question instead of guessing.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/TestingAutomation/12-authoring-agent-captured-steps.png`,
        caption:
          'Every action the agent takes is captured as a reusable test step, ready to load straight into the test editor.',
      },
    ],
    links: {},
  },
  {
    title: 'Intelligent CI/CD for PLM',
    description:
      'A deployment-package comparison tool that diffs a Teamcenter change package against the live environment across BMIDE, stylesheets, workflows, and column configs -- catching risky changes before they reach production.',
    tags: ['CI/CD', 'AI', 'DevOps', 'Teamcenter'],
    videoId: null,
    images: [
      `${import.meta.env.BASE_URL}screenshots/cicd/01-overview.png`,
      `${import.meta.env.BASE_URL}screenshots/cicd/02-bmide.png`,
      `${import.meta.env.BASE_URL}screenshots/cicd/04-stylesheet.png`,
      `${import.meta.env.BASE_URL}screenshots/cicd/05-workflow.png`,
      `${import.meta.env.BASE_URL}screenshots/cicd/06-column-config.png`,
      `${import.meta.env.BASE_URL}screenshots/cicd/DeployPackager_AM.png`,
      `${import.meta.env.BASE_URL}screenshots/cicd/DeployPackager_AttributeMapping.png`,
    ],
    links: {},
  },
  {
    title: 'Server Monitoring & Reservation Dashboard',
    description:
      'A full-stack Flask + vanilla JS dashboard that tracks, claims, and monitors a fleet of Teamcenter dev/test/stage/prod servers -- with a lightweight Windows agent reporting service health, log alerts, and database preference changes back to it.',
    tags: ['Full-Stack', 'Flask', 'Ops', 'Windows Service'],
    videoId: null,
    images: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/01-login.png`,
        caption: 'Sign in as a named user or elevate with an admin PIN for management features.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/02-dashboard-table.png`,
        caption:
          'Table view: every server grouped by environment, with live status, claimant, purpose, and time-in-use.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/03-dashboard-grid.png`,
        caption: 'Card view of the same fleet -- claim, release, or join a waiting list at a glance.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/04-server-detail.png`,
        caption: 'Claiming a server records who has it and why, so nobody steps on an in-progress test.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/05-admin-toolbar.png`,
        caption: 'Admin mode unlocks add/edit/delete on servers plus user and group management.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/06-manage-users.png`,
        caption: 'User directory with per-user password management, all driven from the admin panel.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/07-manage-groups.png`,
        caption: 'Groups scope which environments each user can see, including external/supplier access.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/08-access-log.png`,
        caption: 'A full audit trail of every claim, release, and waiting-list event across the fleet.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/09-notification-settings.png`,
        caption:
          'Email and Google Chat alerts on claim/release events, plus the agent key used by the Windows monitoring service.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/10-services-monitor.png`,
        caption:
          'Per-server drill-down: the Windows agent reports live service and process status back to the dashboard.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/11-logs-monitor.png`,
        caption: 'Log Monitors tail configured log files and surface recent alerts as they happen.',
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/server-monitoring/12-database-monitor.png`,
        caption:
          'Database Monitor flags newly-changed Teamcenter preference values, read-only against the database.',
      },
    ],
    links: {},
  },
]
