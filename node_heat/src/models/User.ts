type CreateUserModel = {
  name: string;
  password: string;
  login: string;
};

type AuthenticateUserWithAccountModel = {
  login: string;
  password: string;
};

type DatabaseUser = {
    id: string,
    name: string,
    password: string,
    github_id: number,
    avatar_url: string,
    login: string
}

export { CreateUserModel, AuthenticateUserWithAccountModel, DatabaseUser };
