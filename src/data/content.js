export const profile = {
  name: 'Rajkumar Rajan',
  title: 'Software Engineer — AI Agents & Enterprise Automation',
  tagline:
    'I build AI agents, MCP servers, and intelligent test automation that make enterprise software easier to work with.',
  location: '',
  email: 'rajkumars.emailid@gmail.com',
  links: {
    github: 'https://github.com/rajkumarsemailid-sudo',
    linkedin: '',
    resume: '',
  },
}

export const skillGroups = [
  {
    title: 'AI & Agent Systems',
    skills: ['LLM Agent Design', 'Model Context Protocol (MCP)', 'Google ADK', 'Multi-Agent Orchestration', 'Prompt Engineering', 'RAG'],
  },
  {
    title: 'Automation & Testing',
    skills: ['Vision-based UI Test Automation', 'Self-Healing Test Frameworks', 'Playwright', 'Regression Pipelines'],
  },
  {
    title: 'Languages & Frameworks',
    skills: ['Python', 'JavaScript / TypeScript', 'React', 'Node.js'],
  },
  {
    title: 'Enterprise & Platform',
    skills: ['PLM System Integration', 'REST / SOA APIs', 'Data Modeling', 'CI/CD', 'Cloud Deployment'],
  },
]

// Replace videoId with your real YouTube video IDs (unlisted is fine).
// videoId: null renders a "demo coming soon" placeholder instead of an embed.
export const projects = [
  {
    title: 'AI-Powered UI Test Automation',
    description:
      'A vision-model-driven test automation framework that understands enterprise web UIs like a human tester — locating elements visually, self-healing broken selectors, and diffing screenshots to catch real regressions.',
    tags: ['Python', 'Computer Vision', 'LLM', 'Test Automation'],
    videoId: null,
    links: {},
  },
  {
    title: 'MCP Server for Enterprise PLM',
    description:
      'A Model Context Protocol server that exposes enterprise PLM object queries, reporting, and CRUD operations as tools an AI agent can call directly — turning a legacy enterprise system into something conversational.',
    tags: ['MCP', 'Python', 'PLM', 'API Design'],
    videoId: null,
    links: {},
  },
  {
    title: 'No-Code Agent Builder',
    description:
      'Ported a no-code visual agent-building experience onto Google\'s Agent Development Kit, translating flowchart-style agent definitions into runnable ADK agents.',
    tags: ['Google ADK', 'Python', 'Agent Orchestration'],
    videoId: null,
    links: {},
  },
  {
    title: 'AI Ad-Hoc Report Builder',
    description:
      'A JQL-style report and chart builder for enterprise object data, with an LLM translating natural-language questions into structured queries across any object type and relationship.',
    tags: ['React', 'LLM', 'Data Visualization'],
    videoId: null,
    links: {},
  },
  {
    title: 'Document Intelligence Pipeline',
    description:
      'A vision-based PDF table extraction pipeline that reads scanned engineering documents page-by-page and reconstructs structured tables that traditional text extraction misses.',
    tags: ['Python', 'Vision Models', 'Document AI'],
    videoId: null,
    links: {},
  },
]
