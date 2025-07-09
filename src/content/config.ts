import { defineCollection, z } from 'astro:content'

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    lastModified: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
})

export const collections = {
  docs
}
