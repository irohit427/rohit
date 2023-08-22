import { NavLink, ProfileLink } from "@/types";
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