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
    githubUrl: "https://github.com/harshl3/VisionTrack.git",
    liveUrl: null,
    apkUrl: "https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing",
  },
  {
  id: 2,

  title: "FitLens AI",

  subtitle: "AI-Powered Food & Fitness Tracking App",

  category: "mobile",

  shortDescription:
    "A full-stack Flutter fitness and nutrition app that uses Google Gemini AI to analyze food, track nutrition, workouts, hydration, and provide personalized fitness insights.",

  description:
    "FitLens AI is an AI-powered fitness and nutrition tracking application built with Flutter, Node.js, Express.js, and MongoDB Atlas. It combines AI food recognition, nutrition label scanning, voice-based food logging, calorie and macro tracking, hydration and supplement management, workout tracking, analytics, PDF reports, and an AI nutrition coach in a single mobile application.",

  problem:
    "Tracking food, nutrition, hydration, workouts, and fitness progress often requires multiple applications, while manually estimating food portions and nutritional values can be time-consuming and inaccurate.",

  solution:
    "Developed an all-in-one mobile fitness platform with Gemini Vision AI for food analysis, OCR-based nutrition label scanning, voice food logging, automated BMR/TDEE calculations, workout and hydration tracking, analytics dashboards, offline synchronization, and personalized AI nutrition recommendations.",

  technologies: [
    "Flutter",
    "Dart",
    "Node.js",
    "Express.js",
    "Mongoose",
    "Provider",
    "JWT",
    "Hive",
    "REST APIs"
  ],

  thumbnail: "/images/projects/project-4/thumbnail.jpg",

  screenshots: [
    "/images/projects/project-4/screenshot-1.jpg",
    "/images/projects/project-4/screenshot-2.jpg",
    "/images/projects/project-4/screenshot-3.jpg"
  ],

  githubUrl: "https://github.com/harshl3/FitLens-AI.git",

  liveUrl: null,

  apkUrl: "https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing",
},
  {
    id: 3,
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
    githubUrl: "https://github.com/harshl3/updated-uba.git",
    liveUrl: null,
    apkUrl: "https://drive.google.com/drive/folders/your-vidyasathi-apk-link",
  },
  {
  id: 5,

  title: "SnapTicket",

  subtitle: "Smart Event Ticket Booking & Digital Ticket App",

  category: "mobile",

  shortDescription:
    "A full-stack event ticket booking platform with a Flutter mobile app for event discovery, reservations, digital ticket management, and QR-based ticket verification.",

  description:
    "SnapTicket is a full-stack event ticketing platform consisting of a Flutter mobile application, React web application, and Node.js/Express backend with MongoDB. The mobile app works as a personal ticket wallet and day-of-event companion, allowing users to discover events, book tickets, manage reservations, view booking history, and access digital QR ticket passes.",

  problem:
    "Event attendees often need to manage bookings, ticket details, and admission passes across different platforms, making it difficult to quickly access and verify tickets during an event.",

  solution:
    "Developed a full-stack ticketing system with real-time seat availability, ticket quantity validation, booking and cancellation workflows, persistent booking history, digital ticket passes, and deterministic QR codes for ticket verification.",

  technologies: [
    "Flutter",
    "Dart",
    "React",
    "Provider",
    "Material 3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "SharedPreferences",
    "QR Code"
  ],

  thumbnail: "/images/projects/project-5/thumbnail.jpg",

  screenshots: [
    "/images/projects/project-5/screenshot-1.jpg",
    "/images/projects/project-5/screenshot-2.jpg",
    "/images/projects/project-5/screenshot-3.jpg"
  ],

  githubUrl: "https://github.com/harshl3/SnapTicket.git",

  liveUrl: null,

  apkUrl: "https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing",
},
  {
    id: 5,
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
    githubUrl: "https://github.com/harshl3/Solar_galaxy.git",
    liveUrl: null,
    apkUrl: "https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing",
  },
  {
  id: 6,
  title: "Student Result Management System",
  subtitle: "Console-based Academic Evaluation & Performance Tracking System",
  category: "Java", // or "java" / "backend" depending on your project categories
  shortDescription:
    "A comprehensive Java application enabling educators to manage student records, compute overall grades and rankings, generate detailed result cards, and maintain persistent file storage.",
  description:
    "The Student Result Management System is a modular Java-based application designed for schools and educational institutions. It streamlines administrative workflows by allowing teachers to handle full CRUD operations on student records, track subject-wise pass/fail statuses, evaluate performance rankings, generate class-level statistical summaries, and automatically persist data using custom File I/O techniques.",
  problem:
    "Educational institutions often rely on manual entry or fragmented spreadsheets for record-keeping, leading to errors in grade calculation, difficulty in tracking class performance metrics, and data loss across sessions.",
  solution:
    "Engineered an object-oriented Java system featuring input validation, dynamic grading and ranking algorithms, class statistics generation, and automated file-based persistent storage.",
  technologies: ["Java", "OOPS", "File I/O", "Data Structures","Exception Handling"],
  thumbnail: "/images/projects/student-result-system/thumbnail.jpg",
  screenshots: [
    "/images/projects/student-result-system/screenshot-1.jpg",
    "/images/projects/student-result-system/screenshot-2.jpg"
  ],
  githubUrl: "https://github.com/harshl3/Student-Results-Management-System.git", // Update with your actual GitHub URL
  liveUrl: null,
  apkUrl: null
},
  {
    id: 7,
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
  
{
  id: 8,

  title: "Just Chat",

  subtitle: "Real-Time Cross-Platform Chat Application",

  category: "mobile",

  shortDescription:
    "A modern Flutter and Firebase chat application supporting real-time messaging, private conversations, image sharing, notifications, and online presence tracking.",

  description:
    "Just Chat is a cross-platform real-time messaging application built with Flutter and Firebase. It provides secure email/password authentication, one-to-one conversations, real-time messaging with Cloud Firestore, read and seen receipts, image sharing, user search, friend connections, online/offline presence, push notifications, and customizable user profiles.",

  problem:
    "Traditional messaging implementations can become complex when handling real-time communication, message status, user presence, media sharing, and notifications across multiple devices.",

  solution:
    "Built a responsive cross-platform chat application using Flutter and Firebase with real-time Firestore listeners, Firebase Authentication, push notifications, presence tracking, private conversations, and a custom Base64 image handling system to reduce dependency on Firebase Storage.",

  technologies: [
    "Flutter",
    "Dart",
    "Provider",
    "Firebase Authentication",
    "Cloud Firestore",
    "Firebase Cloud Messaging",
    "Base64",
    "Image Compression"
  ],

  thumbnail: "/images/projects/project-6/thumbnail.jpg",

  screenshots: [
    "/images/projects/project-6/screenshot-1.jpg",
    "/images/projects/project-6/screenshot-2.jpg",
    "/images/projects/project-6/screenshot-3.jpg"
  ],

  githubUrl: "https://github.com/harshl3/Chativo.git",

  liveUrl: null,

  apkUrl: "https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing",
},


{
  id: 9,

  title: "Artify AI",

  subtitle: "AI Assistant, Image Generator & Translator App",

  category: "mobile",

  shortDescription:
    "A Flutter-based AI application combining intelligent chat, AI image generation, and multilingual translation with a modern animated interface.",

  description:
    "Artify AI is a multi-purpose AI assistant application built with Flutter that integrates GPT and Google Gemini for AI-powered conversations, AI image generation through GPT and Lexica, and multilingual translation using GPT and Google Translator. The application also includes customizable themes, onboarding screens, animations, and cloud integration.",

  problem:
    "Users often need separate applications for AI conversations, image generation, and language translation, resulting in a fragmented experience across different tools and platforms.",

  solution:
    "Developed a unified Flutter application that brings AI chatbot, image generation, and translation capabilities into a single modern interface, enhanced with animations, theme customization, and responsive Material UI components.",

  technologies: [
    "Flutter",
    "Dart",
    "OpenAI GPT",
    "Google Gemini AI",
    "Lexica",
    "Google Translator",
    "Lottie",
    "Material UI",
    "Cloud Integration"
  ],

  thumbnail: "/images/projects/project-7/thumbnail.jpg",

  screenshots: [
    "/images/projects/project-7/screenshot-1.jpg",
    "/images/projects/project-7/screenshot-2.jpg",
    "/images/projects/project-7/screenshot-3.jpg"
  ],

  githubUrl: "https://github.com/harshl3/Artify-AI.git",

  liveUrl: null,

  apkUrl: "https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing",
},


{
  id: 10,

  title: "Crowd Detection System",

  subtitle: "Real-Time Crowd Detection & Density Analysis",

  category: "ai",

  shortDescription:
    "An interactive computer vision web application that detects people in images and videos and analyzes crowd density using Python, OpenCV, and Streamlit.",

  description:
    "Crowd Detection System is a computer vision-based web application built with Python, OpenCV, and Streamlit. It allows users to upload image or video feeds, detects individuals using computer vision techniques, displays bounding boxes, and provides crowd density analysis through an interactive browser-based dashboard.",

  problem:
    "Monitoring crowd sizes manually is time-consuming and becomes difficult when analyzing large groups of people in real-time or from video footage.",

  solution:
    "Developed an interactive Streamlit dashboard that processes uploaded images and videos using OpenCV, detects individuals, visualizes detected people with bounding boxes, and analyzes overall crowd density in a lightweight cloud-ready environment.",

  technologies: [
    "Python",
    "OpenCV",
    "Streamlit",
    "Computer Vision",
    "opencv-python-headless"
  ],

  thumbnail: "/images/projects/project-8/thumbnail.jpg",

  screenshots: [
    "/images/projects/project-8/screenshot-1.jpg",
    "/images/projects/project-8/screenshot-2.jpg"
  ],

  githubUrl: "https://github.com/harshl3/Crowd-Detection-System-.git",

  liveUrl: null,

  apkUrl: null,
},



];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai-ml", label: "AI / ML" },
];
