export const routes = {
  login: '/login',
  register: '/register',
  home: '/',
  links: '/',
  profileDetails: '/profile',
  previewProfile: (id: string | number) => `/profile/${id}`,
}
