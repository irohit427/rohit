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
]

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
]