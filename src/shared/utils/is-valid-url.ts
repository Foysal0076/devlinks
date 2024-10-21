import { PLATFORM_URL_REGEX, PlatformName } from '@/shared/config/constants'

export const isValidUrl = (url: string) => {
  const regex =
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._\+~#?&//=]{1,256}\.[a-zA-Z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  return regex.test(url)
}

export const isValidPlatformUrl = (platform: PlatformName, url: string) => {
  return PLATFORM_URL_REGEX[platform].test(url)
}
