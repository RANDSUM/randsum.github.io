import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './docs' }),
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
