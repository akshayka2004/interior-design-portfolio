export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'kr-narayanan-film-institute',
    title: 'K.R Narayanan Film Institute',
    category: 'Institutional',
    image: '/portfolio-1.jpg',
    description: 'Bespoke interior and acoustic solutions for premier film education',
    details: 'A comprehensive interior and acoustic design project for K.R Narayanan Film Institute, focusing on optimal sound environments and inspiring educational spaces.',
    gallery: ['/portfolio-1.jpg']
  },
  {
    id: 2,
    slug: 'st-joseph-college',
    title: 'St Joseph College of Communication',
    category: 'Institutional',
    image: '/portfolio-2.jpg',
    description: 'Modern media and communication facility at Changanassery',
    details: 'Designing functional and creative spaces for media students at St Joseph College of Communication, balancing technology with aesthetics.',
    gallery: ['/portfolio-2.jpg']
  },
  {
    id: 3,
    slug: 'heather-constructions',
    title: 'Heather Constructions',
    category: 'Commercial',
    image: '/portfolio-3.jpg',
    description: 'Premium corporate interiors for leading construction firm',
    details: 'Corporate office design for Heather Constructions that reflects their commitment to quality and structural excellence.',
    gallery: ['/portfolio-3.jpg']
  },
  {
    id: 4,
    slug: 'luminar-studio',
    title: 'Luminar Studio',
    category: 'Creative Spaces',
    image: '/portfolio-4.jpg',
    description: 'Sleek and professional studio environment',
    details: 'A minimalist yet highly functional studio space designed for Luminar Studio to foster creativity and professional workflow.',
    gallery: ['/portfolio-4.jpg']
  },
  {
    id: 5,
    slug: 'don-bosco-film-school',
    title: 'Don Bosco Film School',
    category: 'Institutional',
    image: '/portfolio-5.jpg',
    description: 'Acoustically treated spaces for future filmmakers',
    details: 'Specialized acoustic services and interior design for Don Bosco Film School, ensuring perfect sound isolation and creative ambiance.',
    gallery: ['/portfolio-5.jpg']
  },
  {
    id: 6,
    slug: 'south-indian-film-academy',
    title: 'South Indian Film Academy',
    category: 'Institutional',
    image: '/portfolio-6.jpg',
    description: 'State-of-the-art cinematic training facility',
    details: 'Designing the next generation of film training spaces with advanced acoustic treatments and cinematic design themes.',
    gallery: ['/portfolio-6.jpg']
  }
]

