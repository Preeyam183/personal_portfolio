import type { projects } from '@/lib/content';

export type ProjectDetailsContent = {
 description: string;
 bullets: readonly string[];
 technologies: readonly string[];
 images: readonly { src: string; alt: string; caption: string; width: number; height: number }[];
};

// Details come from the linked public repositories, Devpost, and supplied résumé.
export const projectDetails: Record<(typeof projects)[number]['id'], ProjectDetailsContent> = {
 trees: {
  description: 'Branch Out turns everyday tree care into a shared neighborhood game. Players discover trees on a map and talk to AI personalities whose moods reflect available sensor readings. Verified care earns points and territory ownership, connecting a digital experience with real-world stewardship.',
  bullets: [
   'Built web and mobile experiences for discovering trees, identifying species, viewing care needs, and tracking a shared leaderboard.',
   'Connected Arduino moisture readings through a Raspberry Pi bridge to sensor-informed Gemini conversations, with ElevenLabs transcription and voice replies.',
   'Kept rewards under backend control: proximity, authenticated hardware evidence, and sensor recovery must satisfy the rules before care earns points.',
  ],
  technologies: ['TypeScript', 'React', 'Vite', 'Expo', 'React Native', 'Supabase', 'PostgreSQL', 'Python', 'Gemini', 'ElevenLabs', 'Arduino', 'Raspberry Pi'],
  images: [
   { src: '/projects/branch-out-dashboard.webp', alt: 'Branch Out map dashboard with trees and neighborhood care information', caption: 'The Branch Out dashboard.', width: 1200, height: 800 },
   { src: '/projects/branch-out.webp', alt: 'Branch Out project introduction with the tagline Your Personal Talking Tree', caption: 'Project introduction from the Devpost gallery.', width: 1125, height: 600 },
  ],
 },
 league: {
  description: 'A football forecasting system that estimates how the Premier League season could finish. Historical results and live Fantasy Premier League data feed a PostgreSQL pipeline, while XGBoost and probabilistic simulation turn match predictions into season-level outcomes.',
  bullets: [
   'Staged and transformed historical match data in PostgreSQL, using rolling averages, recent form, and ELO ratings as model features.',
   'Predicted expected goals with XGBoost and sampled scores with a Poisson distribution across 10,000 simulated seasons.',
   'Presented expected points and finish probabilities for the title, top four, top six, and relegation in a Flask standings interface.',
  ],
  technologies: ['Python', 'Flask', 'PostgreSQL', 'SQL', 'XGBoost', 'Pandas', 'NumPy', 'scikit-learn', 'FPL API'],
  images: [],
 },
 camera: {
  description: 'CVM4X helps people understand home security footage through a browser dashboard. A real-time vision pipeline turns camera activity into a searchable timeline, while AI summaries and priority-based alerts help surface events that deserve attention. Winner of the Best Use of AI/ML award.',
  bullets: [
   'Combined OpenCV and YOLOv8 detection with a Flask backend and real-time event streaming for people, vehicles, packages, and activity.',
   'Added Gemini summaries, identity validation, and severity-aware notifications so users can review events without watching every frame.',
   'Integrated account-based workflows and database-backed event data, with a Raspberry Pi deployment path for a physical camera setup.',
  ],
  technologies: ['Python', 'Flask', 'Flask-SocketIO', 'OpenCV', 'YOLOv8', 'Gemini API', 'PostgreSQL', 'ChromaDB', 'Supabase', 'JavaScript'],
  images: [{ src: '/projects/cvm4x.webp', alt: 'CVM4X surveillance dashboard with live monitoring and event controls', caption: 'The CVM4X monitoring interface.', width: 1200, height: 800 }],
 },
 raise: {
  description: 'Our team, Scarlet API, won first place in the undergraduate track at the RAISE-26 Data Science Competition. We investigated how AI is shaping human behavior through an NLP analysis of news coverage, combining sentiment, topics, narrative framing, and semantic relationships.',
  bullets: [
   'Worked with a dataset of 10,500 AI news articles to examine how coverage describes adoption, concern, and social change.',
   'Explored sentiment and topics with transformer models and BERTopic, alongside semantic embeddings, clustering, and network analysis.',
   'Built notebook visualizations to communicate recurring phrases, organizations, and groups mentioned in AI coverage.',
  ],
  technologies: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'PyTorch', 'Hugging Face Transformers', 'BERTopic', 'scikit-learn', 'Matplotlib', 'Seaborn', 'NetworkX'],
  images: [
   { src: '/projects/raise-analysis.webp', alt: 'Notebook charts of recurring phrases, organizations, and groups mentioned in AI news', caption: 'Analysis charts from the project notebook.', width: 1200, height: 762 },
   { src: '/projects/raise-winner.jpeg', alt: 'The five-member Scarlet API team receiving first-place RAISE-26 awards', caption: 'Scarlet API — first place, undergraduate track.', width: 1080, height: 1080 },
  ],
 },
};
