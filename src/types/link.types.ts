import React from 'react'

export type PlatformOptionType = {
  value: string
  label: string
  icon: React.ReactNode
}

export type Link = {
  name: string
  url: string
}

export type UserLinks = {
  id: string
  links: Link[]
}
export type UserInfoAndLinks = {
  id: string // link id
  firstName: string
  lastName?: string
  avatar?: string
  email: string
  links: Link[]
}

// redux query data type
export type PostLinksBody = {
  links: Link[]
}

export type PutLinksBody = {
  id: string
  links: Link[]
}

// firebase form submission data type
export type FirebaseUserLinksPutFormData = {
  id: string
  userId: string
  links: string
}

export type FirebaseUserLinksPostFormData = Omit<
  FirebaseUserLinksPutFormData,
  'id'
>
