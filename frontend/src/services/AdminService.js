import requests from "./httpRequest";

const AdminService = {
  login: async (body) => requests.post("/auth/admin/login", body),
  register: async (body) => requests.post("/auth/admin/register", body),
  getAllContents: async () => requests.get("/content"),
  statusUpdate: async (postId, status) =>
    requests.put(`content/verify/${postId}?status=${status}`),
  deleteContent: async (postId) => requests.delete(`/content/${postId}`),
};

export default AdminService;
