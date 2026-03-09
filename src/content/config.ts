import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({  // <--- 1. Add { image } here
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    quoteOfTheDay: z.string().optional(),
    
    // 2. Change heroImage to use the image() helper
    heroImage: image().optional(), 
    
    // (Keep your tags and other fields as they were)
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };