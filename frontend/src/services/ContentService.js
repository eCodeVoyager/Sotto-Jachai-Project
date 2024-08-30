import requests from "./httpRequest";

const ContentService = {
  create: async (body) =>
    requests.post("/content", body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Key: "Content",
      },
    }),
  getSingleContent: async (postId) => requests.get(`/content/${postId}`),
  getMyContent: async () => requests.get("/content/my-contents"),
  deleteContent: async (postId) => requests.delete(`/content/${postId}`),
  verifyPost: async (key) => requests.get(`/verify/${key}`),
};

export default ContentService;
