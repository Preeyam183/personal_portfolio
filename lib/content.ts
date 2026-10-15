export const links = {
  linkedin: 'https://www.linkedin.com/in/preeyam-shah/',
  github: 'https://github.com/Preeyam183',
  email: 'mailto:preeyamshah0604@gmail.com',
  devpost: 'https://devpost.com/preeyamshah0604',
};
export const projects = [
  { id: 'trees', github: 'https://github.com/Preeyam183/TalkingTrees', image: '/projects/branch-out-dashboard.webp', imageAlt: 'Branch Out dashboard showing the neighborhood tree map', number: '01', name: 'Branch Out', category: 'AI × THE NATURAL WORLD', description: 'Giving trees a voice. Sensor-informed AI personalities turn everyday tree care into a shared, community-driven experience.', note: 'Conversational AI · Environmental sensing', href: 'https://devpost.com/software/branch-out-n6kv50', link: 'Explore on Devpost', color: 'green' },
  { id: 'league', github: null, image: null, imageAlt: '', number: '02', name: 'Premier League\nStandings Predictor', category: 'DATA × THE BEAUTIFUL GAME', description: 'Looking beyond the final whistle. XGBoost, Poisson sampling, and 10,000 Monte Carlo simulations estimate how the Premier League season could finish.', note: 'Predictive modeling · Sports analytics', href: 'https://github.com/Preeyam183/PremierLeagueStandings', link: 'View on GitHub', color: 'yellow' },
  { id: 'camera', github: 'https://github.com/Anethula/IEEExRUHART26', image: '/projects/cvm4x.webp', imageAlt: 'Actual CVM4X home surveillance interface', number: '03', name: 'CVM4X', category: 'COMPUTER VISION × SECURITY', description: 'Making security footage easier to understand with object detection, activity timelines, AI summaries, and priority-based alerts.', note: 'Best use of AI/ML', href: 'https://devpost.com/software/cvm4x', link: 'Explore on Devpost', color: 'pink' },
  { id: 'raise', github: null, image: '/projects/raise-winner.jpeg', imageAlt: 'The five-member Scarlet API team holding their first-place RAISE-26 awards', number: '04', name: 'RAISE-26\nData Science Competition', category: 'DATA SCIENCE × COMPETITION', description: 'Our team, Scarlet API, won 1st place in the undergraduate track at RAISE-26. We explored AI’s impact through data science and analysis of news coverage.', note: '1st Place · Undergraduate Track', href: 'https://github.com/Preeyam183/RAISE-26_Hackathon', link: 'View on GitHub', color: 'blue' },
] as const;
export const experience = [
 { id: 'rutgers', logo: '/logos/rutgers-ai.png', logoAlt: 'Rutgers AI Club logo', name: 'Rutgers AI Club', role: 'Peer Mentor', type: 'COMMUNITY', date: 'September 2026', dateTime: '2026-09' },
 { id: 'algoverse', logo: '/logos/algoverse.png', logoAlt: 'Algoverse AI Research logo', name: 'Algoverse', role: 'AI/ML Researcher', type: 'RESEARCH', date: 'May – August 2026', dateTime: '2026-05' },
 { id: 'aws', logo: '/logos/aws-cloud-practitioner.png', logoAlt: 'AWS Certified Cloud Practitioner badge', name: 'AWS', role: 'Certified Cloud Practitioner', type: 'CERTIFICATION', date: 'May 2026', dateTime: '2026-05' },
 { id: 'neuralseek', logo: '/logos/neuralseek.svg', logoAlt: 'NeuralSeek logo', name: 'NeuralSeek', role: 'AI/ML Intern', type: 'INDUSTRY', date: 'April – May 2026', dateTime: '2026-04' },
];

// Keep only confirmed milestones; add more when they tell a useful story.
export const metrics = [
 { id: 'wins', label: 'Competition wins', value: 2, suffix: '', note: 'IDEAS INTO IMPACT' },
 { id: 'built', label: 'Projects built', value: 6, suffix: '+', note: 'ALWAYS BUILDING' },
 { id: 'episodes', label: 'SpongeBob episodes watched', value: 200, suffix: '+', note: 'BIKINI BOTTOM REGULAR' },
 { id: 'internships', label: 'Internships completed', value: 2, suffix: '', note: 'LEARNING BY DOING' },
] as const;

// Core software engineering skills from the résumé and explicit user updates.
export const skills = [
 { id: 'python', label: 'Python', icon: '/skills/python.svg' },
 { id: 'java', label: 'Java', icon: '/skills/java.svg' },
 { id: 'c', label: 'C', icon: '/skills/c.svg' },
 { id: 'sql', label: 'SQL', icon: '/skills/sql.svg' },
 { id: 'fastapi', label: 'FastAPI', icon: '/skills/fastapi.svg' },
 { id: 'flask', label: 'Flask', icon: '/skills/flask.svg' },
 { id: 'postgresql', label: 'PostgreSQL', icon: '/skills/postgresql.svg' },
 { id: 'supabase', label: 'Supabase', icon: '/skills/supabase.svg' },
 { id: 'docker', label: 'Docker', icon: '/skills/docker.svg' },
 { id: 'aws', label: 'AWS', icon: '/skills/aws.svg' },
 { id: 'git', label: 'Git', icon: '/skills/git.svg' },
 { id: 'github', label: 'GitHub', icon: '/skills/github.svg' },
] as const;
