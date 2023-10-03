import { type } from "os"

export type NavLink = {
  title: string,
  url: string,
  index: number,
}

export type ProfileLink = {
  link: string,
  icon: any,
}

export type Experience = {
  company: string,
  role: string,
  start: string,
  end: string,
  shortDesc: string[]
}

export type Skill = {
  title: string,
  techs: Array<{icon: string, name: string}>
}

export type Github = {
  title: string, 
  link: string
  icon: string
}

export type Domain = {
  title: string, 
  link: string
  icon: string
}

export type Project = {
  title: string,
  description: string,
  github: string | Github[],
  domain?: string | Domain[],
  imgUrl: string,
}

export type Publication = {
  title: string,
  abstract: string,
  imgUrl: string,
  link: string
}