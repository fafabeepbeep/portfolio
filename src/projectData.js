// projectData.js
// =============================================================================
// PURPOSE: The single source of truth for ALL content on the site.
//          Edit THIS file to update any content. Component files never need
//          to change when you're just updating text, images, or data.
//
// CONNECTS TO: Every component imports from here.
//   profile       → Navbar, Hero, About, Contact, Footer
//   skills        → Skills
//   experiences   → Experience
//   awards        → Awards
//   certificates  → Certificates
//   projects      → Projects (gallery removed — screenshots now live inside project cards)
//
// MANDATORY: YES. A syntax error here (missing comma, unclosed quote) = white screen.
// SAFE EDITING RULES:
//   - Strings need quotes:           "like this"
//   - Array items need commas:       ["a", "b", "c"]
//   - Object fields need commas:     { a: 1, b: 2 }
//   - Last item in array/object:     no trailing comma needed (but allowed in JS)
// =============================================================================

// -----------------------------------------------------------------------------
// 1. PROFILE — used by Navbar, Hero, About, Contact, Footer
// -----------------------------------------------------------------------------
export const profile = {
  name: "NUR FAREEHAH BINTI JOHAN",
  subtitle: "Software Engineer Fresh Graduate",

  // Hero typing animation — cycles through these phrases
  typingPhrases: [
    "Hi! I'm Fareehah.",
    "Open to work!",
    "Eager to learn new things and easy to adapt.",
    "I'm ready to be on board.",
  ],

  // Profile photo — place image in /public, reference as "/profile.jpg"
  // Leave "" to show initials placeholder
  profileImage: "../profile2.JPG",

  // About section
  bio: "I’m a Software Engineering fresh graduate from Universiti Malaysia Sarawak (UNIMAS) with Hons. passionate about building practical software solutions and exploring how technology can solve real-world problems. My experience spans full-stack development, AI and computer vision, IT governance, and AI data annotation. I enjoy learning new technologies, turning ideas into real-life working solutions, and continuously growing and adapting as a software engineer.",

  university: "Universiti Malaysia Sarawak (UNIMAS)",
  degree: "Bachelor of Software Engineering with Honours",
  status: "Open to work",

  // UPDATED: interests written as a polished sentence
  interests: "When I'm in a peace state, I enjoy travelling to new places, hiking scenic trails, and going on spontaneous road trips, sometimes just relaxing winding down in the house doing my freelance work and a cup of matcha.",

  // UPDATED: professional career objective
  objective: "To gain hands-on experience in software engineering, strengthen my technical expertise through real-world projects, and continuously grow as a capable and adaptable engineer.",

  // Contact
  email: "fareehahj@gmail.com",
  phone: "+60 17 222 0643",
  location: "Kuching, Sarawak, Malaysia",

  // Social links — leave "" to hide the button entirely
  linkedin: "https://www.linkedin.com/in/nur-fareehah-johan-bb29a2255/?skipRedirect=true",
  github: "https://github.com/fafabeepbeep",
  portfolio: "",

  // Resume — place PDF in /public folder as "resume.pdf", reference as "/resume.pdf"
  // Leave "" to hide resume buttons
  resume: "../resume2026.pdf",
};

// -----------------------------------------------------------------------------
// 2. SKILLS
// Add/remove categories or items freely. No component file changes needed.
// -----------------------------------------------------------------------------
export const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "Java", "PHP", "Dart", "C"] },
  { category: "Frontend", items: ["React", "HTML", "CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "PHP"] },
  { category: "Database", items: ["MongoDB", "MySQL", "SQL", "Firebase"] },
  { category: "Mobile Development", items: ["Flutter", "Firebase"] },
  { category: "Computer Vision", items: ["OpenCV", "MediaPipe"] },
  { category: "AI / ML", items: ["AI Literacy", "Model Maker", "Prompting Engineer"] },
  { category: "UI/UX Design", items: ["Figma", "Wireframing", "Prototyping", "User Research"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code"] },
  { category: "Microsoft Office", items: ["Word", "Excel", "PowerPoint"] },
];

// -----------------------------------------------------------------------------
// 3. EXPERIENCE
// HOW TO ADD: Copy one { } block, paste it, fill in the values.
// HOW TO REMOVE: Delete the whole { } block and its trailing comma.
// -----------------------------------------------------------------------------
export const experiences = [
  {
    logo: "../logos/logo1.png",
    org: "Data Annotation",
    position: "AI Data Annotator | Freelance",
    duration: "May 2026 – Present",
    description: "Annotated and labeled datasets to support AI and machine learning model development, ensuring data accuracy, consistency, and compliance with specific guidelines to improve AI accuracy.",
    skills: ["AI Annotation", "Problem Solving", "Attention to Detail"],
    media: [],
  },
  {
    logo: "../logos/logo2.png",
    org: "Permodalan ASSAR Sdn Bhd",
    position: "Internship",
    duration: "March 2025 – September 2025",
    description: "Completed a 24-week Internal Audit internship supporting IT governance, GTRM documentation, and operational audits. Assisted DRP testing, data management, cash reconciliation, board paper preparation, and company website improvement initiatives.",
    skills: ["Auditing", "IT Governance", "GTRM", "Data Management"],
    media: [],
  },
  {
    logo: "../logos/logo3.png",
    org: "Sarawak Information Systems Sdn Bhd",
    position: "IT Support Volunteer",
    duration: "2024",
    description: "Volunteered for SUKMA Games XXI 2024 providing onsite ICT support at the shooting range venue. Delivered hardware setup, system monitoring, troubleshooting, and issue reporting over an 8-day event to ensure smooth venue operations.",
    skills: ["IT Support", "Hardware Setup", "Troubleshooting", "System Monitoring"],
    media: [],
  },
];

// -----------------------------------------------------------------------------
// 4. AWARDS
// HOW TO ADD: Copy one { } block, paste it, fill in the values.
// -----------------------------------------------------------------------------
export const awards = [
  {
    title: "🥈 2nd Runner Up - AI Healthcare Hackathon",
    org: "MentorMates at Sheraton Kuching",
    date: "2026",
    description: "Placed 2nd runner up at the AI Healthcare Hackathon, competing against teams to build innovative healthcare solutions using AI.",
    image: "../awards/hackathon.jpg",
    media: ["../awards/hackathononstage.jpg"],
  },
  {
    title: "Dean's List Award - Semester 7",
    org: "Universiti Malaysia Sarawak (UNIMAS)",
    date: "2025/2026",
    description: "Awarded Dean's List recognition for academic excellence in Semester 7.",
    image: "../awards/deanlist2.jpeg",
    media: [],
  },
  {
    title: "Dean's List Award - Semester 4",
    org: "Universiti Malaysia Sarawak (UNIMAS)",
    date: "2023/2024",
    description: "Awarded Dean's List recognition for academic excellence in Semester 4.",
    image: "../awards/deanlist1.jpeg",
    media: [],
  },

];

// -----------------------------------------------------------------------------
// 5. CERTIFICATES
// HOW TO ADD: Copy one { } block, paste it, fill in the values.
// -----------------------------------------------------------------------------
export const certificates = [
  {
    name: "2nd Runner Up - Healthcare AI Hackathon",
    issuer: "MentorMates",
    date: "2026",
    credentialId: "",
    credentialUrl: "https://www.mentormates.ai/certificate/91323ad0-a04d-47d2-b3c3-277510c738dd?p=fareehahj%40gmail.com",
    image: "../certificates/Mentormates.png",
    media: [],
  },
  {
    name: "APAC Cybersecurity Training (CYBEARS)",
    issuer: "The Asia Foundation",
    date: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "../certificates/Cybears82822.png",
    media: [],
  },
  {
    name: "ARM on Demand Training Certificate",
    issuer: "Ministry of Economy Malaysia",
    date: "February 2026",
    credentialId: "",
    credentialUrl: "",
    image: "../certificates/ARMonDemandTraining.png",
    media: [],
  },
  {
    name: "Citrawarna 2024",
    issuer: "UNIMAS",
    date: "November 2024",
    credentialId: "",
    credentialUrl: "",
    image: "../certificates/citrawarna.jpeg",
    media: [],
  },
  {
    name: "Kejohanan Bola Baling Terbuka Piala Abang Jo Ke-15",
    issuer: "UNIMAS",
    date: "August 2023",
    credentialId: "",
    credentialUrl: "",
    image: "../certificates/handball2023.png",
    media: [],
  },
];

// -----------------------------------------------------------------------------
// 6. PROJECTS
// WHAT CHANGED: `gallery` field removed. Screenshots now live inside `images[]`.
//   images[0]       = cover image shown on the card
//   images[1], [2]  = extra screenshots shown in the carousel inside the modal
//
// The standalone Gallery section has been removed from the site.
// All screenshots are now viewed by clicking a project card and using the carousel.
// -----------------------------------------------------------------------------
export const projects = [
  {
    title: "Hand Gesture Controller for Navigation Gameplay | Zenith Driven",
    year: "2026",
    description: "Developed a fullstack hand gesture recognition system using Python, OpenCV, and MediaPipe as a controller with an HTML/JS frontend and cloud database management.",
    longDescription: `After months of late nights and debugging sessions, I am proud to present ZENITH DRIVEN — a real-time hand gesture controller for navigation gameplay using computer vision, developed as my Final Year Project at FCSIT, Universiti Malaysia Sarawak (UNIMAS).

The idea was simple: what if you could control a racing game using just your hand and your laptop camera? No keyboard, no joystick, no extra hardware.

The project followed Rapid Application Development (RAD) methodology across four phases, starting with a user study involving 31 participants to determine the most natural hand gestures for navigation actions. The system was then designed using UML diagrams and wireframes before implementation.`,
    technologies: ["Python", "OpenCV", "MediaPipe", "HTML", "JavaScript", "Node.js", "WebSocket", "MySQL", "Aiven", "Phaser.js", "Google Colab"],
    role: "Fullstack Developer & Researcher",
    highlights: [
      "Trained custom ML model with 1,400+ hand gesture images achieving 90% accuracy",
      "Real-time gesture relay from local Python script to deployed browser game via WebSocket",
      "User study with 31 participants to determine most intuitive gestures",
      "Deployed on Render — accessible from any browser",
      "Symposium presentation at FCSIT UNIMAS",
    ],
    features: [
      "Real-time hand landmark detection",
      "7-gesture custom classifier",
      "Pseudo-3D browser racing game (Phaser.js)",
      "Cloud leaderboard (MySQL on Aiven)",
      "Live deployment via Render",
      "Structured RAD documentation",
    ],
    // images[0] = card cover, images[1..] = carousel slides in modal
    images: [
      "../project1/shot3.png",
      "../project1/shot2.png",
      "../project1/shot1.png",
      "../project1/shot4.png",
      "../project1/shot5.png",
    ],
    demo: "https://zenith-driven-racing-game.onrender.com",
    github: "",
    documentation: "../project1/82822_Thesis.pdf",
    architecture: "Python script captures webcam frames → OpenCV processes → MediaPipe detects hand landmarks → custom Model Maker classifier maps gesture → WebSocket sends command to Node.js server → Phaser.js game receives and reacts. MySQL on Aiven stores user accounts and leaderboard scores.",
    challenges: "Achieving reliable gesture recognition under varying lighting conditions while maintaining low enough latency for real-time gameplay.",
    solutions: "Trained a custom MediaPipe Model Maker classifier with 1,400+ images across 7 gesture classes, optimised the processing pipeline, and used WebSockets for minimum-latency command relay.",
    lessons: "The importance of a user study before implementation — gathering real data from 31 participants shaped the gesture set and made the system far more intuitive than a purely technical design would have been.",
    futureImprovements: "Expand to more gesture classes, support multiplayer mode, and explore mobile camera input.",
  },

  {
    title: "Healthcare Web Application | Med ID",
    year: "2026",
    description: "Built during the MentorMates AI Healthcare Hackathon — a healthcare web platform enabling secure, end-to-end patient record integration across Malaysian private clinics, government clinics, and hospitals with AI-powered medical summaries.",
    longDescription: `Med ID is a healthcare platform designed to create a connected patient medical journey by securely integrating records across Malaysian healthcare providers. The system enables verified data sharing between private clinics, government clinics, and hospitals, allowing new doctors to access a patient's previous medical history for more informed decision-making.
    
    Patients can view their digital insurance card, while caregiver access is controlled through doctor verification to ensure only authorised individuals can view sensitive medical information.
    
    AI-powered summaries help patients understand previous visits while providing doctors with concise bullet-point summaries of past medical records for faster clinical assessment.`,
    technologies: ["HTML", "JavaScript", "CSS", "AI Integration"],
    role: "Developer",
    highlights: [
      "🥈 2nd Runner Up at MentorMates AI Healthcare Hackathon",
      "Secure cross-provider patient record integration",
      "AI-generated medical summaries for patients and doctors",
      "Verified caregiver access management",
    ],
    features: [
      "End-to-end patient record integration",
      "Private & government healthcare data connectivity",
      "AI medical history summarisation",
      "Digital insurance card display",
      "Doctor-verified caregiver access",
      "Secure patient information sharing",
    ],
    images: ["../project2/shot1.png",
      "../project2/shot3.png",
      "../project2/shot2.png",
      "../project2/shot4.png",
      "../project2/shot5.png",
    "../project2/shot6.png",
    "../project2/shot7.png",
  ],
    demo: "https://fitries.github.io/med-id-prototype/index.html",
    github: "",
    documentation: "",
    architecture: "Web-based healthcare platform with AI integration for medical record summarisation and secure patient data access management.",
    challenges: "Designing a secure healthcare data-sharing workflow while maintaining privacy and accessibility within a hackathon timeframe.",
    solutions: "Developed a functional prototype focusing on verified data access, AI summarisation, and seamless healthcare record continuity.",
    lessons: "Healthcare technology requires balancing innovation, usability, and data privacy to create meaningful solutions.",
    futureImprovements: "Implement encrypted medical databases, real healthcare API integrations, and compliance with Malaysian healthcare data regulations.",
  },

  {
    title: "QR-based Event Web Application | MemoryLane",
    year: "2025",
    description: "Full-stack event platform for real-time photo upload and live gallery display using QR code entry.",
    longDescription: "Built a fullstack QR-based event web app where guests scan a QR code to instantly upload photos that appear on a live gallery wall in real time. Designed for events, parties, and gatherings.",
    technologies: ["HTML", "JavaScript", "Node.js", "MongoDB", "Firebase Storage", "WebSockets"],
    role: "Fullstack Developer",
    highlights: [
      "Real-time photo wall using WebSockets",
      "QR code guest entry — no app download needed",
      "Cloud photo storage via Firebase",
    ],
    features: ["QR code entry", "Real-time gallery updates", "Cloud storage", "Live event display"],
    images: ["../project4/shot1.png",
      "../project4/shot2.png",
    ],
    demo: "", github: "", documentation: "",
    architecture: "Node.js + Express backend, MongoDB for event metadata, Firebase Storage for photos, WebSockets for real-time gallery updates.",
    challenges: "Keeping the gallery in sync across many simultaneous guest uploads.",
    solutions: "WebSocket broadcast to all connected clients on each new upload event.",
    lessons: "Real-time systems require careful state management — especially when many clients connect simultaneously.",
    futureImprovements: "Add moderation panel, video support, and event analytics dashboard.",
  },

  {
    title: "Digital Platform Development | Mr Lowat Bakery",
    year: "2024–2025",
    description: "Developed a Flutter mobile app and a companion PHP website for Mr Lowat Bakery, covering inventory, online ordering, and customer management.",
    longDescription: `Combined two platforms into one connected digital presence for a local bakery:

The Flutter mobile app integrates with Firebase to manage inventory, orders, and customer information in real time.

The companion website, built with PHP, CSS, JavaScript, and SQL, supports online orders and web-based customer engagement — giving the bakery both an operational tool and a customer-facing storefront.`,
    technologies: ["Flutter", "Firebase", "PHP", "CSS", "JavaScript", "SQL"],
    role: "Mobile & Web Developer",
    highlights: [
      "Flutter app + Firebase for real-time inventory and order management",
      "PHP website with SQL database for online ordering",
      "Two platforms, one connected digital presence",
    ],
    features: ["Inventory tracking", "Order management", "Customer profiles", "Online ordering", "Web storefront"],
    images: ["../project3/shot2.png",
      "../project3/shot1.png",
      "../project3/shot9.png",
      "../project3/shot6.png",
    "../project3/shot10.png",
    "../project3/shot11.png",
  "../project3/shot12.png",],
    demo: "", github: "", documentation: "",
    architecture: "Flutter (Dart) frontend → Firebase Realtime Database for app data. PHP website → MySQL database for web orders.",
    challenges: "Keeping app and web data consistent across two separate backends.",
    solutions: "Scoped each platform to its own data store with clear boundaries — app for operations, website for customer-facing orders.",
    lessons: "Designing for two platforms simultaneously requires upfront agreement on data ownership and clear API boundaries.",
    futureImprovements: "Unify backends, add sales analytics dashboard, and build a loyalty points system.",
  },

  {
    title: "Service-Learning Project (SULAM) | AI Literacy & Scratch Workshop",
    year: "2025",
    description: "Facilitated hands-on AI literacy and Scratch coding workshops for primary school students at SK Muhibbah, including chatbot creation and interactive Kahoot assessments.",
    longDescription: "As part of UNIMAS's SULAM (Service Learning) programme, facilitated a series of workshops introducing primary school students to AI concepts and creative coding through Scratch. Sessions included chatbot creation activities, group challenges, and Kahoot quiz assessments to reinforce learning in an engaging way.",
    technologies: ["Scratch", "Kahoot", "AI Literacy"],
    role: "Facilitator",
    highlights: [
      "Designed beginner-friendly lesson plans for primary school students",
      "Guided chatbot creation sessions",
      "Ran Kahoot assessments to evaluate learning outcomes",
    ],
    features: ["AI literacy lessons", "Scratch creative coding", "Chatbot creation", "Kahoot assessment", "Site visit"],
    images: ["../project5/shot1.JPG",
      "../project5/shot2.JPG",
      "../project5/shot3.JPG",
      "../project5/shot4.JPG",
      "../project5/shot5.JPG",
      "../project5/shot6.JPG",
    ],
    demo: "", github: "", documentation: "",
    architecture: "Community workshop — no technical stack. Lesson plans, activity sheets, and Scratch projects.",
    challenges: "Explaining abstract AI concepts to young children without technical background.",
    solutions: "Used visual analogies, hands-on Scratch activities, and game-based Kahoot quizzes to keep learning engaging and concrete.",
    lessons: "Teaching is one of the best ways to deepen your own understanding of a subject.",
    futureImprovements: "Develop a reusable AI literacy curriculum kit for future facilitators.",
  },

  {
    title: "UI/UX Designer | Carlo Rino UI/UX Competition",
    year: "2024",
    description: "Designed an e-commerce UI/UX prototype in Figma as part of a 4-member team for the Innovate Carlo Rino UPM competition.",
    longDescription: "Collaborated in a team of four to design a complete e-commerce user experience for Carlo Rino, a Malaysian fashion brand. The project covered end-to-end UX design: user research, wireframing, component design, and a high-fidelity interactive Figma prototype.",
    technologies: ["Figma"],
    role: "UI/UX Designer (Team of 4)",
    highlights: [
      "End-to-end UX process: research → wireframe → prototype",
      "High-fidelity interactive Figma prototype",
      "Team collaboration across 4 designers",
    ],
    features: ["User research", "Wireframing", "UI design", "Interactive prototype", "E-commerce flow"],
    images: ["../project6/shot7.png",
      "../project6/shot1.png",
      "../project6/shot2.png",
      "../project6/shot3.png",
      "../project6/shot4.png",
      "../project6/shot5.png",
      "../project6/shot6.png",],
    demo: "https://www.figma.com/proto/XwmQsnofgjSZkqbLNSjkhS/Bunnie-Starlax-Prototype?node-id=148-762&starting-point-node-id=4%3A4&t=AApldJMjoprPGoPF-1", github: "", documentation: "",
    architecture: "Figma design file — components, auto-layout, interactive prototype flows.",
    challenges: "Balancing the brand's existing visual identity with a modernised, more user-friendly interface.",
    solutions: "Conducted competitive analysis of similar fashion e-commerce platforms before designing, ensuring the redesign felt fresh while staying on-brand.",
    lessons: "User research findings frequently contradict designer assumptions — always test early.",
    futureImprovements: "User testing with target demographic and an accessibility audit.",
  },

  {
    title: "Learning Game | Java",
    year: "2024",
    description: "Built a Java quiz game teaching introductory C programming concepts through interactive questions and immediate feedback.",
    longDescription: "Designed and built an interactive quiz game in Java that teaches introductory C programming concepts. The app presents a learning module with quizzes that uses multiple-choice questions, provides immediate feedback, tracks scores, and adapts difficulty — making it a fun alternative to traditional textbook learning.",
    technologies: ["Java"],
    role: "Developer",
    highlights: [
      "Provide a learning module before attempting quizzes",
      "Interactive multiple-choice quiz with score tracking",
      "Covers core C programming concepts",
      "Immediate feedback on each answer",
    ],
    features: ["Quiz gameplay", "Score tracking", "C programming curriculum", "Immediate feedback"],
    images: ["../project8/shot1.png",
      "../project8/shot2.png",
      "../project8/shot3.png",
      "../project8/shot4.png",
      "../project8/shot5.png",
    ],
    demo: "", github: "", documentation: "",
    architecture: "Java application — OOP design with separate classes for Question, Quiz, Player Leaderboard, and simple UI rendering.",
    challenges: "Making the learning content genuinely engaging rather than a dry question bank.",
    solutions: "Added score awards, answer feedback.",
    lessons: "Applies Java to desktop applications just as much as web apps.",
    futureImprovements: "Better UI/UX using Java, better quizzes engagements like kahoot,  add more programming topics, a high-score leaderboard, and export results as a PDF report.",
  },

  {
    title: "UI/UX Project | UNIMAS Shop",
    year: "2024",
    description: "Prototyped a digital shop platform for UNIMAS focused on usability and accessibility for students.",
    longDescription: "Designed a digital shopping platform prototype for the UNIMAS community, with a strong focus on accessibility and intuitive navigation. The project involved full UX research, persona creation, user journey mapping, wireframing, and a high-fidelity Figma prototype.",
    technologies: ["Figma"],
    role: "UI/UX Designer",
    highlights: [
      "Accessibility-first design approach",
      "User journey mapping and persona research",
      "High-fidelity Figma prototype",
    ],
    features: ["Accessibility design", "User journey mapping", "Wireframing", "High-fidelity prototype"],
    images: [
      "../project7/shot1.png",
      "../project7/shot2.png",
      "../project7/shot3.png",
      "../project7/shot4.png",
      "../project7/shot5.png",
      "../project7/shot6.png",],
    demo: "https://www.figma.com/proto/KFBWeua5au6OTdVDR7i41o/HCI-Prototype?node-id=137-124&starting-point-node-id=137%3A124&t=4KqhXkb2JUR5FZD5-1", github: "", documentation: "",
    architecture: "Figma design file with accessibility guidelines, component library, and interactive prototype.",
    challenges: "Designing for a diverse student population with varying technical literacy levels.",
    solutions: "Prioritised clear visual hierarchy, large tap targets, and simple navigation flows validated through peer feedback sessions.",
    lessons: "Accessibility is not a feature — it's a foundation. Building it in from the start is far easier than retrofitting.",
    futureImprovements: "Conduct formal usability testing and hand off to a development team for implementation.",
  },
];
