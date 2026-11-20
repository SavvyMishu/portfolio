
export type NavLink = {
  name: string;
  href: string;
};

export type ExpertiseItem = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  status: string;
  technologies: string[];
  github?: string;
  live?: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type AboutInfo = {
  heading: string;
  introduction: string;
  education: Education[];
};

export type ResearchItem = {
  title: string;
  description: string;
  status: string;
};

export type ContactInfo = {
  heading: string;
  description: string;
  email?: string;
  github?: string;
  linkedin?: string;
};
