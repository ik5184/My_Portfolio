// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import KpitLogo from './assets/company_logo/kpit.png'
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import SpringBoot from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import vercelLogo from './assets/tech_logo/vercel.png';
import IntellJ from './assets/education_logo/IntellJ.jpg'
import MaterialUI from './assets/tech_logo/materialui.png';
// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import srmist from './assets/education_logo/SRMIST.jpg'
import suraj from './assets/education_logo/suraj.png';

// Project Section Logo's

import movierecLogo from './assets/work_logo/task_tracker.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/FoodSite.png';

import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
   
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: MaterialUI },
      
     
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
     
     
     { name: 'SpringBoot', logo: SpringBoot },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
    
    
      { name: 'JavaScript', logo: javascriptLogo },
      {name:'Java', logo:javaLogo}
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      {name:'IntelliJ IDEA' ,logo: IntellJ},
      
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: KpitLogo,
      role: "Frontend Developer",
      company: "KPIT Technologies Ltd",
      date: "July 2024 - Present",
      desc: "Developed dynamic and scalable analytics dashboards using React.Js, handling frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Restful API",
        "Redux-Toolkit",
      ],
    },
   
    {
      id: 1,
      img: KpitLogo,
      role: "Frontend Intern",
      company: "KPIT Technologies Ltd",
      date: "January 2024 - June 2022",
      desc: "Worked as a Frontend Developer Intern, contributing to development by creating reusable React components and assisting in feature implementation and developing clean and user‑friendly interfaces based on design team inputs. Supported debugging and improving website performance while learning industry best practices and working in a collaborative environment",
      skills: [
        "HTML5",
        "CSS3",
        "Javascript",
        "React JS",
        "TailwindCSS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img:srmist,
      school: "SRM Institute of Science & Technology",
      date: "Sept 2020 - July 2024",
      grade: "9.1 CGPA",
      desc: "I have completed my B.Tech (Bachelor of Technology) from ,SRM Institute of Science & Technology Chennai. During my time at SRMIST, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at SRMIST University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    
    {
      id: 1,
      img: suraj,
      school: "Suraj Senior Secondary School, Haryana",
      date: "Apr 2018 - March 2019",
      grade: "92%",
      desc: "I completed my class 12 education from Suraj Senior Secondary School, Haryana, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII)",
    },
    {
      id: 2,
      img: suraj,
      school: "Suraj Senior Secondary School, Haryana",
      date: "Apr 2016 - March 2017",
      grade: "9.8 CGPA",
      desc: "I completed my class 10 education from Suraj Senior Secondary School, Haryana, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/ik5184/Background-Image_remover",
      webapp: "https://background-image-remover-eta.vercel.app/",
    },
    
    {
      id: 1,
      title: "Food Website Application",
      description:
         "The food website application is a simple platform where users can search dishes, view details, and add them to a cart. The search bar filters items instantly, while each food card shows its name, price, and an Add to Cart button. The cart updates in real time, ensuring a smooth ordering experience.",
      image: npmLogo,
      tags: ["React JS", "TailwindCSS", "HTML","CSS","JavaScript"],
      github: "https://github.com/ik5184/Food-Website",
      webapp: "https://ecommerce-website-topaz-two.vercel.app/",
    },
    {
      id: 2,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/ik5184/Task-reminder-chrome-extension-tool",
      webapp: "https://task-reminder-chrome-extension-tool.vercel.app/",
    },
    {
      id: 3,
      title: "Task Tracker Application",
      description:
        "A task tracker with CRUD functionality is a productivity tool that lets users fully manage their tasks. It allows them to create new tasks with details like title and due date, read and view tasks in a list or dashboard, update existing tasks by editing or marking them as complete, and delete tasks when no longer needed.",

      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ik5184/Task-Tracker",
      webapp: "https://task-tracker-rosy-pi.vercel.app/",
    },
    
    
  ];  