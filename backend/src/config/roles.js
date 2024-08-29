// Role-based authorization configuration.
const roles = {
  admin: {
    can: [
      "verifyContent",
      "submitContent",
      "getContent",
      "getContents",
      "deleteContent",
    ],
  },
  user: {
    can: ["submitContent"],
  },
};

module.exports = roles;
