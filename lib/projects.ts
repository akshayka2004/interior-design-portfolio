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
    slug: 'modern-living-room',
    title: 'Modern Living Room',
    category: 'Living Spaces',
    image: '/portfolio-1.jpg',
    description: 'Contemporary minimalist design with warm, inviting elements',
    details: 'This project focused on creating a seamless flow between the living and dining areas, utilizing a palette of neutral tones with bold wood accents. The furniture was custom-designed to maximize space while maintaining a sense of openness.',
    gallery: ['/portfolio-1.jpg', '/portfolio-6.jpg', '/portfolio-7.jpg']
  },
  {
    id: 2,
    slug: 'serene-bedroom',
    title: 'Serene Bedroom',
    category: 'Bedrooms',
    image: '/portfolio-2.jpg',
    description: 'Peaceful sanctuary with elegant furnishings and soft lighting',
    details: 'A master suite transformation that prioritizes tranquility. We used textured wallpapers, ambient lighting layers, and a refined color scheme to create a restorative atmosphere.',
    gallery: ['/portfolio-2.jpg', '/portfolio-8.jpg', '/portfolio-3.jpg']
  },
  {
    id: 3,
    slug: 'gourmet-kitchen',
    title: 'Gourmet Kitchen',
    category: 'Kitchens',
    image: '/portfolio-3.jpg',
    description: 'Sophisticated culinary space with marble finishes',
    details: 'A chef\'s dream kitchen featuring high-end appliances, a waterfall marble island, and custom cabinetry. The layout was optimized for both high-performance cooking and social gathering.',
    gallery: ['/portfolio-3.jpg', '/portfolio-4.jpg', '/portfolio-5.jpg']
  },
  {
    id: 4,
    slug: 'luxury-bathroom',
    title: 'Luxury Bathroom',
    category: 'Bathrooms',
    image: '/portfolio-4.jpg',
    description: 'Spa-like retreat with premium materials and finishes',
    details: 'Transforming a standard bathroom into a private spa. Features include a freestanding soaking tub, a rain shower with stone cladding, and dual vanities with integrated lighting.',
    gallery: ['/portfolio-4.jpg', '/portfolio-2.jpg', '/portfolio-1.jpg']
  },
  {
    id: 5,
    slug: 'home-office',
    title: 'Home Office',
    category: 'Workspaces',
    image: '/portfolio-5.jpg',
    description: 'Productive workspace combining comfort and functionality',
    details: 'Designed for a creative professional, this office combines ergonomic furniture with inspiring aesthetics. Built-in shelving and smart cable management ensure a clutter-free environment.',
    gallery: ['/portfolio-5.jpg', '/portfolio-6.jpg', '/portfolio-7.jpg']
  },
  {
    id: 6,
    slug: 'open-concept-living',
    title: 'Open Concept Living',
    category: 'Living Spaces',
    image: '/portfolio-6.jpg',
    description: 'Flowing spaces with natural light and modern aesthetics',
    details: 'An expansive open-plan renovation that defines different functional zones through lighting and furniture placement without sacrificing the airy feel of the space.',
    gallery: ['/portfolio-6.jpg', '/portfolio-3.jpg', '/portfolio-2.jpg']
  },
  {
    id: 7,
    slug: 'grand-entryway',
    title: 'Grand Entryway',
    category: 'Foyers',
    image: '/portfolio-7.jpg',
    description: 'Impressive first impression with elegant details',
    details: 'The entrance sets the tone for the entire home. We implemented a bold geometric floor pattern, a statement chandelier, and custom console tables to create a grand welcoming experience.',
    gallery: ['/portfolio-7.jpg', '/portfolio-8.jpg', '/portfolio-1.jpg']
  },
  {
    id: 8,
    slug: 'reading-nook',
    title: 'Reading Nook',
    category: 'Specialty Spaces',
    image: '/portfolio-8.jpg',
    description: 'Cozy corner perfect for relaxation and contemplation',
    details: 'A small-scale project that proves big impact can come from compact spaces. This reading nook features a custom window seat, integrated lighting, and velvet upholstery.',
    gallery: ['/portfolio-8.jpg', '/portfolio-5.jpg', '/portfolio-4.jpg']
  }
]
