export const apiRoutes = {
  auth: {
    register: '/api/register',
    logout: '/api/logout',
  },
  uploadFile: '/api/upload-file',
  userLinks: '/api/user-links',
  deleteUserLinks: (id: string) => `/api/user-links/${id}`,
  getUserLinkById: (id: string) => `/api/user-links/${id}`,
  userInformation: '/api/user-information',
}
