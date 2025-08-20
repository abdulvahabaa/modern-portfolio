export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/Gmail white.svg",
    link: "mailto:abdulvahabaa@gmail.com",
  },
  {
    id: 2,
    img: "/github.svg",
    link: "https://github.com/abdulvahabaa",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abdulvahabaa/",
  },
  {
    id: 4,
    img: "/behance.svg",
    link: "https://www.behance.net/abdulvahab8",
  },
  {
    id: 5,
    img: "/insta.svg",
    link: "https://www.instagram.com/abubakthiyarvlogs/",
  },
  {
    id: 6,
    img: "/youtube-logo.svg",
    link: "https://www.youtube.com/@eldoradotechie",
  },
];

export const SkillLogos = [
  // Frontend Basics
  { id: 1, img: "/HTML5.svg" },
  { id: 2, img: "/CSS3.svg" },
  { id: 3, img: "/JavaScript.svg" },
  { id: 4, img: "/TypeScript.svg" },

  // Frameworks & Libraries
  { id: 5, img: "/react.svg" },
  { id: 6, img: "/next.js.svg" },
  { id: 7, img: "/Tailwind CSS.svg" },

  // Backend & Databases
  { id: 8, img: "/Node.js.svg" },
  { id: 9, img: "/Git.svg" },
  { id: 10, img: "/PostgresSQL.svg" },
  { id: 11, img: "/MongoDB.svg" },

  // DevOps & Cloud
  { id: 12, img: "/Docker.svg" },
  { id: 13, img: "/AWS.svg" },
  { id: 14, img: "/Powershell.svg" },

  // Tools & Editors
  { id: 15, img: "/VS Code.svg" },
  { id: 16, img: "/Figma.svg" },
  { id: 17, img: "/Postman.svg" },

  // Adobe Creative Suite
  { id: 18, img: "/Adobe Photoshop.svg" },
  { id: 19, img: "/Adobe Illustrator.svg" },
  { id: 20, img: "/Adobe XD.svg" },
  { id: 21, img: "/Adobe Premiere Pro.svg" },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Development Trainer",
    subtitle: "@ G-Tech Computer Education",
    duration: "2025 - Present",
    desc: "Delivering training on full stack web development, guiding students through real-world projects and modern technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    subtitle: "@ Estro Tech Robotics Pvt.Ltd.",
    duration: "2023 - 2024",
    desc: "Contributed to developing and maintaining web applications using Node.js and MongoDB, with experience in AWS Lambda, API Gateway, and third-party integrations.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Graphic Designer",
    subtitle: "Bakish Global, Zahra Collections",
    duration: "2024 - PartTime",
    desc: "Designed branding materials, promotional graphics, and social media content to enhance client visual presence.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Freelance App Dev Project",
    subtitle: "Custom MERN Web Applications",
    duration: "2024 - Present",
    desc: "Built full stack MERN web applications with authentication, CRUD operations, and responsive UI for client needs.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const educationData = [
  // 🎓 Education
  {
    id: 1,
    type: "Education",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Sreenarayana Guru Open University (SGOU)",
    duration: "2025 – Ongoing (Distance Learning)",
    desc: "Focused on full-stack web development, software engineering, and creative digital arts.",
  },
  {
    id: 2,
    type: "Education",
    degree: "Plus Two Humanities",
    school: "National Institute of Open Schooling (NIOS)",
    duration: "2014 – 2015",
    desc: "Built strong foundations in humanities along with analytical and critical thinking skills.",
  },

  // 🏋️ Training
  {
    id: 3,
    type: "Training",
    degree: "MERN Full Stack Development",
    school: "BROTOTYPE (Brocamp)",
    duration: "2022 – 2023",
    desc: "Hands-on training in MERN stack, web development, and modern web technologies.",
  },
  {
    id: 4,
    type: "Training",
    degree: "Graphic Designing",
    school: "G-Tech Computer Education",
    duration: "2025 – Completed",
    desc: "Explored design principles, motion graphics, and UI/UX to merge creativity with technology.",
  },

  // 📜 Certification
  {
    id: 5,
    type: "Certification",
    degree: "CEH - Certified Ethical Hacker",
    school: "EC-Council",
    duration: "Issued: Nov 2021 – Exp: Nov 2025",
    desc: "Industry-recognized certification validating cybersecurity and ethical hacking expertise.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dev Connect Social Media App",
    des: "Developed a feature-rich platform supporting connections, posts, comments, replies, and S3 bucket for uploads.Implemented admin tools for managing users, reported posts, search, sort, filter, and export options (PDF/CSV).Secured the platform with JWT authentication for strong user protection.",
    img: "/assets/projcet pics/devconnect.jpg",
    iconLists: [
      "/react.svg",
      "/Material UI.svg",
      "/Node.js.svg",
      "/MongoDB.svg",
      "/AWS.svg",
    ],
    worklink: "",
    codeLink: "https://github.com/abdulvahabaa/bossbabyStore",
    liveLink: "",
  },
  {
    id: 2,
    title: "BossBabyStore E-Commerce",
    des: "Built a scalable e-commerce site with JavaScript,Handlebars.js,Bootstrap, Node.js, Express.js and MongoDB.Integrated secure payment processing and user authentication mechanisms.Optimized database queries, reducing page load time by 40%.",
    img: "/assets/projcet pics/bossbaby.png",
    iconLists: [
      "/JavaScript.svg",
      "/Bootstrap.svg",
      "/Handlebars.svg",
      "/MongoDB.svg",
      "/AWS.svg",
    ],
    link: "",
    codeLink: "https://github.com/abdulvahabaa/bossbabyStore",
  },
  {
    id: 3,
    title: "Slot Booking App",
    des: "A REAL Slot booking app built using React, Tailwind CSS, and Vite.js For the frontend.",
    img: "/assets/projcet pics/slot booking.png",
    iconLists: ["/react.svg", "/Tailwind CSS.svg", "/Vite.js.svg"],
    link: "",
    codeLink: "https://github.com/abdulvahabaa/slot-booking-App.git",
  },
  {
    id: 4,
    title: "Slot Booking Backend APIs",
    des: "Slot booking app built using React, Tailwind CSS, and Vite.js For the frontend.",
    img: "/assets/projcet pics/Backend API.png",
    iconLists: [
      "/Node.js.svg",
      "/Express White.png",
      "/PostgresSQL.svg",
      "/prisma.svg",
    ],
    link: "",
    codeLink: "https://github.com/abdulvahabaa/slot-booking-App.git",
  },
  {
    id: 5,
    title: "Menu Management Backend APIs",
    des: "Slot booking app built using React, Tailwind CSS, and Vite.js For the frontend.",
    img: "/assets/projcet pics/Backend API.png",
    iconLists: [
      "/Node.js.svg",
      "/Express White.png",
      "/PostgresSQL.svg",
      "/prisma.svg",
    ],
    link: "",
    codeLink: "https://github.com/abdulvahabaa/slot-booking-App.git",
  },
  {
    id: 5,
    title: "Menu Management Backend APIs",
    des: "Slot booking app built using React, Tailwind CSS, and Vite.js For the frontend.",
    img: "/assets/projcet pics/Backend API.png",
    iconLists: [
      "/Node.js.svg",
      "/Express White.png",
      "/TypeScript.svg",
      "/MongoDB.svg",
      "/prisma.svg",
    ],
    link: "",
    codeLink: "https://github.com/abdulvahabaa/slot-booking-App.git",
  },
];

