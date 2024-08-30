import requests from "./httpRequest";

const AdminService = {
  login: async (body) => requests.post("/auth/admin/login", body),
  register: async (body) => requests.post("/auth/admin/register", body),
  getAllContents: async () => requests.get("/content"),
};

export default AdminService;
