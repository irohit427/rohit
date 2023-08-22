import { Experience, NavLink, ProfileLink } from "@/types";
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { GrInstagram } from "react-icons/gr";

export const navLinks: NavLink[] = [
  {
    title: 'About',
    url: '/about',
    index: 1,
  },
  {
    title: 'Experience',
    url: '/Experience',
    index: 2,
  },
  {
    title: 'Work',
    url: '/work',
    index: 3,
  },
  {
    title: 'Skills',
    url: '/skills',
    index: 4,
  },
  {
    title: 'Contact',
    url: '/contact',
    index: 5,
  }
];

export const profileLinks: ProfileLink[] = [
  {
    link: '',
    icon: AiOutlineTwitter
  },
  {
    link: '',
    icon: GrInstagram
  },
  {
    link: '',
    icon: AiOutlineGithub
  },
  {
    link: '',
    icon: AiOutlineLinkedin
  },
];

export const aboutText: string = `Hi there! I am Rohit Raj, a dynamic and creative Full Stack Developer
with a relentless curiosity for crafting innovative digital solutions.
My journey in the world of technology began at the prestigious 
Indian Institute of Information Technology, Allahabad, where I pursued both my B.Tech and M.Tech degrees. 
Graduating in 2019, I embarked on a mission to bring my technical expertise to life.
Armed with proficiency in cutting-edge technologies including Node.js, Nest.js, Next.js, Postgres, MongoDB, React, and AWS,
I architect solutions that seamlessly blend form and function. 
Crafting engaging user interfaces, optimizing database performance, and orchestrating the symphony of diverse 
technologies is my forte. When I'm not immersed in lines of code, I'm often framing the world through the lens of my camera. 
Photography is more than a hobby; it's a way to encapsulate emotions and narratives within a single frame.`

export const experiences: Experience[] = [
  {
    company: 'Acrobyte (McGraw Hill Education)',
    role: 'Software Engineer',
    start: 'March 2022',
    end: 'Present',
    shortDesc: [
      'Collaborated as a Full-stack Developer on the Achieve3000 Math product, taking on a multifaceted role in both frontend and backend development, contributing to the ongoing development of new features, enhancing the product capabilities and user experience.',
      'Played a crucial role in quality assurance by identifying and troubleshooting bugs and issues within the product. This proactive approach ensures a smooth user experience and application performance.',
      'Took the initiative to optimize backend performance by fine-tuning SQL queries, enhancing database interactions, and minimizing response times. This optimization contributes to a faster and more efficient application.',
      'Developed Lambda functions, likely using a serverless architecture, to automate various internal tasks and jobs. These functions streamline processes and contribute to overall operational efficiency.',
      'Designed and built an internal application using Retool, a no-code/low-code platform, to create books and assign chapters. This app likely improved the internal workflow and made these tasks more efficient.',
      'Undertook the task of modernizing the React codebase by converting class-based components to functional components. This transition aligns with current best practices and might result in improved code maintainability and readability.',
      'Demonstrated a forward-thinking approach by creating a shared component library that can be utilized across different applications within the organization. This library likely promotes code consistency, reusability, and accelerates development.'
    ],
  },
  {
    company: 'Trackier',
    role: 'Software Engineer',
    start: 'Jan 2021',
    end: 'Feb 2022',
    shortDesc: [
      'Implemented New features on Trackier, such as Collaborative Editing, Google OAuth Sign-in, Email Notification System, etc.',
      'Conduct a thorough analysis of the user interface (UI) and user experience (UX) of the Trackier platform. Identify areas for improvement, such as navigation, layout, and visual design, with the goal of enhancing user satisfaction.',
      'Design a robust alert system that monitors Key Performance Indicators (KPIs) and triggers notifications when specific thresholds or goals are achieved. Users receive timely alerts, allowing them to respond proactively to significant changes in campaign performance.',
      'Develop a feature that fetches order data from various e-commerce platforms, including Daraz, Shopee, Flipkart, Dhgate, and others. This integration provides users with a consolidated view of their sales data within the Trackier platform.',
      'Created an application that establishes a connection between Shopify stores and the Trackier platform. This app tracks clicks and conversions, enabling store owners to analyze the effectiveness of their marketing efforts and optimize their strategies accordingly.'
    ],
  },
  {
    company: 'Chargebee',
    role: 'Software Engineer',
    start: 'July 2019',
    end: 'Dec 2020',
    shortDesc: [
      'Collaborated as a member of the App Experience Team to transition the existing JavaServer Pages (JSP) pages to a Single Page Application (SPA) architecture using the Vue.js framework.',
      'Led the development of Representational State Transfer (REST) APIs for different microservices using the Java programming language. These APIs facilitate data exchange between various components of the application ecosystem.',
      `Created a user-friendly Control Panel within the framework, enabling users to trigger various actions and manage functionalities effectively. And Implemented analytics using Mixpanel, allowing comprehensive tracking of different user actions performed within the application helping to understanding user behavior and improving the application's performance.`,
      'Designed a versatile dashboard using a combination of Node.js and React, offering users the capability to configure diverse use-cases for the Chargebee checkout process which provided an intuitive interface for users to customize settings, payment options, and user interactions, enhancing the overall user experience.',
      'Played a pivotal role in the implementation of automation testing strategies for the application. Automated testing scripts and frameworks were designed and developed to validate the functionality, reliability, and performance of the application components.',
    ],
  },
]