export const sanitizeUrl = (url: string): string => {
  // Remove existing protocol if present
  const cleanUrl = url.replace(/^https?:\/\//, '')

  // Add 'https://' if no protocol is present
  return cleanUrl.startsWith('//') ? `https:${cleanUrl}` : `https://${cleanUrl}`
}
