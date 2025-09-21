// import {
//   FaGithub,
//   FaLinkedin,
//   FaDumbbell,
//   FaPlaneDeparture,
//   FaFacebook,
//   FaBookOpen,
// } from "react-icons/fa6";
// import { PiTennisBallFill } from "react-icons/pi";
// import html from "@/public/html.png";
// import css from "@/public/css.png";

// import typescript from "@/public/typescript.png";
// import react from "@/public/react.png";
// import next from "@/public/next.png";
// import tailwind from "@/public/tailwind.png";
// import node from "@/public/node.png";
// import express from "@/public/express.png";
// import mongodb from "@/public/mongo.png";
// import javascript from "@/public/javascript.png";
// import c from "@/public/c.png";

// import git from "@/public/git.png";

// import villa from "@/public/villa.png";
// import warriors from "@/public/warriors.png";
// import boxd from "@/public/boxd.png";
// import atcq from "@/public/atcq.png";
// import vercel from "@/public/vercel.png";

// import giants from "@/public/giants.png";

// import niners from "@/public/49ers.png";

// import cloudinary from "@/public/cloudinary.png";
// import reactform from "@/public/reactform.png";
// import darazWebApp from "@/public/darazwebapp.jpg";
// import rentalWebApp from "@/public/rentalwebapp.jpg";
// import blogwebapp from "@/public/blogwebapp.jpg";
// import tourwebapp from "@/public/tourwebapp.jpg";
// import nextauth from "@/public/nextauth.jpg";
// import chatwebapp from "@/public/chatwebapp.jpg";
// import socketio from "@/public/socketicon.png";
// import github from "@/public/github.jpg";
// import tick from "@/public/tick.png";
// import cplus from "@/public/cplus.png";
// export const links = [
//   {
//     hash: "#home",
//     label: "Home",
//   },
//   // {
//   //   hash: '#about',
//   //   label: 'About',
//   // },
//   {
//     hash: "#skills",
//     label: "Skills",
//   },
//   {
//     hash: "#projects",
//     label: "Projects",
//   },
//   {
//     hash: "#experience",
//     label: "Experience",
//   },
//   {
//     hash: "#contact",
//     label: "Contact",
//   },
// ] as const;

// export const socials = [
//   {
//     name: "LinkedIn",
//     icon: FaLinkedin,
//     href: "https://www.linkedin.com/in/prashant-timilsina",
//   },
//   {
//     name: "GitHub",
//     icon: FaGithub,
//     href: "https://github.com/PrashantTimilsina",
//   },
//   {
//     name: "Facebook",
//     icon: FaFacebook,
//     href: "https://www.facebook.com/profile.php?id=61578269964686",
//   },
// ] as const;

// export const interests = [
//   {
//     name: "Basketball",
//     image: warriors,
//   },
//   {
//     name: "Soccer",
//     image: villa,
//   },
//   {
//     name: "Baseball",
//     image: giants,
//   },
//   {
//     name: "Football",
//     image: niners,
//   },
//   {
//     name: "Tennis",
//     icon: PiTennisBallFill,
//   },
//   {
//     name: "Fitness",
//     icon: FaDumbbell,
//   },
//   {
//     name: "Movies",
//     image: boxd,
//     href: "https://letterboxd.com/aross2010/",
//   },
//   {
//     name: "Music",
//     image: atcq,
//   },
//   {
//     name: "Reading",
//     icon: FaBookOpen,
//   },
//   {
//     name: "Traveling",
//     icon: FaPlaneDeparture,
//   },
// ] as const;

// export const skills = [
//   {
//     name: "HTML",
//     image: html,
//   },
//   {
//     name: "CSS",
//     image: css,
//   },
//   {
//     name: "JS",
//     image: javascript,
//   },
//   {
//     name: "React",
//     image: react,
//   },
//   {
//     name: "TypeScript",
//     image: typescript,
//   },
//   {
//     name: "Node.js",
//     image: node,
//   },
//   {
//     name: "Express",
//     image: express,
//   },
//   {
//     name: "C",
//     image: c,
//   },
//   {
//     name: "C++",
//     image: cplus,
//   },
//   {
//     name: "Tailwind CSS",
//     image: tailwind,
//   },
//   {
//     name: "Next.js",
//     image: next,
//   },
//   {
//     name: "MongoDB",
//     image: mongodb,
//   },
//   {
//     name: "Vercel",
//     image: vercel,
//   },
//   {
//     name: "Git",
//     image: git,
//   },
//   {
//     name: "Cloudinary",
//     image: cloudinary,
//   },
//   {
//     name: "React Hook Form",
//     image: reactform,
//   },
// ] as const;

// export const projects = [
//   {
//     name: "Tour Web App",
//     image: tourwebapp, // replace with your imported image
//     description:
//       "Developed a full-featured tour booking web application using Next.js and TypeScript, featuring dynamic routing, tour search, booking, wishlist, and secure user authentication.",
//     tech: [
//       {
//         src: next,
//         alt: "Next.js",
//       },
//       {
//         src: typescript,
//         alt: "TypeScript",
//       },
//       {
//         src: tailwind,
//         alt: "Tailwind CSS",
//       },
//       {
//         src: cloudinary,
//         alt: "Cloudinary",
//       },
//       {
//         src: mongodb,
//         alt: "MongoDB",
//       },
//       {
//         src: nextauth,
//         alt: "NextAuth",
//       },
//     ],
//     link: "https://tour-gules-delta.vercel.app", // live demo link
//     code: "https://github.com/PrashantTimilsina/tour",
//   },

//   {
//     name: "Next.js Blog App",
//     image: blogwebapp, // replace with your imported image
//     description:
//       "Built a full-featured blog web application using Next.js, with server-side rendering, dynamic routing, and CRUD functionality for posts. Features include creating blogs, liking posts, commenting, bookmarking, and uploading images via Cloudinary.",
//     tech: [
//       {
//         src: next,
//         alt: "Next.js",
//       },

//       {
//         src: tailwind,
//         alt: "Tailwind CSS",
//       },
//       {
//         src: mongodb,
//         alt: "MongoDB",
//       },
//       {
//         src: cloudinary,
//         alt: "Cloudinary",
//       },
//     ],
//     link: "https://blog-app-liart-eight.vercel.app", // live demo link if available
//     code: "https://github.com/PrashantTimilsina/Blog-App",
//   },

//   {
//     name: "Rental Web App",
//     image: rentalWebApp,
//     description:
//       "Developed a full-stack rental web application that allows users to list, browse, and book properties, complete with authentication, search filters, and real-time booking management.",
//     tech: [
//       {
//         src: mongodb,
//         alt: "mongodb",
//       },
//       {
//         src: express,
//         alt: "express",
//       },
//       {
//         src: react,
//         alt: "react",
//       },
//       {
//         src: node,
//         alt: "node.js",
//       },
//       {
//         src: tailwind,
//         alt: "tailwind",
//       },
//       {
//         src: cloudinary,
//         alt: "cloudinary",
//       },

//       {
//         src: git,
//         alt: "git",
//       },
//     ],
//     tags: [],
//     link: "https://rental-frontend-ndxp.onrender.com/", // replace with your deployed link
//     code: "https://github.com/PrashantTimilsina/Rental_Webapp", // replace with GitHub repo link
//   },

//   {
//     name: "Daraz Web App",
//     image: darazWebApp,
//     description:
//       "Built a full-stack e-commerce web application inspired by Daraz, featuring product listings, shopping cart, user authentication, and order management using the MERN stack.",
//     tech: [
//       {
//         src: mongodb,
//         alt: "mongodb",
//       },
//       {
//         src: express,
//         alt: "express",
//       },
//       {
//         src: react,
//         alt: "react",
//       },
//       {
//         src: node,
//         alt: "node.js",
//       },
//       {
//         src: tailwind,
//         alt: "tailwind",
//       },
//       {
//         src: git,
//         alt: "git",
//       },
//     ],
//     tags: [],
//     link: "https://daraz-frontend-jcr3.onrender.com/", // replace with your deployed link if available
//     code: "https://github.com/PrashantTimilsina/Daraz", // replace with GitHub repo link if available
//   },

//   {
//     name: "Real-Time Chat App",
//     image: chatwebapp, // replace with your imported image
//     description:
//       "Built a real-time chat application using Socket.IO where users can join a shared room and chat together seamlessly, featuring instant message broadcasting and room-based communication.",
//     tech: [
//       {
//         src: react,
//         alt: "React",
//       },
//       {
//         src: node,
//         alt: "Node.js",
//       },
//       {
//         src: mongodb,
//         alt: "Mongodb",
//       },

//       {
//         src: express,
//         alt: "Express",
//       },
//       {
//         src: socketio,
//         alt: "Socket.IO",
//       },
//     ],
//     link: "https://chat-app-frontend-5rhy.onrender.com", // live demo if deployed
//     code: "https://github.com/PrashantTimilsina/chat_app",
//   },

//   {
//     name: "See more on github",
//     image: github,
//     description:
//       "See more of my projects and code examples on my GitHub profile, including full-stack and frontend apps built with modern technologies.",
//     tech: [],
//     link: "https://github.com/prashantTimilsina",
//     code: "https://github.com/PrashantTimilsina?tab=repositories",
//   },
// ];

// export const experiences = [
//   {
//     title: "Kalika Multiple Campus (KMC)",
//     subtitle: "High School",
//     dates: "2021-2023",
//     description:
//       "Completed my highschool from Kalika Multiple Campus located at Kajipokhari, Pokhara, Nepal.",
//     image: tick,
//   },
//   {
//     title:
//       "Bachelor of Science in Computer Science and Information Technology ",
//     subtitle: "Tribhuvan University",
//     dates: "2023-Running",
//     description:
//       "Currently pursuing my Bachelors degree in Prithivi Narayan Campus located at Bagar,Pokhara,Nepal.",
//     image: tick,
//   },
// ];

// export const footerLinks = [
//   {
//     name: "LinkedIn",
//     icon: FaLinkedin,
//     href: "https://www.linkedin.com/in/prashant-timilsina",
//   },
//   {
//     name: "GitHub",
//     icon: FaGithub,
//     href: "https://github.com/PrashantTimilsina",
//   },
//   {
//     name: "Facebook",
//     icon: FaFacebook,
//     href: "https://www.facebook.com/profile.php?id=61578269964686",
//   },
// ] as const;
import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaFacebook,
  FaBookOpen,
} from "react-icons/fa6";
import { PiTennisBallFill } from "react-icons/pi";
import html from "@/public/html.png";
import css from "@/public/css.png";

import typescript from "@/public/typescript.png";
import react from "@/public/react.png";
import next from "@/public/next.png";
import tailwind from "@/public/tailwind.png";
import node from "@/public/node.png";
import express from "@/public/express.png";
import mongodb from "@/public/mongo.png";
import javascript from "@/public/javascript.png";
import c from "@/public/c.png";

import git from "@/public/git.png";

import villa from "@/public/villa.png";
import warriors from "@/public/warriors.png";
import boxd from "@/public/boxd.png";
import atcq from "@/public/atcq.png";
import vercel from "@/public/vercel.png";

import giants from "@/public/giants.png";

import niners from "@/public/49ers.png";

import cloudinary from "@/public/cloudinary.png";
import reactform from "@/public/reactform.png";
// import darazWebApp from "@/public/darazwebapp.jpg";
// import rentalWebApp from "@/public/rentalwebapp.jpg";
// import blogwebapp from "@/public/blogwebapp.jpg";
// import tourwebapp from "@/public/tourwebapp.jpg";
import nextauth from "@/public/nextauth.jpg";
// import chatwebapp from "@/public/chatwebapp.jpg";
import socketio from "@/public/socketicon.png";
import github from "@/public/github.jpg";
import tick from "@/public/tick.png";
import cplus from "@/public/cplus.png";
export const links = [
  {
    hash: "#home",
    label: "Home",
  },
  // {
  //   hash: '#about',
  //   label: 'About',
  // },
  {
    hash: "#skills",
    label: "Skills",
  },
  {
    hash: "#projects",
    label: "Projects",
  },
  {
    hash: "#experience",
    label: "Experience",
  },
  {
    hash: "#contact",
    label: "Contact",
  },
] as const;

export const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/prashant-timilsina",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/PrashantTimilsina",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61578269964686",
  },
] as const;

export const interests = [
  {
    name: "Basketball",
    image: warriors,
  },
  {
    name: "Soccer",
    image: villa,
  },
  {
    name: "Baseball",
    image: giants,
  },
  {
    name: "Football",
    image: niners,
  },
  {
    name: "Tennis",
    icon: PiTennisBallFill,
  },
  {
    name: "Fitness",
    icon: FaDumbbell,
  },
  {
    name: "Movies",
    image: boxd,
    href: "https://letterboxd.com/aross2010/",
  },
  {
    name: "Music",
    image: atcq,
  },
  {
    name: "Reading",
    icon: FaBookOpen,
  },
  {
    name: "Traveling",
    icon: FaPlaneDeparture,
  },
] as const;

export const skills = [
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "JS",
    image: javascript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "Node.js",
    image: node,
  },
  {
    name: "Express",
    image: express,
  },
  {
    name: "C",
    image: c,
  },
  {
    name: "C++",
    image: cplus,
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    name: "Next.js",
    image: next,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },
  {
    name: "Vercel",
    image: vercel,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "Cloudinary",
    image: cloudinary,
  },
  {
    name: "React Hook Form",
    image: reactform,
  },
] as const;

export const projects = [
  {
    name: "Tour Web App",
    image: "/tourwebapp.jpg", // replace with your imported image
    description:
      "Developed a full-featured tour booking web application using Next.js and TypeScript, featuring dynamic routing, tour search, booking, wishlist, and secure user authentication.",
    tech: [
      {
        src: next,
        alt: "Next.js",
      },
      {
        src: typescript,
        alt: "TypeScript",
      },
      {
        src: tailwind,
        alt: "Tailwind CSS",
      },
      {
        src: cloudinary,
        alt: "Cloudinary",
      },
      {
        src: mongodb,
        alt: "MongoDB",
      },
      {
        src: nextauth,
        alt: "NextAuth",
      },
    ],
    link: "https://tour-gules-delta.vercel.app", // live demo link
    code: "https://github.com/PrashantTimilsina/tour",
  },

  {
    name: "Next.js Blog App",
    image: "/blogwebapp.jpg", // replace with your imported image
    description:
      "Built a full-featured blog web application using Next.js, with server-side rendering, dynamic routing, and CRUD functionality for posts. Features include creating blogs, liking posts, commenting, bookmarking, and uploading images via Cloudinary.",
    tech: [
      {
        src: next,
        alt: "Next.js",
      },

      {
        src: tailwind,
        alt: "Tailwind CSS",
      },
      {
        src: mongodb,
        alt: "MongoDB",
      },
      {
        src: cloudinary,
        alt: "Cloudinary",
      },
    ],
    link: "https://blog-app-liart-eight.vercel.app", // live demo link if available
    code: "https://github.com/PrashantTimilsina/Blog-App",
  },

  {
    name: "Rental Web App",
    image: "/rentalWebApp.jpg",
    description:
      "Developed a full-stack rental web application that allows users to list, browse, and book properties, complete with authentication, search filters, and real-time booking management.",
    tech: [
      {
        src: mongodb,
        alt: "mongodb",
      },
      {
        src: express,
        alt: "express",
      },
      {
        src: react,
        alt: "react",
      },
      {
        src: node,
        alt: "node.js",
      },
      {
        src: tailwind,
        alt: "tailwind",
      },
      {
        src: cloudinary,
        alt: "cloudinary",
      },

      {
        src: git,
        alt: "git",
      },
    ],
    tags: [],
    link: "https://rental-frontend-ndxp.onrender.com/", // replace with your deployed link
    code: "https://github.com/PrashantTimilsina/Rental_Webapp", // replace with GitHub repo link
  },

  {
    name: "Daraz Web App",
    image: "/darazWebApp.jpg",
    description:
      "Built a full-stack e-commerce web application inspired by Daraz, featuring product listings, shopping cart, user authentication, and order management using the MERN stack.",
    tech: [
      {
        src: mongodb,
        alt: "mongodb",
      },
      {
        src: express,
        alt: "express",
      },
      {
        src: react,
        alt: "react",
      },
      {
        src: node,
        alt: "node.js",
      },
      {
        src: tailwind,
        alt: "tailwind",
      },
      {
        src: git,
        alt: "git",
      },
    ],
    tags: [],
    link: "https://daraz-frontend-jcr3.onrender.com/", // replace with your deployed link if available
    code: "https://github.com/PrashantTimilsina/Daraz", // replace with GitHub repo link if available
  },

  {
    name: "Real-Time Chat App",
    image: "/chatwebapp.jpg", // replace with your imported image
    description:
      "Built a real-time chat application using Socket.IO where users can join a shared room and chat together seamlessly, featuring instant message broadcasting and room-based communication.",
    tech: [
      {
        src: react,
        alt: "React",
      },
      {
        src: node,
        alt: "Node.js",
      },
      {
        src: mongodb,
        alt: "Mongodb",
      },

      {
        src: express,
        alt: "Express",
      },
      {
        src: socketio,
        alt: "Socket.IO",
      },
    ],
    link: "https://chat-app-frontend-5rhy.onrender.com", // live demo if deployed
    code: "https://github.com/PrashantTimilsina/chat_app",
  },

  {
    name: "See more on github",
    image: github,
    description:
      "See more of my projects and code examples on my GitHub profile, including full-stack and frontend apps built with modern technologies.",
    tech: [],
    link: "https://github.com/prashantTimilsina",
    code: "https://github.com/PrashantTimilsina?tab=repositories",
  },
];

export const experiences = [
  {
    title: "Kalika Multiple Campus (KMC)",
    subtitle: "High School",
    dates: "2021-2023",
    description:
      "Completed my highschool from Kalika Multiple Campus located at Kajipokhari, Pokhara, Nepal.",
    image: tick,
  },
  {
    title:
      "Bachelor of Science in Computer Science and Information Technology ",
    subtitle: "Tribhuvan University",
    dates: "2023-Running",
    description:
      "Currently pursuing my Bachelors degree in Prithivi Narayan Campus located at Bagar,Pokhara,Nepal.",
    image: tick,
  },
];

export const footerLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/prashant-timilsina",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/PrashantTimilsina",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61578269964686",
  },
] as const;
