import { TUser } from '../types';

const fetchUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users`, {
    method: 'GET',
    headers: {
      // Authorization: `token ${import.meta.env.VITE_GITHUB_BEARER_TOKEN}`,
    },
  });
  const data: TUser[] = await response.json();

  return data;
};

const searchUser = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/search/users?${params}`,
    {
      method: 'GET',
      headers: {
        // Authorization: `token ${import.meta.env.VITE_GITHUB_BEARER_TOKEN}`,
      },
    },
  );
  const { items }: { items: TUser[] } = await response.json();

  return items;
};

const getUser = async (login: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/users/${login}`,
    {
      method: 'GET',
      headers: {
        // Authorization: `token ${import.meta.env.VITE_GITHUB_BEARER_TOKEN}`,
      },
    },
  );

  if (response.status === 404) {
    window.location.href = '/notfound';
  } else {
    const data: TUser = await response.json();
    return data;
  }
};

export { fetchUsers, searchUser, getUser };
