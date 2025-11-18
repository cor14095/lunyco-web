export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    location: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: {
    frontend: string[];
    backend: string[];
    cloud: string[];
    testing: string[];
    tools: string[];
    emerging: string[];
  };
  certifications: any[];
  languages: Language[];
}
