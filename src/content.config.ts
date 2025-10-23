import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string().max(80),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const pageCollectionSchema = () =>
  z.object({
    title: z.string().max(80),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  });

const creation = defineCollection({ schema: pageCollectionSchema() });
const game = defineCollection({ schema: pageCollectionSchema() });
const lily = defineCollection({ schema: pageCollectionSchema() });
const text = defineCollection({ schema: pageCollectionSchema() });

export const collections = {
  blog,
  creation,
  game,
  lily,
  text,
};
