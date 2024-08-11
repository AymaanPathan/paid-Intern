import react1 from "./images/react-1.png";
import react2 from "./images/react-2.png";
import react3 from "./images/react-3.png";
import js1 from "./images/js1.png";
import js2 from "./images/js2.png";
import js3 from "./images/js3.png";
import backend1 from "./images/backend1.png";
import backend2 from "./images/backend2.png";
import backend3 from "./images/backend3.png";
import css1 from "./images/css1.png";
import css2 from "./images/css2.png";
import css3 from "./images/css3.png";
import fullstack1 from "./images/fullstack1.png";
import fullstack2 from "./images/fullstack2.png";
import fullstack3 from "./images/fullstack3.png";

// Videos
import reactVideo1 from "./Videos/react1.mp4";
import reactVideo2 from "./Videos/react2.mp4";
import reactVideo3 from "./Videos/react3.mp4";

import jsVideo1 from "./Videos/js1.mp4";
import jsVideo2 from "./Videos/js2.mp4";
import jsVideo3 from "./Videos/js3.mp4";

import backendVideo1 from "./Videos/back1.mp4";
import backendVideo2 from "./Videos/back2.mp4";
import backendVideo3 from "./Videos/back3.mp4";

import cssVideo1 from "./Videos/css1.mp4";
import cssVideo2 from "./Videos/css2.mp4";
import cssVideo3 from "./Videos/css3.mp4";

import fullstackVideo1 from "./Videos/full1.mp4";
import fullstackVideo2 from "./Videos/full2.mp4";
import fullstackVideo3 from "./Videos/full3.mp4";

const courses = [
  {
    id: 1,
    name: "The Ultimate React Course 2024",
    title: "React",
    langauge: "English",
    instructor: "Jonas Schmedtmann",
    whatyouLearn: [
      "Build modern web applications using React",
      "Understand Next.js and server-side rendering",
      "Master Context API, React Query, and Redux",
      "Apply Tailwind CSS in React projects",
      "Learn advanced React patterns and techniques",
    ],
    time: "4 weeks",
    description:
      "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns.",
    image: react1,
    video: reactVideo1,
  },
  {
    id: 2,
    name: "Advanced React Patterns",
    title: "React",
    langauge: "English",
    instructor: "Sara Wilson",
    whatyouLearn: [
      "Understand and implement advanced React hooks",
      "Create and use custom hooks effectively",
      "Dive into Context API for state management",
      "Learn best practices for reusable React components",
    ],
    time: "5 weeks",
    description:
      "Deep dive into advanced React patterns, including hooks, custom hooks, and context API.",
    image: react2,
    video: reactVideo2,
  },
  {
    id: 3,
    name: "React for Beginners",
    title: "React",
    langauge: "English",
    instructor: "Alex Johnson",
    whatyouLearn: [
      "Grasp the fundamentals of React",
      "Understand JSX, components, and props",
      "Manage state with React's useState hook",
      "Build simple yet powerful React applications",
    ],
    time: "3 weeks",
    description:
      "A beginner-friendly course on React that covers the basics and essential concepts.",
    image: react3,
    video: reactVideo3,
  },
  {
    id: 4,
    name: "JavaScript Essentials",
    title: "Javascript",
    instructor: "John Smith",
    whatyouLearn: [
      "Learn core JavaScript concepts and syntax",
      "Understand ES6+ features like let/const, arrow functions",
      "Master asynchronous programming with Promises and async/await",
    ],
    time: "6 weeks",
    description:
      "Understand the core concepts of JavaScript, including ES6+ features, and asynchronous programming.",
    image: js1,
    video: jsVideo1,
  },
  {
    id: 5,
    name: "JavaScript in Depth",
    title: "Javascript",
    instructor: "Rachel Green",
    whatyouLearn: [
      "Explore closures, prototypes, and the 'this' keyword",
      "Understand advanced object-oriented JavaScript",
      "Apply functional programming techniques",
    ],
    time: "7 weeks",
    description:
      "Explore advanced JavaScript topics such as closures, prototypes, and functional programming.",
    image: js2,
    video: jsVideo2,
  },
  {
    id: 6,
    name: "Modern JavaScript with ES6+",
    title: "Javascript",
    instructor: "Tom Harris",
    whatyouLearn: [
      "Learn modern JavaScript syntax and features",
      "Work with modules, destructuring, and spread operators",
      "Understand and use promises, async/await in depth",
    ],
    time: "5 weeks",
    description:
      "Learn modern JavaScript features and syntax introduced in ES6 and beyond.",
    image: js3,
    video: jsVideo3,
  },
  {
    id: 7,
    name: "Node.js Crash Course",
    title: "Backend",
    instructor: "Alice Johnson",
    whatyouLearn: [
      "Get started with server-side programming using Node.js",
      "Build your first RESTful API",
      "Understand Node.js event-driven architecture",
    ],
    time: "8 weeks",
    description:
      "Learn the basics of server-side programming with Node.js and build your first API.",
    image: backend1,
    video: backendVideo1,
  },
  {
    id: 8,
    name: "Mastering Python",
    title: "Backend",
    instructor: "Michael Brown",
    whatyouLearn: [
      "Dive deep into Python's core features",
      "Learn about middleware and routing in Python",
      "Integrate Python with databases for full-stack development",
    ],
    time: "9 weeks",
    description:
      "In-depth course on Python, covering middleware, routing, and integrating with databases.",
    image: backend2,
    video: backendVideo2,
  },
  {
    id: 9,
    name: "Advanced Backend Development with Node.js",
    title: "Backend",
    instructor: "Sophia Lee",
    whatyouLearn: [
      "Optimize Node.js performance for production",
      "Implement security best practices in Node.js",
      "Scale applications using Node.js",
    ],
    time: "10 weeks",
    description:
      "Advanced topics in Node.js, including performance optimization, security, and scaling applications.",
    image: backend3,
    video: backendVideo3,
  },
  {
    id: 10,
    name: "Introduction to Tailwind CSS",
    title: "Web Design",
    instructor: "Bob Lee",
    whatyouLearn: [
      "Learn the basics of Tailwind CSS",
      "Create responsive web designs with Tailwind",
      "Understand and apply utility-first CSS principles",
    ],
    time: "3 weeks",
    description:
      "Get started with Tailwind CSS and learn how to create responsive and modern web designs.",
    image: css1,
    video: cssVideo1,
  },
  {
    id: 11,
    name: "Advanced Web Design with Tailwind CSS",
    title: "Web Design",
    instructor: "Linda Clark",
    whatyouLearn: [
      "Explore advanced Tailwind CSS techniques",
      "Create complex layouts with Tailwind",
      "Use Tailwind with other tools like PostCSS",
    ],
    time: "4 weeks",
    description:
      "Explore advanced techniques in Tailwind CSS for creating complex and scalable web designs.",
    image: css2,
    video: cssVideo2,
  },
  {
    id: 12,
    name: "Responsive Web Design with Tailwind CSS",
    title: "Web Design",
    instructor: "Emma Davis",
    whatyouLearn: [
      "Build responsive designs for all screen sizes",
      "Understand mobile-first design principles",
      "Optimize Tailwind CSS for production",
    ],
    time: "5 weeks",
    description:
      "Learn to create responsive and visually appealing designs using Tailwind CSS.",
    image: css3,
    video: cssVideo3,
  },
  {
    id: 13,
    name: "Full-Stack JavaScript",
    title: "Full Stack",
    instructor: "Emily Davis",
    whatyouLearn: [
      "Develop both frontend and backend using JavaScript",
      "Understand the MERN stack (MongoDB, Express, React, Node.js)",
      "Deploy full-stack applications to cloud platforms",
    ],
    time: "10 weeks",
    description:
      "Comprehensive course covering both frontend and backend development using JavaScript technologies.",
    image: fullstack1,
    video: fullstackVideo1,
  },
  {
    id: 14,
    name: "Building Scalable Applications",
    title: "Full Stack",
    instructor: "James White",
    whatyouLearn: [
      "Learn to build scalable applications with React and Node.js",
      "Implement microservices architecture",
      "Use cloud services to scale applications",
    ],
    time: "12 weeks",
    description:
      "Learn to build scalable full-stack applications with advanced topics in React, Node.js, and cloud services.",
    image: fullstack2,
    video: fullstackVideo2,
  },
  {
    id: 15,
    name: "Full-Stack Development with Java",
    title: "Full Stack",
    instructor: "Olivia Brown",
    whatyouLearn: [
      "Master MongoDB, Express, React, and Node.js",
      "Build full-stack applications with the Java stack",
      "Understand deployment strategies for full-stack apps",
    ],
    time: "11 weeks",
    description:
      "A complete guide to building full-stack applications using the Java stack (Java, Spring Boot).",
    image: fullstack3,
    video: fullstackVideo3,
  },
];

export default courses;
