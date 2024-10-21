import { z } from 'zod'

import { PlatformName } from '@/shared/config/constants'
import { isValidPlatformUrl, isValidUrl } from '@/shared/utils'

export const platformSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required' }),
    url: z
      .string()
      .min(1, { message: 'URL is required' })
      .refine((data) => isValidUrl(data), { message: 'Invalid URL format' }),
  })
  .superRefine(({ name, url }, ctx) => {
    if (!isValidPlatformUrl(name as PlatformName, url)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Invalid URL for ${name}`,
        path: ['url'],
      })
    }
    return z.NEVER
  })

export const linksSchema = z.object({
  links: z.array(platformSchema),
})

export type PlatFormInput = z.infer<typeof linksSchema>
