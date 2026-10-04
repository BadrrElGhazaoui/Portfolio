import {
  estice,
  mobile,
  dubai,
  FoundationsOfCybersec,
  uae,
  Hackviser,
  hack,
  tutor,
  IntroductiontoCybersecurityCareers,
  PlayItSafe_ManageSecurityRisks,
  ConnectandProtect_NetworksandNetworkSecurity,
  ToolsoftheTrade_LinuxandSQL,
  Assets_Threats_andVulnerabilities,
  moondiscoveries,
  backend,
  web,
  lecedre,
  encgsettat,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  trojan,
  johntheripper,
  hydra,       // unused - not in Tech.jsx
  aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  // financialflowimage,
  // enterpriseapitester,
  atsscreenerlanding,
  github,
  mongodb,
  microsoft,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "IT & Cybersecurity Enthusiast",
    icon: fullstack,
  },
  {
    title: "Writer & Blogger",
    icon: backend,
  },
  {
    title: "Cinema & Music Lover",
    icon: mobile,
  },
  {
    title: "Curious Mind",
    icon: web,
  },
];

const education = [
  {
    title: "Scientific Baccalaureate, Physics-Chemistry major",
    company_name: "Groupe Scolaire Le Cedre",
    icon: lecedre,
    iconBg: "#fff",
    date: "2012-2024",
    points: [
      "With highest honors - Regional Exam 2023",
      "With honors - National Exam 2024",
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  }, 
  {
    title: "2-Year Higher Education Degree",
    company_name: "National Schools of Commerce and Management of Settat",
    icon: encgsettat,
    iconBg: "#fff",
    date: "2024-2026",
    points: [
      "1st Year - Grade : C+ ",
      "Passed National Competitive Exam After Baccalaureate ",
    ],
  },
  {
    title: "Bachelor's Degree (L2) in International Management",
    company_name: "ESTICE - International Management - Université Catholique de Lille",
    icon: estice,
    iconBg: "#fff",
    date: "2026-2027",
    points: [
      "Pursuing a Licence in International Management within a multicultural, English/French bilingual program",
      // "Active participation in student associations and international exchange initiatives",
    ],
  },
];

  

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
   {
     name: "Metasploit",
     icon: metasploit,
   },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
   {
     name: "Hydra",
     icon: hydra,
   },
   {
     name: "Aircrack-ng",
     icon: aircrackng,
   },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: "Independent Tutor",
    company_name: "Self-employed — Universities across Morocco",
    icon: tutor,
    iconBg: "#fff",
    date: "Jan. 2023 - Present",
    points: [
      "Tutored students in Cybersecurity and Programming modules across multiple Moroccan universities: Al Akhawayn University (supported Master's students on cybersecurity topics tied to their Deloitte-affiliated program), FST Settat (Génie Informatique), EST Berrechid (Génie Informatique), ENSA Safi, ENSAM Casablanca, and EMSI Casablanca (Cycle Ingénierie Informatique et Réseaux).",
      "Delivered one-on-one and small-group sessions, breaking down complex concepts in networking, security, and coding into clear, practical explanations tailored to each student's level.",
      "Built long-term relationships with students, many of whom return for continued support — a personal, mentorship-style approach rather than a classroom lecture format.",
      "Still actively tutoring today, alongside academic and professional work.",
    ],
  },
  {
    title: "IT & Accounting Intern",
    company_name: "Petro Pièces SARL, Casablanca",
    icon: wonderland,
    iconBg: "#fff",
    date: "May 2025 - Jul. 2025",
    points: [
      "Supported day-to-day accounting operations for a hydraulic parts, machining, and equipment company.",
      "Managed document organization and archiving across departments.",
      "Handled data entry and reporting using Microsoft Word and Excel.",
      "Served as a first point of contact, welcoming and directing visitors.",
      "Managed email correspondence and coordinated appointment scheduling.",
    ],
  },
  {
    title: "System Support Specialist",
    company_name: "Mackenzie Health",
    icon: mackenziehealth,
    iconBg: "#fff",
    date: "Jan. 2023 - Aug. 2023",
    points: [
      "Overhauled 400+ Surface tablets to bedside iPads, deploying the in-house 'Get Well Soon' app with Intune to hospital systems.",
      "Developed and refined an admin portal for managing app services, user roles, and subscription expirations.",
      "Utilized Jamf Pro for MDM, securely deploying iPads/iPhones across clinical departments.",
      "Implemented Vocera VOIP on iPhones, enabling real-time communication among nurses and ER staff.",
      "Performed in-room checks, resolved device issues, and collaborated with vendors on bug logs and system updates.",
    ],
  },
  {
    title: "Tech Sales Associate",
    company_name: "Staples Canada (Co-op)",
    icon: staples,
    iconBg: "#1294C8",
    date: "Sep. 2020 - Feb. 2021",
    points: [
      "Provided specialized support for Windows, Mac, and Linux, performing on-site installations, repairs, and optimizations.",
      "Streamlined inventory processes by handling SKUs and POs, maintaining a well-organized sales floor.",
      "Maintained accurate sales and inventory data in IBM AS/400, improving workflows and operational efficiency.",
      "Resolved complex technical inquiries, delivering tailored solutions that ensured high customer satisfaction.",
      "Facilitated e-commerce transactions, merging in-store and online channels.",
    ],
  },
];


const extracurricular = [
  {
    title: "Foundations of Cybersecurity",
    type: "Professional Certificate",
    icon:  google,
    iconBg: "#052FAD",
    date: "June 2026",
    points: [
     "Cybersecurity, Information Security, Network Security, Risk Management, Security Frameworks, Cybersecurity Ethics and Guidelines, ",
    ],
    credential: "https://coursera.org/share/10b8139e609fed53f14b2480f98c58ac",
    pdf: FoundationsOfCybersec,
  },
  {
    title: "Play It Safe: Manage Secu rity Risks",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#000000",
    date: "Jul 2026",
    points: [
      "Cybersecurity, Information Security, Risk Management, Security Risk Assessment, Security Controls, Security Frameworks, Governance, Risk, and Compliance (GRC), Security Policies and Procedures, NIST Cybersecurity Framework (CSF)",
    ],
    credential: "https://coursera.org/share/e12d5e6f59987f976d02754abb45c52f",
    pdf: PlayItSafe_ManageSecurityRisks,
  },
  {
  title: "Connect and Protect: Networks and Network Security",
  type: "Professional Certificate",
  icon: google,
  iconBg: "#000000",
  date: "Jul 2026",
  points: [
    "Network Security, Computer Networking, TCP/IP, Network Protocols, Network Architecture, Network Traffic Analysis, Network Defense, Firewalls, Intrusion Detection and Prevention Systems (IDS/IPS),"
  ],
  credential: "https://coursera.org/share/25c63bec0a669c733cbc9a3eacb7de5b",
  pdf: ConnectandProtect_NetworksandNetworkSecurity,
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#000000",
    date: "Jul 2026",
    points: ["Linux, SQL, Command-Line Interface (CLI), Bash, File System Management, Database Management, SQL Queries, Log Analysis, System Administration, Cybersecurity Tools."],
    credential: "https://coursera.org/share/66c719fbdf2355285d74a83893a42e2a",
    pdf: ToolsoftheTrade_LinuxandSQL,
  },
  {
    title: "Assets, Threats, and Vu lnerabilities",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#000000",
    date: "Jul 2026",
    points: ["Asset Management, Threat Analysis, Vulnerability Assessment, Risk Assessment, Attack Vectors, Threat Modeling, Security Controls, Vulnerability Management, Incident Response, Cybersecurity Fundamentals."],
    credential: "https://coursera.org/share/e15adc52a4e472fb5b9de3234670c4de",
    pdf: Assets_Threats_andVulnerabilities,
  },
  {
    title: "Introduction to Cybersecurity Careers",
    type: "Professional Certificate",
    icon: ibm,
    iconBg: "#748C7B",
    date: "Jul 2026",
    points: ["Cybersecurity, Information Security, Security Operations, Risk Management, Threat Analysis, Network Security, Incident Response, Security Awareness,"],
    credential: "https://coursera.org/share/adbd7c1ee5da77363fe41753c60771da",
    pdf: IntroductiontoCybersecurityCareers,
  },
  {
    title: "Certified Cybersecurity Foundations ( CORE )",
    type: "Professional Certificate",
    icon: hack,
    iconBg: "#050C18",
    date: "Jul 2026",
    points: [
      "Cybersecurity Foundations, Threat and Incident Management, Network and Web Security Basics, Generative AI Security, OSINT (Open-Source Intelligence),",
    ],
    credential: "https://hackviser.com/verify?id=HV-CORE-PDOOZNLW",
    pdf: Hackviser,
  },
  {
    title: "One Million Prompters ",
    type: "Professional Certificate by the Dubai Centre for Artificial Intelligence (DCAI)",
    icon: uae,
    iconBg: "#CCCFD8",
    date: "Aug 2026",
    points: ["Cybersecurity Fundamentals, Threat Detection, Risk Management, Network Protection, Security Awareness"],
    credential: "https://omp.dub.ai/certificate/euavGqkKtyEw",
    pdf: dubai,
  },
];

const projects = [
  {
    name: "ATS Screener 🔍",
    description:
      "Free, open-source ATS resume screener that simulates 6 real enterprise platforms (Workday, Taleo, iCIMS, Greenhouse, Lever, SuccessFactors) instead of giving you one made-up score. Each platform models its own parser strictness, keyword strategy, and calibrated thresholds from vendor docs. Dual-mode scoring engine with Gemma 3 27B as the primary LLM and a deterministic rule-based fallback for 100% uptime, plus client-side PDF/DOCX parsing so resume files never leave the browser. Serving 1,500+ users.",
    tags: [
      {
        name: "SvelteKit 2",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini/NLP",
        color: "green-text-gradient",
      },
      {
        name: "ATS-Simulation",
        color: "pink-text-gradient",
      },
      {
        name: "Rule-Engine",
        color: "blue-text-gradient",
      },
    ],
    image: atsscreenerlanding,
    source_code_link: "https://github.com/sunnypatell/ats-screener",
    live_project_link: "https://ats-screener.vercel.app",
  },
{
  name: "Moon Discoveries 🌙",
  description:
    "Personal blog where I write about the things that move me — songs, movies, books, and IT. Deep dives into Moroccan cinema, Arabic music, French literature, and cybersecurity. Built with Jekyll and Beautiful Jekyll theme, hosted on GitHub Pages.",
  tags: [
    {
      name: "Jekyll",
      color: "blue-text-gradient",
    },
    {
      name: "GitHub Pages",
      color: "green-text-gradient",
    },
    {
      name: "HTML/CSS",
      color: "pink-text-gradient",
    },
  ],
  image: moondiscoveries,
  source_code_link: "https://github.com/BadrrElGhazaoui/Moon-Discoveries",
  live_project_link: "https://moondiscoveries.com",
},
    {
    name: "Axelot ✍️",
    description:
      "Axelot is a real-time collaborative writing and knowledge workspace built with Next.js 16, TypeScript, Firebase, TipTap 3, and Yjs. It supports multi-user editing with presence cursors, CRDT-based conflict-free sync over WebRTC, and AI-assisted editing via OpenRouter-backed Next.js API routes. Features secure auth with NextAuth v5, Firestore-backed storage with Firebase custom tokens, a Vercel cron-powered trending algorithm, and production deployment via multi-stage Docker pipeline.",
    tags: [
      {
        name: "Next.js 16",
        color: "blue-text-gradient",
      },
      {
        name: "TipTap 3 / Yjs",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
      {
        name: "OpenRouter AI",
        color: "blue-text-gradient",
      },
    ],
    image: axelotlanding,
    source_code_link: "https://github.com/royce-mathew/axelot",
    live_project_link: "https://www.axelot.io",
  },
  {
    name: "Netdash (Networking Toolbox) 🌐",
    description:
      "Netdash is a cross-platform Electron desktop app (macOS, Windows, Linux) with Homebrew distribution, featuring Firebase Auth with Google OAuth and real-time Firestore sync. It includes 15+ networking tools for subnetting, VLSM, IP conflict detection, and multi-vendor configuration generation. Built with RTT measurement via Performance API, TCP port scanning, DNS-over-HTTPS with TTL-aware caching, and RFC-compliant IPv4/IPv6 algorithms with WCAG2.2 accessibility compliance.",
    tags: [
      {
        name: "Electron",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "DNS-over-HTTPS",
        color: "pink-text-gradient",
      },
      {
        name: "WCAG2.2",
        color: "blue-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "https://github.com/sunnypatell/netdash-toolkit/",
    live_project_link: "https://netdash-toolkit.vercel.app/",
  },
  {
    name: "SecureBank 🏦",
    description:
      "SecureBank is a deliberately vulnerable banking simulation built for Capture The Flag (CTF) training, focused on SQL injection and privilege escalation. It features exploit paths including raw query interpolation, single/double URL encoding, and a hidden admin portal to teach secure coding by example. Core features include transaction search, a feedback system, and an admin dashboard with live DB console and security logs. Backed by a normalized SQLite schema with cookie-signature sessions and dockerized challenge docs.",
    tags: [
      {
        name: "CTF",
        color: "blue-text-gradient",
      },
      {
        name: "SQLi/XSS",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: securebankdashboard,
    source_code_link: "https://github.com/sunnypatell/securebank-ctf",
    live_project_link: "https://github.com/sunnypatell/securebank-ctf",
  },
  {
    name: "Sunnify (Spotify Downloader) 🎵",
    description:
      "Sunnify is a Spotify downloader that reverse-engineers embed pages to extract track metadata by parsing protected JSON states without authentication. Features a cross-platform PyQt5 desktop client (macOS, Windows, Linux) with thread-safe UI updates, full concurrency through cooperating parallel workers, and 5 audio formats with format-aware metadata writers. Supports playlists with 1000+ tracks via Spotify's internal spclient API and ships as a Homebrew Cask alongside Windows and Linux installers. 100+ stars.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyQt5",
        color: "green-text-gradient",
      },
      {
        name: "yt-dlp",
        color: "pink-text-gradient",
      },
      {
        name: "Homebrew",
        color: "blue-text-gradient",
      },
    ],
    image: sunnifyimage,
    source_code_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
    live_project_link: "https://sunnify-spotify-downloader.vercel.app/",
  },
  // {
  //   name: "FinancialFlow 💸",
  //   description:
  //     "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
  //   tags: [
  //     {
  //       name: "React-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: financialflowimage,
  //   source_code_link: "https://github.com/sunnypatell/financialflow",
  //   live_project_link: "https://financial-flow.vercel.app/",
  // },
  // {
  //   name: "Enterprise API Tester 🌐",
  //   description:
  //     "Comprehensive API testing tool with support for all major HTTP methods, authentication, and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js, and TypeScript for optimal performance and developer experience.",
  //   tags: [
  //     {
  //       name: "Typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Authentication-Body",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: enterpriseapitester,
  //   source_code_link: "https://github.com/sunnypatell/enterprise-api-request-tester",
  //   live_project_link: "https://enterprise-api-request-tester.vercel.app/",
  // },
  {
    name: "KnifeThrow 🎯",
    description:
      "KnifeThrow is a Java Swing arcade game built by hand in Grade 12 across 5,000+ lines of code, long before generative AI was mainstream. It features pick-up-and-play knife throwing with screen shake, particles, sound effects, and animated sprites. Players unlock new knives by hitting score milestones in the in-game shop, dodge incoming enemy knives with scaling difficulty, and trigger an EMP that flips nearby threats. Persistent player profiles, dual control schemes, and a post-run leaderboard.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
      {
        name: "arcadegame",
        color: "green-text-gradient",
      },
    ],
    image: knifethrowimage,
    source_code_link: "https://github.com/sunnypatell/KnifeThrow",
    live_project_link: "https://github.com/sunnypatell/KnifeThrow",
  },
  // {
  //   name: "COVID-19 GTA Cases Data Analysis 🧪",
  //   description:
  //     "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tensorflow",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scikit-learn",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "matplotlib",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "numpy",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: pythonanalysis,
  //   source_code_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  //   live_project_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  // },
  // {
  //   name: "Secure Password Generator 🔐",
  //   description:
  //     "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sha-256",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "encryption/decryption",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "data-algorithms",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: password_generator,
  //   source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  //   live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  // },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
