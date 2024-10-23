export const PLATFORMS = [
  {
    name: 'Github',
    iconFile: 'github',
    iconName: 'GithubIcon',
    backgroundColor: '#0a0a0a',
    textColor: '#ffffff',
    urlPlaceholder: 'https://github.com/username',
  },
  {
    name: 'LinkedIn',
    iconFile: 'linkedin',
    iconName: 'LinkedinIcon',
    backgroundColor: '#0077B5',
    textColor: '#ffffff',
    urlPlaceholder: 'https://linkedin.com/in/username',
  },
  {
    name: 'YouTube',
    iconFile: 'youtube',
    iconName: 'YoutubeIcon',
    backgroundColor: '#FF0000',
    textColor: '#ffffff',
    urlPlaceholder: 'https://youtube.com/@username',
  },
  {
    name: 'Facebook',
    iconFile: 'facebook',
    iconName: 'FacebookIcon',
    backgroundColor: '#1877F2',
    textColor: '#ffffff',
    urlPlaceholder: 'https://facebook.com/username',
  },
  {
    name: 'GitLab',
    iconFile: 'gitlab',
    iconName: 'GitlabIcon',
    backgroundColor: '#FC6D26',
    textColor: '#ffffff',
    urlPlaceholder: 'https://gitlab.com/username',
  },
  {
    name: 'X',
    iconFile: 'x',
    iconName: 'XIcon',
    backgroundColor: '#0a0a0a',
    textColor: '#ffffff',
    urlPlaceholder: 'https://x.com/username',
  },
]

export const PLATFORM_URL_REGEX = {
  Github: /^(?:https?:\/\/)?(?:www\.)?github\.com\/[\w-]+\/?$/i,
  LinkedIn: /^(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/[\w-]+\/?$/i,
  YouTube: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/@[\w-]{3,}\/?$/i,
  Facebook: /^(?:https?:\/\/)?(?:www\.)?(facebook|fb)\.com\/[\w.]+\/?$/i,
  GitLab: /^(?:https?:\/\/)?(?:www\.)?gitlab\.com\/[\w-]+\/?$/i,
  X: /^(?:https?:\/\/)?(?:www\.)?(x|twitter)\.com\/[\w-]+\/?$/i,
} as const

//export the regex keys as types
export type PlatformName = keyof typeof PLATFORM_URL_REGEX
