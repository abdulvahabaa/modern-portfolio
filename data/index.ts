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
    desc: "Contributed to web application development using React.js, Node.js, and MongoDB, focusing on UI enhancements and API integrations.",
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
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/test.png",
    iconLists: [
      "/Next.js.svg",
      "/react.svg",
      "/Tailwind CSS.svg",
      "/three.svg",
      "/fm.svg",
    ],
    link: "/ui.earth.com",
    codeLink: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/test.png",
    iconLists: [
      "/PostgresSQL.svg",
      "/tail.svg",
      "/ts.svg",
      "/stream.svg",
      "/c.svg",
    ],
    link: "/ui.yoom.com",
    codeLink: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/test.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    codeLink: "/ui.aiimg.com",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
