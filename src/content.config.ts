import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
  loader: glob({ base:"src/content/projects", pattern: "*.md" }),
  schema: z.object({
    projectId: z.number(),
    title: z.string(),
    duration: z.number()
  })
})

export const collections = { projects }