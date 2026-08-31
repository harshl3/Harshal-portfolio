export const projects = [
  {
    id: 1,
    title: "VisionTrack",
    subtitle: "CCTV Camera Mapping & Surveillance System for Police",
    category: "mobile",
    shortDescription:
      "A Flutter-based mobile application with Node.js, PostgreSQL, and Google Maps API helping police officers quickly locate registered CCTV cameras near crime scenes in real-time.",
    description:
      "VisionTrack is a specialized surveillance mapping application engineered for law enforcement. It features role-based authentication (Admin/Police Officer), GPS-based CCTV camera geo-registration, interactive live map visualization, emergency proximity search, and secure camera contact management.",
    problem:
      "Police officers at crime scenes often spend critical hours manually searching for surrounding surveillance cameras, causing major delays in early evidence acquisition.",
    solution:
      "Built a secure mobile and backend pipeline allowing instant geo-spatial querying of nearby CCTV cameras on Google Maps with direct contact details and access protocols.",
    technologies: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Google Maps API", "JWT Auth", "Express.js"],
    thumbnail: "/images/projects/project-1/thumbnail.jpg",
    screenshots: [
      "/images/projects/project-1/screenshot-1.jpg",
      "/images/projects/project-1/screenshot-2.jpg",
    ],
    githubUrl: "https://github.com/harshl3",
    liveUrl: null,
    apkUrl: "https://drive.google.com/drive/folders/your-visiontrack-apk-link",
  },
  {
    id: 2,
    title: "Vidya Sathi",
    subtitle: "Educational Mobile App for Rural Schools",
    category: "mobile",
    shortDescription:
      "Developed using Flutter and Firebase in collaboration with Unnat Bharat Abhiyan (UBA) to support teachers and students across multiple rural schools with digital learning materials.",
    description:
      "Vidya Sathi is an educational application tailored for village and rural education. Built in direct collaboration with the UBA team, the app enables multi-school administration, student-teacher communication, content distribution, and learning resource management in low-bandwidth environments.",
    problem:
      "Rural educational institutions frequently lack modern digital administrative and academic distribution tools that can operate reliably under poor internet connectivity.",
    solution:
      "Created an intuitive Flutter + Firebase mobile platform with optimized offline caching, multi-school role access, and seamless content delivery.",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth"],
    thumbnail: "/images/projects/project-2/thumbnail.jpg",
    screenshots: [
      "/images/projects/project-2/screenshot-1.jpg",
      "/images/projects/project-2/screenshot-2.jpg",
    ],
    githubUrl: "https://github.com/harshl3",
    liveUrl: null,
    apkUrl: "https://drive.google.com/drive/folders/your-vidyasathi-apk-link",
  },
  {
    id: 3,
    title: "Solar Galaxy",
    subtitle: "Solar Energy Management & Monitoring App",
    category: "mobile",
    shortDescription:
      "A Flutter mobile application for monitoring and managing solar energy generation, billing, consumption trends, and live dashboard analytics with Google Authentication.",
    description:
      "Solar Galaxy provides solar system owners with real-time insight into their renewable energy metrics. It includes Google OAuth login, live energy generation dashboards, bill tracking, performance analytics, Provider state management, and local caching with Shared Preferences.",
    problem:
      "Solar power owners lacked an accessible, real-time dashboard on mobile to monitor generation spikes, consumption patterns, and billing efficiency.",
    solution:
      "Engineered a responsive mobile application with smooth Provider state management, REST API endpoints, and clean data visualizations.",
    technologies: ["Flutter", "Dart", "Provider", "Google Auth", "REST APIs", "Shared Preferences"],
    thumbnail: "/images/projects/project-3/thumbnail.jpg",
    screenshots: [
      "/images/projects/project-3/screenshot-1.jpg",
    ],
    githubUrl: "https://github.com/harshl3",
    liveUrl: null,
    apkUrl: "https://drive.google.com/drive/folders/your-solargalaxy-apk-link",
  },
  {
    id: 4,
    title: "ChronoScan",
    subtitle: "AI Healthcare Platform for Brain Tumor Detection",
    category: "ai-ml",
    shortDescription:
      "Award-winning AI healthcare system (2nd Prize at SYNERGY-26) for automated brain tumor detection, classification, and clinical insight reporting from MRI scans.",
    description:
      "ChronoScan leverages deep learning models trained on MRI datasets to accurately detect and classify brain tumors, generating preliminary diagnostic summaries and clinical insight graphs for medical practitioners.",
    problem:
      "Early radiological diagnosis can be impeded by lack of specialized MRI neuro-radiologists in remote healthcare facilities.",
    solution:
      "Developed an automated computer-vision pipeline using TensorFlow, Keras, and OpenCV for instant MRI analysis and classification.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI", "Flutter"],
    thumbnail: "/images/projects/project-4/thumbnail.jpg",
    screenshots: [
      "/images/projects/project-4/screenshot-1.jpg",
    ],
    githubUrl: "https://github.com/harshl3",
    liveUrl: null,
    apkUrl: null,
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai-ml", label: "AI / ML" },
];
