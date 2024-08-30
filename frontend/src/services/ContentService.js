import requests from "./httpRequest";

const ContentService = {
  create: async (body) => requests.post("/content", body),
  getSingleContent: async (postId) => requests.get(`/content/${postId}`),
  getMyContent: async () => requests.get("/content/my-contents"),
  deleteContent: async (postId) => requests.delete(`/content/${postId}`),
};

export default ContentService;
