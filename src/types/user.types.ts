export type UserInformation = {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar: string
}

export type UserInformationPutFormData = Partial<
  Omit<UserInformation, 'id' | 'email'>
>
