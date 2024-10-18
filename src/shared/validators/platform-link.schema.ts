import { z } from 'zod'

export const platformSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  url: z
    .string()
    .min(1, { message: 'URL is required' })
    .url({ message: 'Invalid URL' }),
})

export const linksSchema = z.object({
  links: z.array(platformSchema),
})

export type PlatFormInput = z.infer<typeof linksSchema>
