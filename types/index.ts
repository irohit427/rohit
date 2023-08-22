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

