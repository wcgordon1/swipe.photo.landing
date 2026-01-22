import { defineCollection, z } from "astro:content";
const team = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      achievements: z.array(z.string()).optional(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      socials: z
        .object({
          twitter: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
          email: z.string().optional(),
        })
        .optional(),
    }),
});
const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      team: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});
const legal = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const work = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(), 
      client: z.string().optional(), 
      location: z.string().optional(), 
      year: z.number().int().optional(), 
      summary: z.string(), 
      bodyHeading: z.string().optional(), 
      services: z.array(z.string()).optional(), 
      industries: z.array(z.string()).optional(), 
      featured: z.boolean().default(false), 
      status: z
        .enum(["concept", "in-progress", "launched"])
        .default("launched"),
      image: z.object({
        url: image(), 
        alt: z.string(),
      }),
      gallery: z
        .array(
          z.object({
            url: image(), 
            alt: z.string(),
          })
        )
        .optional(),
      link: z.string().optional(), 
    }),
});
const store = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(), 
      description: z.string(), 
      price: z.number(), 
      oldPrice: z.number().optional(), 
      currency: z.string().default("USD"),
      sku: z.string().optional(), 
      badge: z.string().optional(), 
      category: z.string(), 
      image: z.object({
        url: image(), 
        alt: z.string(),
      }),
      gallery: z
        .array(
          z.object({
            url: image(), 
            alt: z.string(),
          })
        )
        .optional(),
      status: z.enum(["draft", "published", "archived"]).default("published"),
      featured: z.boolean().default(false),
      externalUrl: z.string().optional(), 
      downloadUrl: z.string().optional(), 
    }),
});
export const collections = {
  team,
  legal,
  posts,
  work,
  store,
};
