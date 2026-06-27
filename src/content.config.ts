import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services collection schema
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    category: z.enum([
      'geotechnical-engineering',
      'site-investigation',
      'forensic-failure-analysis',
      'pavement-engineering',
    ]),
    order: z.number().optional(),
  }),
});

// Projects collection schema
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    shortDescription: z.string().optional(),
    image: z.string().optional(),
    category: z.enum([
      'transportation',
      'public-sector',
      'building-infrastructure',
      'energy-natural-resources',
    ]),
    featured: z.boolean().optional(),
    date: z.date().optional(),
  }),
});

// Team collection schema
const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string(),
    image: z.string().optional(),
    bio: z.string().optional(),
    certifications: z.array(z.string()).optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  services: servicesCollection,
  projects: projectsCollection,
  team: teamCollection,
};
