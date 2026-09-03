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
    links: {},
  },
  {
    title: 'AI-Driven PLM Test Automation',
    description:
      'AI-powered automated testing tools for Teamcenter and Active Workspace, improving release quality and reliability across enterprise PLM upgrades.',
    tags: ['AI', 'Test Automation', 'Teamcenter'],
    videoId: null,
    links: {},
  },
  {
    title: 'Intelligent CI/CD for PLM',
    description:
      'AI-assisted CI/CD pipelines that streamline Teamcenter development, integration, and deployment across distributed environments.',
    tags: ['CI/CD', 'AI', 'DevOps'],
    videoId: null,
    links: {},
  },
  {
    title: 'Enterprise System Integrations',
    description:
      'CAD, ERP, and MES integrations connecting Teamcenter with NX, CATIA, Solid Edge, SolidWorks, D365, and OpCenter -- keeping engineering, manufacturing, and supply chain data in sync.',
    tags: ['SOA', 'CAD', 'ERP', 'MES'],
    videoId: null,
    links: {},
  },
]
