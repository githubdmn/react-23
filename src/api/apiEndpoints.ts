export const apiEndpoints = {
  get: {
    logout: '/user/logout',
    refreshToken: '/user/refresh-token',
    lists: '/todo/lists',
    list: '/todo/list',
  },
  post: {
    login: '/user/login',
    register: '/user',
    changePassword: '/user/change-password',
    createList: '/todo',
    item: '/todo/item',
  },
  update: {
    updateList: '/todo/list',
    item: '/todo/item',
  },
  delete: {
    list: (listId: string) => `/todo/${listId}`,
  },
};
