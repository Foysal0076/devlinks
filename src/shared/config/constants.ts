export const PLATFORMS = [
  {
    name: 'Github',
    iconFile: 'github',
    iconName: 'GithubIcon',
    backgroundColor: '#0a0a0a',
    textColor: '#ffffff',
  },
  {
    name: 'LinkedIn',
    iconFile: 'linkedin',
    iconName: 'LinkedinIcon',
    backgroundColor: '#0077B5',
    textColor: '#ffffff',
  },
  {
    name: 'YouTube',
    iconFile: 'youtube',
    iconName: 'YoutubeIcon',
    backgroundColor: '#FF0000',
    textColor: '#ffffff',
  },
  {
    name: 'Facebook',
    iconFile: 'facebook',
    iconName: 'FacebookIcon',
    backgroundColor: '#1877F2',
    textColor: '#ffffff',
  },
  {
    name: 'GitLab',
    iconFile: 'gitlab',
    iconName: 'GitlabIcon',
    backgroundColor: '#FC6D26',
    textColor: '#ffffff',
  },
  {
    name: 'X',
    iconFile: 'x',
    iconName: 'XIcon',
    backgroundColor: '#0a0a0a',
    textColor: '#ffffff',
  },
]

export const PLATFORM_URL_REGEX = {
  Github: /github\.com/i,
  LinkedIn: /linkedin\.com/i,
  YouTube: /youtube\.com/i,
  Facebook: /(facebook\.com|fb\.com)/i,
  GitLab: /gitlab\.com/i,
  X: /(x\.com|twitter\.com)/i,
} as const

//export the regex keys as types
export type PlatformName = keyof typeof PLATFORM_URL_REGEX
