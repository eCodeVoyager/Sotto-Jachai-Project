import requests from "./httpRequest";

const AuthService = {
  register: async (body) => requests.post("", body),
  login: async (body) => requests.post("/auth/login", body),
};

export default AuthService;
