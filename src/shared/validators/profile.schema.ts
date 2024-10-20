import { z } from 'zod'

export const userInformationUpdateSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().optional(),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
})

export type UserInformationUpdateSchema = z.infer<
  typeof userInformationUpdateSchema
>
