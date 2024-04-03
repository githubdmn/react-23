export type User = {
  email: string;
  firstName: string;
  lastName: string;
};

export type SignUpResponse = {
  data: {
    data: {
      user: User;
      accessToken: string;
      refreshToken: string;
    };
  };
};
