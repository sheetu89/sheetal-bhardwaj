// This file contains constants and data used across the portfolio template. 
// Updated with Sheetal Bhardwaj’s details

export const ABOUT_ME = {
  name: "Sheetal Bhardwaj",
  title: "Full-Stack Developer",
  location: "Gurugram, IN",
  email: "sheetalbhardwaj525@gmail.com",
  description: [
    "I’m a passionate Full-Stack Developer who enjoys building scalable, responsive, and user-friendly web applications for real-world impact.",
    "With expertise in React, JavaScript, and modern frontend frameworks, along with experience in backend technologies and databases, I love turning ideas into functional digital products.",
    "I’ve worked with tools like Appwrite, Firebase, and Gemini API, and I’m always exploring new technologies on my path to becoming a well-rounded engineer.",
  ],
  profileImage: "/profile-image.webp", // Replace with your profile image
  profileGif: "/profile-gif.gif", // Optional GIF if you want
};

export const USER_NAMES = {
  githubUsername: "sheetu89", // Replace with your actual GitHub username
  leetcodeUsername: "sheetu89", // if you have one
  hashnodeUsername: "", // keep blank if you don’t use
};

export const SOCIAL_LINKS = {
  github: "https://github.com/sheetu89",
  linkedin: "https://linkedin.com/in/sheetalbhardwaj1", // update with your LinkedIn slug
  twitter: "",
  leetcode: "https://leetcode.com/sheetu89", // if you want to showcase
  peerlist: "",
  email: "mailto:sheetalbhardwaj525@gmail.com",
  blog: "",
  resume: "https://docs.google.com/document/d/1wI-QlIR_19PPqSfVVlNy0EXONscV4PnpWuWJY0g5xBQ/", // replace with your resume link
};

export const FORM_ENDPOINT = "https://formspree.io/f/mvggvyar";

export const SKILLS = {
  frontend: [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Bootstrap"
  ],
  backend: [
    "Node.js", "Express.js", "Firebase", "Appwrite"
  ],
  databases: [
    "MySQL", "Firebase"
  ],
  languages: [
    "Java", "Python", "C", "C++", "JavaScript", "TypeScript"
  ],
  cloudDevOps: [
    "Vercel", "Netlify", "GitHub Actions"
  ],
  tools: [
    "VS Code", "Git", "GitHub", "Postman", "Figma", "Linux", "Windows"
  ],
};

export const PROJECTS = [
  {
    name: "Tutorix – AI-Powered Learning App",
    description:
      "Built an AI-powered learning platform using React, Appwrite, and Gemini API to personalize educational experiences. Integrated a chatbot for real-time doubt solving and interactive quizzes.",
    tech: ["React", "Appwrite", "Gemini API", "TailwindCSS"],
    link: "https://tutorix.vercel.app",
    github: "https://github.com/sheetu89/tutorix", // update with repo link
  },
  {
    name: "MealMatch – Food Donation Platform",
    description:
      "Developed a web platform using React to connect food donors with recipients, helping reduce food waste. Added filters, forms, and geolocation-based suggestions for efficient donation matching.",
    tech: ["React", "JavaScript", "TailwindCSS"],
    link: "https://matchthemeal.vercel.app",
    github: "https://github.com/sheetu89/mealmatch", // update with repo link
  },
];

export const EXPERIENCE = [
  {
    company: "CyberXield",
    companyLink: "",
    role: "Front-End Web Developer Intern",
    period: "Jan 2024 – Feb 2024",
    location: "Remote",
    description:
      "Developed and maintained responsive web application of brand using HTML, CSS, and JavaScript. Implemented key features that improved user engagement by 20%.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech. in Computer Science Engineering",
    institution: "St. Andrews Institute of Technology and Management, MDU Rohtak",
    institutionLink: "https://saitm.ac.in/",
    period: "2022 – 2026",
    score: "73% so far",
  },
  {
    degree: "Senior Secondary Education (PCM)",
    institution: "Gov. Girls Senior Secondary School, Yamunanagar",
    institutionLink: "",
    period: "2020 – 2022",
    score: "62%",
  },
  {
    degree: "Secondary Education",
    institution: "Sant Sheetal Giri School, Yamunanagar",
    institutionLink: "",
    period: "2020",
    score: "88%",
  },
];
