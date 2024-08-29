import requests from "./httpRequest";

const AuthService = {
  login: async (body) => requests.post("/auth/admin/login", body),
};

export default AuthService;
