export const portfolio = {
  person: {
    name: 'Jayant Bansal',
    title: 'Automation Test Engineer',
    email: 'bjayant231@gmail.com',
    phone: '+91-7300633502',
    linkedin: 'https://linkedin.com/in/jayant-bansal',
    github: 'https://github.com/jayant233',
    instagram: 'https://www.instagram.com/jayant23bansal',
    resume: '/resume.pdf',
    portrait: '/assets/profile/jayant.jpg'
  },
  heroTitles: ['Automation Test Engineer', 'QA Automation Engineer', 'Software Test Engineer'],
  summary: 'QA-focused engineer building reliable UI, API, and end-to-end automation with Java, Selenium, Playwright, REST Assured, JUnit 5, and CI/CD workflows.',
  experience: {
    company: 'SkillNexus', role: 'Software Quality Assurance Tester', location: 'Remote', dates: 'Aug 2026 - Sep 2026',
    points: ['Designed and executed 30+ manual test cases, documenting defects with screenshots, reproduction steps, and expected vs. actual results.', 'Prepared test plans, performed end-to-end functional testing, logged defects in Jira with severity and priority, tracked the defect lifecycle, and prepared test summary reports.']
  },
  metrics: [['30+', 'Manual test cases'], ['25', 'Automated E2E / functional tests'], ['15', 'Playwright UI / E2E tests'], ['10', 'REST Assured API tests'], ['CI/CD', 'GitHub Actions']],
  skills: {
    'Test automation': ['Selenium WebDriver', 'Playwright', 'REST Assured', 'JUnit 5', 'Page Object Model'],
    'Programming & database': ['Java', 'SQL', 'MySQL', 'OOP', 'JDBC'],
    'API & web testing': ['REST API Testing', 'Postman', 'UI Testing', 'End-to-End Testing'],
    'Testing & QA': ['Functional Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'Negative Testing', 'Boundary Testing', 'Integration Testing', 'System Testing'],
    'Test design & defects': ['Test Case Design', 'Equivalence Partitioning', 'Boundary Value Analysis', 'Jira', 'Defect Tracking', 'Defect Reporting', 'Defect Life Cycle', 'Severity & Priority'],
    'QA process / tools / CI-CD': ['Agile/Scrum', 'STLC', 'SDLC', 'Test Execution', 'Test Reporting', 'Maven', 'Git', 'GitHub', 'GitHub Actions']
  },
  projects: [
    {
      title: 'Government Scheme Recommendation System', github: 'https://github.com/jayant233/Government_Scheme_recommedation',
      description: 'A Java-based automation suite validating user and admin workflows for scheme eligibility and recommendation.',
      technologies: ['Java', 'Selenium', 'JUnit 5', 'POM', 'Spring Boot', 'MySQL', 'GitHub Actions'],
      evidence: ['25 end-to-end and functional tests', 'Eligibility, form, negative, and boundary validation', 'Reusable Page Objects and admin CRUD coverage', 'Maven execution with GitHub Actions CI/CD'],
      images: ['/assets/projects/government-01.png', '/assets/projects/government-02.png']
    },
    {
      title: 'Support Ticket Management & Automated Classification System', github: 'https://github.com/jayant233/Support-Ticket-Management-Automated-Classification-System',
      description: 'A support workflow tested across UI and API layers, including classification, SLA, filtering, and ticket lifecycle behavior.',
      technologies: ['Java', 'Playwright', 'REST Assured', 'JUnit 5', 'POM', 'MySQL', 'JDBC'],
      evidence: ['15 Playwright end-to-end UI tests', '10 REST Assured tests across POST / GET / PUT', 'Ticket validation, classification, and admin filtering', 'Negative API cases with response-field checks'],
      images: ['/assets/projects/support-01.png', '/assets/projects/support-02.png', '/assets/projects/support-03.png']
    }
  ],
  certifications: [
    { issuer: 'HackerRank', title: 'SQL (Intermediate)', label: 'View Credential', url: 'https://www.hackerrank.com/certificates/iframe/9cec9c1d6aee' },
    { issuer: 'HackerRank', title: 'Java (Basic)', label: 'View Credential', url: 'https://www.hackerrank.com/certificates/iframe/d495ef3069e2' },
    { issuer: 'Atlassian University', title: 'Get the most out of Jira', detail: 'Completed July 23, 2026', label: 'View Certificate', url: '/certificates/jira-learning-path.pdf' },
    { issuer: 'IBM SkillsBuild', title: 'Craft Precise Prompts for AI Models', label: 'View Certificate', url: '/certificates/CraftPrecisePromptsforAIModels_Badge20260917-22-2mhgkr.pdf' }
  ],
  gallery: [],
  education: { degree: 'B.Tech, Computer Science & Engineering (AI&ML)', institution: 'Meerut Institute of Engineering & Technology', affiliation: 'Meerut (AKTU)', dates: '2023-2027 (Expected)' }
};
