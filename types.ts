
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string;
}
