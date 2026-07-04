export interface Project {
  id: number;
  slug: string;
  
  title: string;
  category: string;
  filter: string;

  image: string;
  heroImage: string;

  description: string;
  overview: string;
  challenge: string;
  solution: string;

  technologies: string[];

  result: string;

  gallery: string[];

  testimonial: {
    name: string;
    role: string;
    company: string;
    quote: string;
  };

  live: string;

  stats: {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}[];

}