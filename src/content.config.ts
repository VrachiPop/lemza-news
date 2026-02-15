import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// 1. Add 'image' to the schema function arguments
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		
		// 2. Change this line!
		// OLD: heroImage: z.string().optional(),
		// NEW:
		heroImage: image().optional(),
		
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };